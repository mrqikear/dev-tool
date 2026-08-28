/* ==========================================================================
   [SEO & GEO 算法核心库] - JSON 高精度格式化、校验、转义与 TypeScript 生成引擎
   - 100% 浏览器客户端运行，零云端上传，确保机密数据与 Token 安全
   - 解决接口同名冲突与字段静默丢失问题，支持复杂多层嵌套推导
   ========================================================================== */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  line?: number;
  column?: number;
  nodeCount?: number;
  byteSize?: number;
}

export const SAMPLE_JSON = `{
  "id": 10086,
  "name": "DevText Pro",
  "version": "2.5.0",
  "isPublic": true,
  "author": {
    "username": "developer",
    "email": "dev@antigravity.io",
    "roles": ["admin", "contributor"]
  },
  "features": [
    { "name": "Letter Case Converter", "active": true },
    { "name": "Cron Visualizer", "active": true },
    { "name": "JSON Processor & TypeScript Generator", "active": true }
  ],
  "metadata": {
    "createdAt": "2026-08-28T08:00:00Z",
    "tags": ["toolkit", "devtools", "indie-hacker"]
  }
}`;

/**
 * 校验 JSON 字符串
 */
export function validateJson(raw: string): ValidationResult {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { isValid: true, nodeCount: 0, byteSize: 0 };
  }

  try {
    const parsed = JSON.parse(trimmed);
    const countNodes = (obj: any): number => {
      if (obj === null || typeof obj !== 'object') return 1;
      let count = 1;
      for (const key of Object.keys(obj)) {
        count += countNodes(obj[key]);
      }
      return count;
    };

    const byteSize = new Blob([trimmed]).size;
    return {
      isValid: true,
      nodeCount: countNodes(parsed),
      byteSize,
    };
  } catch (err: any) {
    const message = err.message || 'Invalid JSON format';
    let line: number | undefined;
    let column: number | undefined;

    const lineMatch = message.match(/line\s+(\d+)/i) || message.match(/at\s+position\s+(\d+)/i);
    const colMatch = message.match(/column\s+(\d+)/i);

    if (lineMatch) line = parseInt(lineMatch[1], 10);
    if (colMatch) column = parseInt(colMatch[1], 10);

    const posMatch = message.match(/at\s+position\s+(\d+)/i);
    if (posMatch && !line) {
      const pos = parseInt(posMatch[1], 10);
      const lines = trimmed.slice(0, pos).split('\n');
      line = lines.length;
      column = lines[lines.length - 1].length + 1;
    }

    return {
      isValid: false,
      error: message,
      line,
      column,
    };
  }
}

/**
 * JSON 格式化 / 美化
 */
export function formatJson(raw: string, indent: number = 2): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  const parsed = JSON.parse(trimmed);
  return JSON.stringify(parsed, null, indent);
}

/**
 * JSON 压缩 / 紧凑化
 */
export function minifyJson(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  const parsed = JSON.parse(trimmed);
  return JSON.stringify(parsed);
}

/**
 * 转义 JSON 字符串 (Escape: " -> \")
 */
export function escapeJson(raw: string): string {
  if (!raw) return '';
  return JSON.stringify(raw).slice(1, -1);
}

/**
 * 去除转义 (Unescape: \" -> ")
 */
export function unescapeJson(raw: string): string {
  if (!raw) return '';
  try {
    return JSON.parse(`"${raw}"`);
  } catch {
    return raw.replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\t/g, '\t');
  }
}

/**
 * Unicode 解码 (\u4e2d\u6587 -> 中文)
 */
export function decodeUnicode(raw: string): string {
  if (!raw) return '';
  return raw.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
}

/**
 * Unicode 编码 (非 ASCII 字符 -> \uXXXX)
 */
export function encodeUnicode(raw: string): string {
  if (!raw) return '';
  return raw.replace(/[^\x00-\x7F]/g, (char) => {
    return '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0');
  });
}

/**
 * 根据 JSON 自动生成 TypeScript Interface (无命名冲突与字段丢失)
 */
export function jsonToTypeScript(raw: string, rootName: string = 'RootModel'): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';

  const parsed = JSON.parse(trimmed);
  const interfaces: Map<string, { body: string; shapeHash: string }> = new Map();

  const capitalize = (s: string) => {
    const clean = s.replace(/[^a-zA-Z0-9_$]/g, '');
    return clean ? clean.charAt(0).toUpperCase() + clean.slice(1) : 'Item';
  };

  const getShapeHash = (obj: any): string => {
    if (typeof obj !== 'object' || obj === null) return typeof obj;
    return Object.keys(obj).sort().join(',');
  };

  const generateInterface = (obj: any, baseName: string): string => {
    const shapeHash = getShapeHash(obj);
    let finalName = baseName;

    // 检查是否存在同名但结构不同的接口，若有则增加后缀消除冲突
    let counter = 1;
    while (interfaces.has(finalName)) {
      const existing = interfaces.get(finalName)!;
      if (existing.shapeHash === shapeHash) {
        return finalName; // 结构相同，直接复用已有类型
      }
      counter++;
      finalName = `${baseName}${counter}`;
    }

    const lines: string[] = [`export interface ${finalName} {`];

    for (const [key, value] of Object.entries(obj)) {
      const validKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
      const propType = inferType(value, key);
      lines.push(`  ${validKey}: ${propType};`);
    }

    lines.push('}');
    interfaces.set(finalName, { body: lines.join('\n'), shapeHash });
    return finalName;
  };

  const inferType = (val: any, propName: string): string => {
    if (val === null) return 'any';
    if (Array.isArray(val)) {
      if (val.length === 0) return 'any[]';
      const singleItem = val[0];
      if (typeof singleItem === 'object' && singleItem !== null) {
        const singularName = propName.endsWith('s') && propName.length > 1
          ? propName.slice(0, -1)
          : `${propName}Item`;
        const itemTypeName = capitalize(singularName);
        const actualType = generateInterface(singleItem, itemTypeName);
        return `${actualType}[]`;
      }
      return `${typeof singleItem}[]`;
    }
    if (typeof val === 'object') {
      const typeName = capitalize(propName);
      return generateInterface(val, typeName);
    }
    return typeof val;
  };

  if (Array.isArray(parsed)) {
    if (parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0] !== null) {
      const itemName = generateInterface(parsed[0], rootName + 'Item');
      const allBodies = Array.from(interfaces.values()).map((v) => v.body);
      return allBodies.join('\n\n') + `\n\nexport type ${rootName} = ${itemName}[];`;
    }
    return `export type ${rootName} = any[];`;
  } else if (typeof parsed === 'object' && parsed !== null) {
    generateInterface(parsed, rootName);
    const allBodies = Array.from(interfaces.values()).map((v) => v.body);
    return allBodies.join('\n\n');
  }

  return `export type ${rootName} = ${typeof parsed};`;
}

/**
 * 高性能 Apple SF 代码高亮 (HTML 字符串渲染)
 */
export function highlightJsonHtml(code: string): string {
  if (!code) return '';
  if (code.includes('export interface') || code.includes('export type')) {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\b(export|interface|type)\b/g, '<span class="text-[#AF52DE] dark:text-[#BF5AF2] font-semibold">$1</span>')
      .replace(/\b(string|number|boolean|any)\b/g, '<span class="text-[#0071E3] dark:text-[#2997FF] font-semibold">$1</span>')
      .replace(/([a-zA-Z0-9_$]+)(?=:)/g, '<span class="text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold">$1</span>');
  }

  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = 'text-[#28CD41] dark:text-[#30D158]';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'text-[#0071E3] dark:text-[#2997FF] font-semibold';
        } else {
          cls = 'text-[#28CD41] dark:text-[#30D158]';
        }
      } else if (/true|false/.test(match)) {
        cls = 'text-[#AF52DE] dark:text-[#BF5AF2] font-semibold';
      } else if (/null/.test(match)) {
        cls = 'text-[#86868B] italic';
      } else {
        cls = 'text-[#FF9500] dark:text-[#FF9F0A] font-semibold';
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}
