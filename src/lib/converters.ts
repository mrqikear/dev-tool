// Split words preserving camelCase, PascalCase, snake_case, kebab-case
export function getWords(str: string): string[] {
  if (!str) return [];
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/[-_./\\]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

// 1. Basic Case Conversions
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function toCapitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toLowerFirstWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toLowerCase());
}

export function toSentenceCase(str: string): string {
  const lower = str.toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
}

const MINOR_WORDS = new Set([
  'and', 'as', 'but', 'for', 'if', 'nor', 'or', 'so', 'yet', 'a', 'an', 'the',
  'at', 'by', 'for', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via', 'with'
]);

export function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/\b\w+/g, (word, index) => {
    if (index === 0 || !MINOR_WORDS.has(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });
}

export function toAlternatingCase(str: string): string {
  let isUpper = false;
  return str
    .split('')
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        isUpper = !isUpper;
        return isUpper ? char.toUpperCase() : char.toLowerCase();
      }
      return char;
    })
    .join('');
}

export function toInverseCase(str: string): string {
  return str
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) return char.toLowerCase();
      return char.toUpperCase();
    })
    .join('');
}

// 2. Developer Naming Conventions
export function toCamelCase(str: string): string {
  return str
    .split('\n')
    .map((line) => {
      const words = getWords(line);
      if (words.length === 0) return '';
      return words
        .map((word, i) => {
          const lower = word.toLowerCase();
          return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
    })
    .join('\n');
}

export function toPascalCase(str: string): string {
  return str
    .split('\n')
    .map((line) => {
      const words = getWords(line);
      return words
        .map((word) => {
          const lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
    })
    .join('\n');
}

export function toSnakeCase(str: string): string {
  return str
    .split('\n')
    .map((line) => getWords(line).map((w) => w.toLowerCase()).join('_'))
    .join('\n');
}

export function toConstantCase(str: string): string {
  return str
    .split('\n')
    .map((line) => getWords(line).map((w) => w.toUpperCase()).join('_'))
    .join('\n');
}

export function toKebabCase(str: string): string {
  return str
    .split('\n')
    .map((line) => getWords(line).map((w) => w.toLowerCase()).join('-'))
    .join('\n');
}

export function toDotCase(str: string): string {
  return str
    .split('\n')
    .map((line) => getWords(line).map((w) => w.toLowerCase()).join('.'))
    .join('\n');
}

// 3. Delimiter & String Substitutions
export function spaceToSnake(str: string): string {
  return str.replace(/[ \t]+/g, '_');
}

export function snakeToCamel(str: string): string {
  return str.replace(/([-_][a-z0-9])/gi, ($1) =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );
}

export function camelToSnake(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .toLowerCase();
}

export function camelToSpace(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
}

export function spaceToKebab(str: string): string {
  return str.replace(/[ \t]+/g, '-');
}

export function snakeToKebab(str: string): string {
  return str.replace(/_/g, '-');
}

export function kebabToSnake(str: string): string {
  return str.replace(/-/g, '_');
}

export function snakeToSpace(str: string): string {
  return str.replace(/_/g, ' ');
}

export function snakeToDot(str: string): string {
  return str.replace(/_/g, '.');
}

export function dotToSnake(str: string): string {
  return str.replace(/\./g, '_');
}

export function spaceToNewline(str: string): string {
  return str.replace(/[ \t]+/g, '\n');
}

export function newlineToSpace(str: string): string {
  return str.replace(/[\r\n]+/g, ' ');
}

// 4. Content Cleaners & Sorters
export function stripSymbols(str: string): string {
  return str.replace(/[^\w\s\u4e00-\u9fa5]/gi, '');
}

export function stripSpaces(str: string): string {
  return str.replace(/[ \t]+/g, '');
}

export function stripNewlines(str: string): string {
  return str.replace(/[\r\n]+/g, '');
}

export function trimLines(str: string): string {
  return str
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
}

export function removeEmptyLines(str: string): string {
  return str
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .join('\n');
}

export function removeDuplicateLines(str: string): string {
  const lines = str.split('\n');
  return Array.from(new Set(lines)).join('\n');
}

export function sortLinesAsc(str: string): string {
  return str
    .split('\n')
    .sort((a, b) => a.localeCompare(b))
    .join('\n');
}

export function sortLinesDesc(str: string): string {
  return str
    .split('\n')
    .sort((a, b) => b.localeCompare(a))
    .join('\n');
}

export function reverseText(str: string): string {
  return str.split('').reverse().join('');
}
