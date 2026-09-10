/* ==========================================================================
   [SEO & GEO 国际化字典] - 6 大主流语言顶级原生技术术语
   - 支持三大核心工具：字母大小写 (Case)、Cron 调度 (Cron)、JSON 处理与 TS (JSON)
   - 100% 深度国际化，各语言均有高质量专业 FAQ 与对照表，0 语言混杂与残留
   ========================================================================== */

export type Locale = 'en' | 'es' | 'ja' | 'de' | 'fr' | 'zh';
export type ToolType = 'case' | 'cron' | 'json';

export interface FAQItem {
  q: string;
  a: string;
}

export interface CaseTableRow {
  name: string;
  example: string;
  usage: string;
}

export interface JsonTableRow {
  type: string;
  example: string;
  desc: string;
}

export interface Translation {
  nav: {
    caseConverter: string;
    cronVisualizer: string;
    jsonProcessor: string;
    switchTool: string;
    clientSafe: string;
    zeroLatency: string;
    footerTitle: string;
    footerSubtitle: string;
    privacyPolicy: string;
    termsOfService: string;
    aboutContact: string;
    toolsTab: string;
    howToTab: string;
    useCasesTab: string;
    cheatsheetTab: string;
    guidesTab: string;
    faqTab: string;
    readGuide: string;
    backToGuides: string;
    tryExample: string;
    featuredGuidesTitle: string;
    featuredGuidesSubtitle: string;
    cheatsheetTitle: string;
    cheatsheetSubtitle: string;
  };
  case: {
    title: string;
    badge: string;
    placeholder: string;
    copySuccess: string;
    cutSuccess: string;
    inputLabel: string;
    resultLabel: string;
    charsLabel: string;
    resultPlaceholder: string;
    options: {
      autoCopy: string;
      showNewBox: string;
      yes: string;
      no: string;
    };
    buttons: {
      upper: string;
      lower: string;
      capitalize: string;
      lowerFirst: string;
      sentence: string;
      title: string;
      copy: string;
      cut: string;
      clear: string;
      spaceToSnake: string;
      snakeToCamel: string;
      camelToSnake: string;
      camelToSpace: string;
      spaceToKebab: string;
      snakeToKebab: string;
      kebabToSnake: string;
      snakeToSpace: string;
      snakeToDot: string;
      dotToSnake: string;
      spaceToNewline: string;
      newlineToSpace: string;
      stripSymbols: string;
      stripSpaces: string;
      stripNewlines: string;
    };
    tips: string;
    table: {
      title: string;
      thConvention: string;
      thExample: string;
      thUsage: string;
      rows: CaseTableRow[];
    };
    faqTitle: string;
    faqs: FAQItem[];
  };
  cron: {
    title: string;
    badge: string;
    subtitle: string;
    modeLinux: string;
    modeSpring: string;
    modeQuartz: string;
    inputLabel: string;
    inputPlaceholder: string;
    calcBtn: string;
    humanExplanation: string;
    nextRunsTitle: string;
    quickPresetsTitle: string;
    copyExpr: string;
    copied: string;
    presetApplied: string;
    emptyRuns: string;
    fields: {
      sec: string;
      min: string;
      hour: string;
      dom: string;
      mon: string;
      dow: string;
      year: string;
    };
    table: {
      title: string;
      thField: string;
      thAllowed: string;
      thSpecial: string;
      thExample: string;
    };
    faqTitle: string;
    faqs: FAQItem[];
  };
  json: {
    title: string;
    badge: string;
    subtitle: string;
    inputLabel: string;
    inputPlaceholder: string;
    outputLabel: string;
    outputPlaceholder: string;
    validBadge: string;
    invalidBadge: string;
    errors: {
      formatError: string;
      parseError: string;
    };
    views: {
      split: string;
      wide: string;
      fullscreen: string;
      exitFullscreen: string;
      ready: string;
      copied: string;
    };
    buttons: {
      format2: string;
      format4: string;
      minify: string;
      escape: string;
      unescape: string;
      unicodeDecode: string;
      unicodeEncode: string;
      toTypeScript: string;
      sample: string;
      copy: string;
      clear: string;
      download: string;
    };
    stats: {
      nodes: string;
      size: string;
      lines: string;
    };
    table: {
      title: string;
      thType: string;
      thExample: string;
      thDesc: string;
      rows: JsonTableRow[];
    };
    faqTitle: string;
    faqs: FAQItem[];
  };
}

export const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
];

export const translations: Record<Locale, Translation> = {
  // 🇺🇸 English
  en: {
    nav: {
      caseConverter: 'Case & Naming',
      cronVisualizer: 'Cron Schedule',
      jsonProcessor: 'JSON & TypeScript',
      switchTool: 'Related Tool:',
      clientSafe: '100% In-Browser & Private',
      zeroLatency: 'Zero Latency Engine',
      footerTitle: 'DevText Toolkit',
      footerSubtitle: 'High-Performance Developer Utilities',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      aboutContact: 'About & Contact',
      toolsTab: 'Utilities',
      howToTab: 'How-To Guide',
      useCasesTab: 'Use Cases',
      cheatsheetTab: 'Syntax Cheatsheet',
      guidesTab: 'Developer Guides',
      faqTab: 'FAQ',
      readGuide: 'Read In-Depth Guide',
      backToGuides: 'Back to Guides',
      tryExample: 'Try in Tool',
      featuredGuidesTitle: 'In-Depth Developer Guides',
      featuredGuidesSubtitle: 'Authoritative engineering specifications, clean code standards, and system architecture practices.',
      cheatsheetTitle: 'Interactive Developer Cheatsheet',
      cheatsheetSubtitle: 'Quick-reference matrices for naming conventions, cron scheduling, and JSON data structures.',
    },
    case: {
      title: 'Case & Code Naming Converter',
      badge: 'Client-Side Only · Zero Tracking',
      placeholder: 'Type or paste code, variable names, or raw text here...',
      copySuccess: 'Copied to clipboard!',
      cutSuccess: 'Cut to clipboard!',
      inputLabel: 'SOURCE TEXT',
      resultLabel: 'OUTPUT',
      charsLabel: 'chars',
      resultPlaceholder: 'Transformed output will appear here...',
      options: {
        autoCopy: 'Auto-copy on click:',
        showNewBox: 'Dual-pane split view:',
        yes: 'Yes',
        no: 'No',
      },
      buttons: {
        upper: 'UPPERCASE',
        lower: 'lowercase',
        capitalize: 'Capitalize Each Word',
        lowerFirst: 'lowerFirst',
        sentence: 'Sentence case',
        title: 'Title Case',
        copy: 'Copy',
        cut: 'Cut',
        clear: 'Clear',
        spaceToSnake: 'Spaces ➔ snake_case',
        snakeToCamel: 'snake_case ➔ camelCase',
        camelToSnake: 'camelCase ➔ snake_case',
        camelToSpace: 'camelCase ➔ Spaces',
        spaceToKebab: 'Spaces ➔ kebab-case',
        snakeToKebab: 'snake_case ➔ kebab-case',
        kebabToSnake: 'kebab-case ➔ snake_case',
        snakeToSpace: 'snake_case ➔ Spaces',
        snakeToDot: 'snake_case ➔ dot.case',
        dotToSnake: 'dot.case ➔ snake_case',
        spaceToNewline: 'Spaces ➔ Lines',
        newlineToSpace: 'Lines ➔ Spaces',
        stripSymbols: 'Remove Special Chars',
        stripSpaces: 'Remove All Spaces',
        stripNewlines: 'Remove Blank Lines',
      },
      tips: 'All transformations execute locally in your browser memory. No data ever leaves your device.',
      table: {
        title: 'Code Naming Conventions & Best Practices',
        thConvention: 'Convention',
        thExample: 'Example',
        thUsage: 'Industry Standards',
        rows: [
          { name: 'camelCase', example: 'userProfileId', usage: 'Java, JavaScript, TypeScript variables & method names' },
          { name: 'PascalCase', example: 'UserProfileId', usage: 'Java/C# classes, React/Vue components, TypeScript types' },
          { name: 'snake_case', example: 'user_profile_id', usage: 'Python variables, SQL table & column names, REST parameters' },
          { name: 'kebab-case', example: 'user-profile-id', usage: 'URL slugs, CSS class names, HTML custom attributes, package names' },
          { name: 'SCREAMING_SNAKE_CASE', example: 'USER_PROFILE_ID', usage: 'Global constants, environment variables, Enum values' },
        ],
      },
      faqTitle: 'Frequently Asked Questions (FAQ)',
      faqs: [
        {
          q: 'When should I use camelCase vs snake_case?',
          a: 'Use camelCase for frontend code (JavaScript/TypeScript) and Java backends. Use snake_case for Python code, PostgreSQL/MySQL database schemas, and external API payload keys.',
        },
        {
          q: 'Is text processing secure on this website?',
          a: 'Yes, 100%. All algorithms run entirely in your local browser memory using JavaScript. No text is ever uploaded to any server or cloud.',
        },
      ],
    },
    cron: {
      title: 'Cron Expression Visualizer & Timeline Simulator',
      badge: 'Linux · Spring · Quartz',
      subtitle: 'Instant natural language explanation with live upcoming execution schedules.',
      modeLinux: 'Linux (5)',
      modeSpring: 'Spring (6)',
      modeQuartz: 'Quartz (6-7)',
      inputLabel: 'CRON EXPRESSION',
      inputPlaceholder: 'e.g. 0 */12 * * * (Linux) or 0 0 18 L * ? (Quartz)',
      calcBtn: 'Calculate Schedule',
      humanExplanation: 'Schedule Summary',
      nextRunsTitle: 'Next 7 Scheduled Executions',
      quickPresetsTitle: 'Common Presets',
      copyExpr: 'Copy Expression',
      copied: 'Copied to clipboard!',
      presetApplied: 'Preset applied',
      emptyRuns: 'No upcoming execution dates found for this expression.',
      fields: {
        sec: 'Seconds',
        min: 'Minutes',
        hour: 'Hours',
        dom: 'Day of Month',
        mon: 'Month',
        dow: 'Day of Week',
        year: 'Year (Optional)',
      },
      table: {
        title: 'Cron Syntax & Wildcard Reference (Linux vs Spring vs Quartz)',
        thField: 'Field',
        thAllowed: 'Allowed Values',
        thSpecial: 'Special Characters',
        thExample: 'Examples',
      },
      faqTitle: 'Frequently Asked Questions (FAQ)',
      faqs: [
        {
          q: 'What are the key differences between Linux, Spring, and Quartz Cron?',
          a: '1) Linux (5 fields): [Min] [Hour] [Day] [Month] [Weekday] (0-7, 0/7=Sun).\n2) Java Spring (6 fields): adds [Second] at index 0, supports ? wildcard.\n3) Java Quartz (6-7 fields): adds optional [Year], Weekday is 1-7 (1=Sun), supports advanced L (Last), W (Nearest Workday), and # (N-th weekday).',
        },
        {
          q: 'How do L, W, # and ? wildcards work in Quartz Cron?',
          a: '"L" stands for Last (e.g. L for last day of month, 6L for last Friday); "W" matches nearest workday (e.g. 15W); "#" specifies nth weekday (e.g. 6#3 for 3rd Friday); "?" specifies no specific value.',
        },
      ],
    },
    json: {
      title: 'JSON Formatter, Validator & TypeScript Generator',
      badge: '100% Client-Side · Zero Data Upload',
      subtitle: 'High-speed JSON beautifier, minifier, escape/unescape, Unicode converter and TypeScript interface generator.',
      inputLabel: 'INPUT JSON / STRING',
      inputPlaceholder: 'Paste or type raw JSON data here...',
      outputLabel: 'PROCESSED OUTPUT / TYPESCRIPT',
      outputPlaceholder: 'Formatted JSON or generated TypeScript interfaces will appear here...',
      validBadge: 'Valid JSON',
      invalidBadge: 'Syntax Error',
      errors: {
        formatError: 'JSON Formatting Error',
        parseError: 'JSON Parse Error',
      },
      views: {
        split: 'Split',
        wide: 'Wide',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit Fullscreen',
        ready: 'Ready for input',
        copied: 'Copied',
      },
      buttons: {
        format2: 'Format (2 Spaces)',
        format4: 'Format (4 Spaces)',
        minify: 'Minify / Compact',
        escape: 'Escape (\\")',
        unescape: 'Unescape',
        unicodeDecode: 'Unicode ➔ Text',
        unicodeEncode: 'Text ➔ Unicode',
        toTypeScript: '⚡ JSON to TypeScript',
        sample: 'Load Sample',
        copy: 'Copy',
        clear: 'Clear',
        download: 'Download .json',
      },
      stats: {
        nodes: 'nodes',
        size: 'bytes',
        lines: 'lines',
      },
      table: {
        title: 'JSON Data Types & Specifications',
        thType: 'Data Type',
        thExample: 'Example',
        thDesc: 'Standard Description',
        rows: [
          { type: 'Object', example: '{ "key": "value" }', desc: 'Unordered collection of key/value pairs. Keys must be enclosed in double quotes.' },
          { type: 'Array', example: '[ "apple", 123, true ]', desc: 'Ordered list of values separated by commas.' },
          { type: 'String', example: '"Hello \\"World\\""', desc: 'Unicode character sequence in double quotes. Single quotes are invalid.' },
          { type: 'Number', example: '42, 3.14159, 1e10', desc: 'Integer, float, or scientific notation. NaN and Infinity are not permitted.' },
          { type: 'Boolean', example: 'true / false', desc: 'Must be lowercase (true or false).' },
          { type: 'Null', example: 'null', desc: 'Must be lowercase (null), represents an empty value.' },
        ],
      },
      faqTitle: 'JSON Processing FAQ',
      faqs: [
        {
          q: 'Is it safe to format proprietary JSON data or authentication tokens here?',
          a: 'Yes, 100%. All JSON parsing, formatting, and TypeScript generation algorithms execute entirely within your browser memory. No payload is ever sent over the network.',
        },
        {
          q: 'How does the JSON to TypeScript Interface generator work?',
          a: 'The engine recursively analyzes all primitive types, nested objects, and arrays in your JSON payload and automatically generates clean, exportable TypeScript interfaces without field collisions.',
        },
      ],
    },
  },

  // 🇪🇸 Español
  es: {
    nav: {
      caseConverter: 'Mayúsculas y Nombres',
      cronVisualizer: 'Horarios Cron',
      jsonProcessor: 'JSON y TypeScript',
      switchTool: 'Herramienta relacionada:',
      clientSafe: '100% Local en Navegador',
      zeroLatency: 'Procesamiento Instantáneo',
      footerTitle: 'DevText Toolkit',
      footerSubtitle: 'Utilidades de Alto Rendimiento para Desarrolladores',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      aboutContact: 'Acerca de y Contacto',
      toolsTab: 'Utilidades',
      howToTab: 'Cómo usar',
      useCasesTab: 'Casos de uso',
      cheatsheetTab: 'Tabla Rápida',
      guidesTab: 'Guías Técnicas',
      faqTab: 'Preguntas Frecuentes',
      readGuide: 'Leer Guía Detallada',
      backToGuides: 'Volver a Guías',
      tryExample: 'Probar en Herramienta',
      featuredGuidesTitle: 'Guías Técnicas para Desarrolladores',
      featuredGuidesSubtitle: 'Estándares de código limpio, sintaxis cron y arquitectura de APIs.',
      cheatsheetTitle: 'Tabla Rápida Interactiva',
      cheatsheetSubtitle: 'Referencias de nomenclatura, programación cron y tipos JSON.',
    },
    case: {
      title: 'Conversor de Mayúsculas y Nomenclaturas',
      badge: 'Sin Rastreo · Procesamiento Local',
      placeholder: 'Escribe o pega texto, nombres de variables o código aquí...',
      copySuccess: '¡Copiado al portapapeles!',
      cutSuccess: '¡Cortado al portapapeles!',
      inputLabel: 'TEXTO ORIGINAL',
      resultLabel: 'RESULTADO',
      charsLabel: 'caracteres',
      resultPlaceholder: 'El resultado convertido aparecerá aquí...',
      options: {
        autoCopy: 'Copiar al hacer clic:',
        showNewBox: 'Vista dividida en dos paneles:',
        yes: 'Sí',
        no: 'No',
      },
      buttons: {
        upper: 'MAYÚSCULAS',
        lower: 'minúsculas',
        capitalize: 'Mayúscula Cada Palabra',
        lowerFirst: 'Primera minúscula',
        sentence: 'Formato oración',
        title: 'Formato Título (Title Case)',
        copy: 'Copiar',
        cut: 'Cortar',
        clear: 'Limpiar',
        spaceToSnake: 'Espacios ➔ snake_case',
        snakeToCamel: 'snake_case ➔ camelCase',
        camelToSnake: 'camelCase ➔ snake_case',
        camelToSpace: 'camelCase ➔ Espacios',
        spaceToKebab: 'Espacios ➔ kebab-case',
        snakeToKebab: 'snake_case ➔ kebab-case',
        kebabToSnake: 'kebab-case ➔ snake_case',
        snakeToSpace: 'snake_case ➔ Espacios',
        snakeToDot: 'snake_case ➔ dot.case',
        dotToSnake: 'dot.case ➔ snake_case',
        spaceToNewline: 'Espacios ➔ Líneas',
        newlineToSpace: 'Líneas ➔ Espacios',
        stripSymbols: 'Quitar Caracteres Especiales',
        stripSpaces: 'Quitar Todos los Espacios',
        stripNewlines: 'Quitar Líneas en Blanco',
      },
      tips: 'Todo el procesamiento se realiza en la memoria local de tu navegador. Ningún dato sale de tu equipo.',
      table: {
        title: 'Convenciones de Nomenclatura en Código',
        thConvention: 'Convención',
        thExample: 'Ejemplo',
        thUsage: 'Uso Estándar en la Industria',
        rows: [
          { name: 'camelCase', example: 'userProfileId', usage: 'Variables y funciones en Java, JavaScript y TypeScript' },
          { name: 'PascalCase', example: 'UserProfileId', usage: 'Clases en Java/C#, componentes React/Vue' },
          { name: 'snake_case', example: 'user_profile_id', usage: 'Variables en Python, tablas y columnas en SQL' },
          { name: 'kebab-case', example: 'user-profile-id', usage: 'Rutas URL, clases CSS, atributos personalizados en HTML' },
          { name: 'SCREAMING_SNAKE_CASE', example: 'USER_PROFILE_ID', usage: 'Constantes globales, variables de entorno (.env)' },
        ],
      },
      faqTitle: 'Preguntas Frecuentes (FAQ)',
      faqs: [
        {
          q: '¿Cuándo usar camelCase vs snake_case?',
          a: 'Utilice camelCase para desarrollo frontend (JavaScript/TypeScript) y Java. Utilice snake_case para Python y esquemas de base de datos SQL.',
        },
        {
          q: '¿Es seguro procesar código sensible aquí?',
          a: 'Sí, 100%. Todos los algoritmos se ejecutan exclusivamente en la memoria de su navegador. Ningún texto viaja por la red.',
        },
      ],
    },
    cron: {
      title: 'Visualizador de Expresiones Cron y Simulador',
      badge: 'Linux · Spring · Quartz',
      subtitle: 'Traducción inmediata a lenguaje natural y proyección de próximas 7 ejecuciones.',
      modeLinux: 'Linux (5)',
      modeSpring: 'Spring (6)',
      modeQuartz: 'Quartz (6-7)',
      inputLabel: 'EXPRESIÓN CRON',
      inputPlaceholder: 'ej. 0 */12 * * * o 0 0 18 L * ?',
      calcBtn: 'Calcular Ejecuciones',
      humanExplanation: 'Descripción del Horario',
      nextRunsTitle: 'Próximas 7 Ejecuciones Programadas',
      quickPresetsTitle: 'Plantillas Frecuentes',
      copyExpr: 'Copiar Expresión',
      copied: '¡Copiado al portapapeles!',
      presetApplied: 'Plantilla aplicada',
      emptyRuns: 'No se encontraron próximas fechas de ejecución para esta expresión.',
      fields: {
        sec: 'Segundos',
        min: 'Minutos',
        hour: 'Horas',
        dom: 'Día del mes',
        mon: 'Mes',
        dow: 'Día de semana',
        year: 'Año (Opcional)',
      },
      table: {
        title: 'Referencia de Sintaxis Cron (Linux vs Spring vs Quartz)',
        thField: 'Campo',
        thAllowed: 'Valores Válidos',
        thSpecial: 'Caracteres Especiales',
        thExample: 'Ejemplos',
      },
      faqTitle: 'Preguntas Frecuentes sobre Cron (FAQ)',
      faqs: [
        {
          q: '¿Cuáles son las diferencias entre Linux, Spring y Quartz Cron?',
          a: 'Linux usa 5 campos (minuto a semana). Spring añade segundos al inicio (6 campos). Quartz soporta año opcional y caracteres avanzados como L (último día) y W (día laborable).',
        },
      ],
    },
    json: {
      title: 'Formateador JSON, Validador y Generador TypeScript',
      badge: '100% Local · Máxima Privacidad',
      subtitle: 'Embellece, comprime, escapa y convierte JSON en interfaces TypeScript instantáneamente.',
      inputLabel: 'JSON DE ENTRADA',
      inputPlaceholder: 'Pega tu JSON aquí...',
      outputLabel: 'RESULTADO PROCESADO / TYPESCRIPT',
      outputPlaceholder: 'El resultado aparecerá aquí...',
      validBadge: 'JSON Válido',
      invalidBadge: 'Error de Sintaxis',
      errors: {
        formatError: 'Error al formatear JSON',
        parseError: 'Error de sintaxis JSON',
      },
      views: {
        split: 'Dividido',
        wide: 'Panorámica',
        fullscreen: 'Pantalla Completa',
        exitFullscreen: 'Salir de Pantalla Completa',
        ready: 'Listo para entrada',
        copied: 'Copiado',
      },
      buttons: {
        format2: 'Formatear (2 Espacios)',
        format4: 'Formatear (4 Espacios)',
        minify: 'Comprimir / Minificar',
        escape: 'Escapar (\\")',
        unescape: 'Desescapar',
        unicodeDecode: 'Unicode ➔ Texto',
        unicodeEncode: 'Texto ➔ Unicode',
        toTypeScript: '⚡ JSON a TypeScript',
        sample: 'Cargar Ejemplo',
        copy: 'Copiar',
        clear: 'Limpiar',
        download: 'Descargar .json',
      },
      stats: {
        nodes: 'nodos',
        size: 'bytes',
        lines: 'líneas',
      },
      table: {
        title: 'Tipos de Datos JSON',
        thType: 'Tipo',
        thExample: 'Ejemplo',
        thDesc: 'Descripción',
        rows: [
          { type: 'Object (Objeto)', example: '{ "key": "value" }', desc: 'Colección no ordenada de pares clave/valor con comillas dobles.' },
          { type: 'Array (Arreglo)', example: '[ "apple", 123, true ]', desc: 'Colección ordenada de valores separados por comas.' },
          { type: 'String (Cadena)', example: '"Hello \\"World\\""', desc: 'Secuencia de caracteres Unicode delimitada por comillas dobles.' },
          { type: 'Number (Número)', example: '42, 3.14159, 1e10', desc: 'Enteros y decimales. NaN e Infinity no son válidos en JSON estándar.' },
          { type: 'Boolean (Booleano)', example: 'true / false', desc: 'Debe escribirse en minúsculas (true o false).' },
          { type: 'Null (Nulo)', example: 'null', desc: 'Representa un valor vacío o nulo en minúsculas.' },
        ],
      },
      faqTitle: 'Preguntas Frecuentes sobre JSON',
      faqs: [
        {
          q: '¿Es seguro formatear datos JSON confidenciales aquí?',
          a: 'Sí, 100%. Todo el procesamiento ocurre en su navegador sin enviar ningún paquete de red a servidores externos.',
        },
      ],
    },
  },

  // 🇯🇵 日本語
  ja: {
    nav: {
      caseConverter: 'ケース変換・命名規則',
      cronVisualizer: 'Cron 式スケジュール',
      jsonProcessor: 'JSON 整形・TypeScript 生成',
      switchTool: '関連ツール:',
      clientSafe: '100% ブラウザ内ローカル処理',
      zeroLatency: 'ゼロ遅延・高速変換',
      footerTitle: 'DevText Toolkit',
      footerSubtitle: 'エンジニア向け高効率テキスト＆Cronユーティリティ',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      aboutContact: '運営者・お問い合わせ',
      toolsTab: 'ツール一覧',
      howToTab: '使い方ガイド',
      useCasesTab: '活用事例',
      cheatsheetTab: '構文早見表',
      guidesTab: '技術ガイド',
      faqTab: 'よくある質問',
      readGuide: '詳細記事を読む',
      backToGuides: 'ガイド一覧へ戻る',
      tryExample: 'ツールで試す',
      featuredGuidesTitle: '開発者向け詳細技術ガイド',
      featuredGuidesSubtitle: '命名規則の標準、Cron 式の設計、TypeScript 型安全性のベストプラクティス。',
      cheatsheetTitle: 'インタラクティブ構文早見表',
      cheatsheetSubtitle: '命名規則、Cron スケジュール、JSON 型マッピングのクイックリファレンス。',
    },
    case: {
      title: '英字ケース＆コード命名規則 変換ツール',
      badge: '完全ローカル実行 · 外部送信ゼロ',
      placeholder: 'テキスト、変数名、またはコードをここに貼り付けてください...',
      copySuccess: 'クリップボードにコピーしました！',
      cutSuccess: 'クリップボードに切り取りました！',
      inputLabel: '変換前テキスト',
      resultLabel: '変換結果',
      charsLabel: '文字',
      resultPlaceholder: '変換後のテキストがここに表示されます...',
      options: {
        autoCopy: '変換時に自動コピー:',
        showNewBox: '左右2分割で比較表示:',
        yes: 'はい',
        no: 'いいえ',
      },
      buttons: {
        upper: '大文字 (UPPERCASE)',
        lower: '小文字 (lowercase)',
        capitalize: '各単語の先頭を大文字',
        lowerFirst: '先頭文字のみ小文字',
        sentence: '文頭のみ大文字',
        title: 'タイトル形式 (Title Case)',
        copy: 'コピー',
        cut: '切り取り',
        clear: 'クリア',
        spaceToSnake: '空白 ➔ snake_case',
        snakeToCamel: 'snake_case ➔ camelCase',
        camelToSnake: 'camelCase ➔ snake_case',
        camelToSpace: 'camelCase ➔ 空白',
        spaceToKebab: '空白 ➔ kebab-case',
        snakeToKebab: 'snake_case ➔ kebab-case',
        kebabToSnake: 'kebab-case ➔ snake_case',
        snakeToSpace: 'snake_case ➔ 空白',
        snakeToDot: 'snake_case ➔ dot.case',
        dotToSnake: 'dot.case ➔ snake_case',
        spaceToNewline: '空白 ➔ 改行',
        newlineToSpace: '改行 ➔ 空白',
        stripSymbols: '特殊文字を削除',
        stripSpaces: 'すべての空白を削除',
        stripNewlines: '空行を削除',
      },
      tips: 'すべての変換処理はブラウザのメモリ内でのみ実行されます。社内コードや機密データが外部に送信されることはありません。',
      table: {
        title: 'プログラミングにおける主要命名規則と適用例',
        thConvention: '命名規則',
        thExample: '表記例',
        thUsage: '標準的な用途・適用言語',
        rows: [
          { name: 'camelCase (ローワーキャメル)', example: 'userProfileId', usage: 'Java / JavaScript / TypeScript の変数名・メソッド名' },
          { name: 'PascalCase (アッパーキャメル)', example: 'UserProfileId', usage: 'Java / C# のクラス名、React / Vue のコンポーネント名' },
          { name: 'snake_case (スネークケース)', example: 'user_profile_id', usage: 'Python の変数名、MySQL / PostgreSQL のテーブル・カラム名' },
          { name: 'kebab-case (ケバブケース)', example: 'user-profile-id', usage: 'URL スラッグ、CSS クラス名、HTML カスタム属性名' },
          { name: 'SCREAMING_SNAKE_CASE', example: 'USER_PROFILE_ID', usage: 'グローバル定数、環境変数 (.env)、Enum 定数' },
        ],
      },
      faqTitle: 'よくある質問 (FAQ)',
      faqs: [
        {
          q: 'camelCase と snake_case の使い分けは？',
          a: 'フロントエンド (JavaScript/TypeScript) や Java では camelCase、Python やデータベースのカラム名では snake_case が標準的です。',
        },
        {
          q: '機密コードを変換しても安全ですか？',
          a: 'はい、完全安全です。すべての変換処理はブラウザのローカルメモリ内でのみ動作し、ネットワーク通信は一切発生しません。',
        },
      ],
    },
    cron: {
      title: 'Cron 式ビジュアライザー＆実行時刻シミュレーター',
      badge: 'Linux · Spring · Quartz 3大規格完全対応',
      subtitle: '直感的に理解できる自然な解説と、次回以降7回分の実行予定時刻を即時算出。',
      modeLinux: 'Linux (5桁)',
      modeSpring: 'Spring (6桁)',
      modeQuartz: 'Quartz (6-7桁)',
      inputLabel: 'CRON 式',
      inputPlaceholder: '例: 0 */12 * * * または 0 0 18 L * ?',
      calcBtn: '実行時刻を計算',
      humanExplanation: '実行周期の説明',
      nextRunsTitle: '次回以降 7 回分の実行予定時刻',
      quickPresetsTitle: '定番プリセット',
      copyExpr: 'Cron 式をコピー',
      copied: 'コピーしました！',
      presetApplied: 'プリセットを適用しました',
      emptyRuns: 'この Cron 式に一致する次回の実行予定は見つかりませんでした。',
      fields: {
        sec: '秒',
        min: '分',
        hour: '時',
        dom: '日',
        mon: '月',
        dow: '曜日',
        year: '年 (任意)',
      },
      table: {
        title: 'Cron 構文仕様比較一覧 (Linux / Spring / Quartz)',
        thField: 'フィールド',
        thAllowed: '有効な値',
        thSpecial: '使用可能な記号',
        thExample: '設定例',
      },
      faqTitle: 'よくある質問 (FAQ)',
      faqs: [
        {
          q: 'Linux、Spring、Quartz の Cron 構文の違いは何ですか？',
          a: 'Linux は「分」から始まる 5 桁、Spring は先頭に「秒」が加わる 6 桁、Quartz は末尾に「年」を指定可能な 6〜7 桁構成で、L(月末) や W(平日) などの高度な記号に対応します。',
        },
      ],
    },
    json: {
      title: 'JSON 整形・構文チェック・TypeScript 型定義生成',
      badge: '完全ローカル実行 · 機密データ送信ゼロ',
      subtitle: '高速 JSON フォーマッター、圧縮、エスケープ変換、Unicode 復元、TypeScript 型定義への自動変換ツール。',
      inputLabel: '入力 JSON / 文字列',
      inputPlaceholder: 'ここに JSON データを貼り付けてください...',
      outputLabel: '処理結果 / TYPESCRIPT 型定義',
      outputPlaceholder: '整形結果または TypeScript インターフェースがここに表示されます...',
      validBadge: '正常な JSON',
      invalidBadge: '構文エラー',
      errors: {
        formatError: 'JSON 整形エラー',
        parseError: 'JSON 構文解析エラー',
      },
      views: {
        split: '2分割',
        wide: '全幅表示',
        fullscreen: '全画面表示',
        exitFullscreen: '全画面解除',
        ready: '入力待機中',
        copied: 'コピー完了',
      },
      buttons: {
        format2: '整形 (2文字インデント)',
        format4: '整形 (4文字インデント)',
        minify: '圧縮 (Minify)',
        escape: 'エスケープ (\\")',
        unescape: 'アンエスケープ',
        unicodeDecode: 'Unicode ➔ 日本語',
        unicodeEncode: '日本語 ➔ Unicode',
        toTypeScript: '⚡ TypeScript 型定義生成',
        sample: 'サンプル読込',
        copy: 'コピー',
        clear: 'クリア',
        download: '.json 保存',
      },
      stats: {
        nodes: 'ノード数',
        size: 'バイト',
        lines: '行',
      },
      table: {
        title: 'JSON データ型と仕様',
        thType: 'データ型',
        thExample: '例',
        thDesc: '説明',
        rows: [
          { type: 'Object (オブジェクト)', example: '{ "key": "value" }', desc: 'キーと値のペアの順序なしコレクション。キーは二重引用符が必須です。' },
          { type: 'Array (配列)', example: '[ "apple", 123, true ]', desc: 'カンマで区切られた値の順序付きコレクション。' },
          { type: 'String (文字列)', example: '"Hello \\"World\\""', desc: '二重引用符で囲まれた Unicode 文字列。単一引用符は無効です。' },
          { type: 'Number (数値)', example: '42, 3.14159, 1e10', desc: '整数、浮動小数点数、指数表記に対応。NaN / Infinity は使用不可。' },
          { type: 'Boolean (真偽値)', example: 'true / false', desc: '小文字 (true / false) のみ有効です。' },
          { type: 'Null (空値)', example: 'null', desc: '値が存在しないことを示す小文字の null。' },
        ],
      },
      faqTitle: 'JSON ツールに関する FAQ',
      faqs: [
        {
          q: 'API トークンや顧客データを安全に整形できますか？',
          a: 'はい、完全ローカル実行のためデータが外部サーバーへ送信されることは一切ありません。安心してお使いいただけます。',
        },
      ],
    },
  },

  // 🇩🇪 Deutsch
  de: {
    nav: {
      caseConverter: 'Schreibweisen & Naming',
      cronVisualizer: 'Cron-Zeitplan',
      jsonProcessor: 'JSON & TypeScript',
      switchTool: 'Verwandtes Tool:',
      clientSafe: '100% Lokal im Browser',
      zeroLatency: 'Null-Latenz-Engine',
      footerTitle: 'DevText Toolkit',
      footerSubtitle: 'Hochleistungs-Entwickler-Werkzeuge',
      privacyPolicy: 'Datenschutzerklärung',
      termsOfService: 'Nutzungsbedingungen',
      aboutContact: 'Über uns & Kontakt',
      toolsTab: 'Entwickler-Tools',
      howToTab: 'Anleitung',
      useCasesTab: 'Anwendungsfälle',
      cheatsheetTab: 'Spickzettel',
      guidesTab: 'Fachartikel',
      faqTab: 'Häufige Fragen',
      readGuide: 'Leitfaden lesen',
      backToGuides: 'Zurück zur Übersicht',
      tryExample: 'Im Tool testen',
      featuredGuidesTitle: 'Technische Leitfäden für Entwickler',
      featuredGuidesSubtitle: 'Namenskonventionen, Cron-Syntax und TypeScript-Typsicherheit fundiert erklärt.',
      cheatsheetTitle: 'Interaktiver Syntax-Spickzettel',
      cheatsheetSubtitle: 'Schnellübersicht für Code-Benennungen, Cron-Muster und JSON-Mappings.',
    },
    case: {
      title: 'Schreibweisen- & Code-Konverter',
      badge: 'Client-Seitig · Kein Tracking',
      placeholder: 'Text, Variablennamen oder Code hier einfügen...',
      copySuccess: 'In die Zwischenablage kopiert!',
      cutSuccess: 'In die Zwischenablage ausgeschnitten!',
      inputLabel: 'EINGABETEXT',
      resultLabel: 'ERGEBNIS',
      charsLabel: 'Zeichen',
      resultPlaceholder: 'Das konvertierte Ergebnis erscheint hier...',
      options: {
        autoCopy: 'Automatisch kopieren:',
        showNewBox: 'Zwei-Spalten-Ansicht:',
        yes: 'Ja',
        no: 'Nein',
      },
      buttons: {
        upper: 'GROSSBUCHSTABEN',
        lower: 'kleinbuchstaben',
        capitalize: 'Jedes Wort Groß',
        lowerFirst: 'Ersten Buchstaben klein',
        sentence: 'Satzanfang groß',
        title: 'Titel-Schreibweise (Title Case)',
        copy: 'Kopieren',
        cut: 'Ausschneiden',
        clear: 'Löschen',
        spaceToSnake: 'Leerzeichen ➔ snake_case',
        snakeToCamel: 'snake_case ➔ camelCase',
        camelToSnake: 'camelCase ➔ snake_case',
        camelToSpace: 'camelCase ➔ Leerzeichen',
        spaceToKebab: 'Leerzeichen ➔ kebab-case',
        snakeToKebab: 'snake_case ➔ kebab-case',
        kebabToSnake: 'kebab-case ➔ snake_case',
        snakeToSpace: 'snake_case ➔ Leerzeichen',
        snakeToDot: 'snake_case ➔ dot.case',
        dotToSnake: 'dot.case ➔ snake_case',
        spaceToNewline: 'Leerzeichen ➔ Zeilen',
        newlineToSpace: 'Zeilen ➔ Leerzeichen',
        stripSymbols: 'Sonderzeichen entfernen',
        stripSpaces: 'Alle Leerzeichen löschen',
        stripNewlines: 'Leerzeilen entfernen',
      },
      tips: 'Alle Transformationen werden zu 100% lokal im Browser-Speicher ausgeführt.',
      table: {
        title: 'Code-Namenskonventionen im Überblick',
        thConvention: 'Konvention',
        thExample: 'Beispiel',
        thUsage: 'Typischer Einsatzbereich',
        rows: [
          { name: 'camelCase', example: 'userProfileId', usage: 'Variablen und Methoden in Java, JavaScript, TypeScript' },
          { name: 'PascalCase', example: 'UserProfileId', usage: 'Klassen in Java/C#, React/Vue-Komponenten' },
          { name: 'snake_case', example: 'user_profile_id', usage: 'Python-Variablen, SQL-Tabellen und Spaltennamen' },
          { name: 'kebab-case', example: 'user-profile-id', usage: 'URL-Pfade, CSS-Klassennamen, HTML-Attribute' },
          { name: 'SCREAMING_SNAKE_CASE', example: 'USER_PROFILE_ID', usage: 'Globale Konstanten, Umgebungsvariablen (.env)' },
        ],
      },
      faqTitle: 'Häufig gestellte Fragen (FAQ)',
      faqs: [
        {
          q: 'Wann verwendet man camelCase und wann snake_case?',
          a: 'Verwenden Sie camelCase im Frontend (JS/TS) und Java. Verwenden Sie snake_case für Python und SQL-Tabellenspalten.',
        },
      ],
    },
    cron: {
      title: 'Cron-Ausdruck Visualisierer & Zeitplan-Simulator',
      badge: 'Linux · Spring · Quartz',
      subtitle: 'Klartext-Erklärung und genaue Simulation der nächsten 7 Ausführungszeitpunkte.',
      modeLinux: 'Linux (5)',
      modeSpring: 'Spring (6)',
      modeQuartz: 'Quartz (6-7)',
      inputLabel: 'CRON-AUSDRUCK',
      inputPlaceholder: 'z.B. 0 */12 * * * oder 0 0 18 L * ?',
      calcBtn: 'Ausführungszeiten berechnen',
      humanExplanation: 'Zeitplan-Beschreibung',
      nextRunsTitle: 'Nächste 7 geplante Ausführungen',
      quickPresetsTitle: 'Gängige Vorlagen',
      copyExpr: 'Ausdruck kopieren',
      copied: 'Kopiert!',
      presetApplied: 'Vorlage angewendet',
      emptyRuns: 'Keine bevorstehenden Ausführungsdaten für diesen Ausdruck gefunden.',
      fields: {
        sec: 'Sekunden',
        min: 'Minuten',
        hour: 'Stunden',
        dom: 'Tag des Monats',
        mon: 'Monat',
        dow: 'Wochentag',
        year: 'Jahr (Optional)',
      },
      table: {
        title: 'Cron-Syntax und Platzhalter-Referenz',
        thField: 'Feld',
        thAllowed: 'Gültige Werte',
        thSpecial: 'Sonderzeichen',
        thExample: 'Beispiele',
      },
      faqTitle: 'Häufig gestellte Fragen zu Cron (FAQ)',
      faqs: [
        {
          q: 'Was sind die Unterschiede zwischen Linux, Spring und Quartz Cron?',
          a: 'Linux nutzt 5 Felder, Spring 6 Felder (mit Sekunden am Anfang) und Quartz bis zu 7 Felder (mit optionalem Jahr).',
        },
      ],
    },
    json: {
      title: 'JSON Formatierer, Validator & TypeScript Generator',
      badge: '100% Lokal im Browser · Datenschutz garantiert',
      subtitle: 'JSON formatieren, komprimieren, maskieren und in TypeScript-Interfaces umwandeln.',
      inputLabel: 'EINGABE-JSON',
      inputPlaceholder: 'JSON-Daten hier einfügen...',
      outputLabel: 'ERGEBNIS / TYPESCRIPT',
      outputPlaceholder: 'Formatiertes JSON oder TypeScript-Code erscheint hier...',
      validBadge: 'Gültiges JSON',
      invalidBadge: 'Syntaxfehler',
      errors: {
        formatError: 'Fehler bei der JSON-Formatierung',
        parseError: 'JSON-Syntaxfehler',
      },
      views: {
        split: 'Geteilt',
        wide: 'Breitbild',
        fullscreen: 'Vollbild',
        exitFullscreen: 'Vollbild beenden',
        ready: 'Bereit für Eingabe',
        copied: 'Kopiert',
      },
      buttons: {
        format2: 'Formatieren (2 Leerzeichen)',
        format4: 'Formatieren (4 Leerzeichen)',
        minify: 'Komprimieren',
        escape: 'Maskieren (\\")',
        unescape: 'Demaskieren',
        unicodeDecode: 'Unicode ➔ Text',
        unicodeEncode: 'Text ➔ Unicode',
        toTypeScript: '⚡ JSON zu TypeScript',
        sample: 'Beispiel laden',
        copy: 'Kopieren',
        clear: 'Löschen',
        download: '.json Herunterladen',
      },
      stats: {
        nodes: 'Knoten',
        size: 'Bytes',
        lines: 'Zeilen',
      },
      table: {
        title: 'JSON-Datentypen',
        thType: 'Typ',
        thExample: 'Beispiel',
        thDesc: 'Beschreibung',
        rows: [
          { type: 'Object (Objekt)', example: '{ "key": "value" }', desc: 'Ungeordnete Sammlung von Schlüssel/Wert-Paaren in doppelten Anführungszeichen.' },
          { type: 'Array (Array)', example: '[ "apple", 123, true ]', desc: 'Geordnete Werteliste, durch Kommas getrennt.' },
          { type: 'String (Zeichenkette)', example: '"Hello \\"World\\""', desc: 'Unicode-Zeichenkette in doppelten Anführungszeichen.' },
          { type: 'Number (Zahl)', example: '42, 3.14159, 1e10', desc: 'Ganzzahlen und Fließkommazahlen. NaN und Infinity sind unzulässig.' },
          { type: 'Boolean (Boolesch)', example: 'true / false', desc: 'Muss kleingeschrieben sein (true / false).' },
          { type: 'Null (Nullwert)', example: 'null', desc: 'Muss kleingeschrieben sein (null), steht für einen leeren Wert.' },
        ],
      },
      faqTitle: 'JSON FAQ',
      faqs: [
        {
          q: 'Werden vertrauliche Daten auf externe Server übertragen?',
          a: 'Nein. Alle Algorithmen laufen vollständig im lokalen Browser-Speicher ohne Netzwerkübertragung.',
        },
      ],
    },
  },

  // 🇫🇷 Français
  fr: {
    nav: {
      caseConverter: 'Casse & Conventions',
      cronVisualizer: 'Planificateur Cron',
      jsonProcessor: 'JSON & TypeScript',
      switchTool: 'Outil complémentaire :',
      clientSafe: '100% Local & Sécurisé',
      zeroLatency: 'Moteur Zéro Latence',
      footerTitle: 'DevText Toolkit',
      footerSubtitle: 'Utilitaires Développeurs Haute Performance',
      privacyPolicy: 'Confidentialité',
      termsOfService: 'Conditions d\'utilisation',
      aboutContact: 'À propos & Contact',
      toolsTab: 'Utilitaires',
      howToTab: 'Guide d\'utilisation',
      useCasesTab: 'Cas d\'usage',
      cheatsheetTab: 'Aide-mémoire',
      guidesTab: 'Guides Techniques',
      faqTab: 'FAQ',
      readGuide: 'Lire le guide complet',
      backToGuides: 'Retour aux guides',
      tryExample: 'Tester dans l\'outil',
      featuredGuidesTitle: 'Guides Techniques Approfondis',
      featuredGuidesSubtitle: 'Normes de nommage, syntaxe Cron et sécurité des types TypeScript pour développeurs.',
      cheatsheetTitle: 'Aide-mémoire Interactif',
      cheatsheetSubtitle: 'Références rapides pour les conventions de code, expressions cron et schémas JSON.',
    },
    case: {
      title: 'Convertisseur de Casse & Conventions de Code',
      badge: 'Exécution Locale · Zéro Traçage',
      placeholder: 'Saisissez ou collez votre texte, variables ou code ici...',
      copySuccess: 'Copié dans le presse-papiers !',
      cutSuccess: 'Coupé dans le presse-papiers !',
      inputLabel: 'TEXTE SOURCE',
      resultLabel: 'RÉSULTAT',
      charsLabel: 'caractères',
      resultPlaceholder: 'Le texte converti apparaîtra ici...',
      options: {
        autoCopy: 'Copie automatique :',
        showNewBox: 'Affichage scindé en deux colonnes :',
        yes: 'Oui',
        no: 'Non',
      },
      buttons: {
        upper: 'MAJUSCULES',
        lower: 'minuscules',
        capitalize: 'Majuscule à Chaque Mot',
        lowerFirst: 'Première lettre minuscule',
        sentence: 'Casse de phrase',
        title: 'Casse de Titre (Title Case)',
        copy: 'Copier',
        cut: 'Couper',
        clear: 'Effacer',
        spaceToSnake: 'Espaces ➔ snake_case',
        snakeToCamel: 'snake_case ➔ camelCase',
        camelToSnake: 'camelCase ➔ snake_case',
        camelToSpace: 'camelCase ➔ Espaces',
        spaceToKebab: 'Espaces ➔ kebab-case',
        snakeToKebab: 'snake_case ➔ kebab-case',
        kebabToSnake: 'kebab-case ➔ snake_case',
        snakeToSpace: 'snake_case ➔ Espaces',
        snakeToDot: 'snake_case ➔ dot.case',
        dotToSnake: 'dot.case ➔ snake_case',
        spaceToNewline: 'Espaces ➔ Lignes',
        newlineToSpace: 'Lignes ➔ Espaces',
        stripSymbols: 'Supprimer Caractères Spéciaux',
        stripSpaces: 'Supprimer Tous les Espaces',
        stripNewlines: 'Supprimer Lignes Vides',
      },
      tips: 'Toutes les transformations s’exécutent en mémoire dans votre navigateur.',
      table: {
        title: 'Conventions de Nommage de Code & Standards',
        thConvention: 'Convention',
        thExample: 'Exemple',
        thUsage: 'Usages Standards',
        rows: [
          { name: 'camelCase', example: 'userProfileId', usage: 'Variables et méthodes en Java, JavaScript et TypeScript' },
          { name: 'PascalCase', example: 'UserProfileId', usage: 'Classes en Java/C#, composants React/Vue' },
          { name: 'snake_case', example: 'user_profile_id', usage: 'Variables Python, tables et colonnes SQL' },
          { name: 'kebab-case', example: 'user-profile-id', usage: 'Slugs d’URL, classes CSS, attributs HTML' },
          { name: 'SCREAMING_SNAKE_CASE', example: 'USER_PROFILE_ID', usage: 'Constantes globales, variables d’environnement (.env)' },
        ],
      },
      faqTitle: 'Foire Aux Questions (FAQ)',
      faqs: [
        {
          q: 'Quand utiliser camelCase plutôt que snake_case ?',
          a: 'Utilisez camelCase pour le code frontend (JS/TS) et Java. Utilisez snake_case pour Python et les bases de données SQL.',
        },
      ],
    },
    cron: {
      title: 'Visualiseur d’Expressions Cron & Simulateur',
      badge: 'Linux · Spring · Quartz',
      subtitle: 'Traduction instantanée en langage clair et simulation des 7 prochaines exécutions.',
      modeLinux: 'Linux (5)',
      modeSpring: 'Spring (6)',
      modeQuartz: 'Quartz (6-7)',
      inputLabel: 'EXPRESSION CRON',
      inputPlaceholder: 'ex: 0 */12 * * * ou 0 0 18 L * ?',
      calcBtn: 'Calculer les exécutions',
      humanExplanation: 'Description de la planification',
      nextRunsTitle: 'Prochaines 7 Exécutions Prévues',
      quickPresetsTitle: 'Modèles Fréquents',
      copyExpr: 'Copier l’Expression',
      copied: 'Copié !',
      presetApplied: 'Modèle appliqué',
      emptyRuns: 'Aucune date d’exécution future trouvée pour cette expression.',
      fields: {
        sec: 'Secondes',
        min: 'Minutes',
        hour: 'Heures',
        dom: 'Jour du mois',
        mon: 'Mois',
        dow: 'Jour de semaine',
        year: 'Année (Optionnel)',
      },
      table: {
        title: 'Syntaxe Cron et Caractères Spéciaux',
        thField: 'Champ',
        thAllowed: 'Valeurs Valides',
        thSpecial: 'Caractères Spéciaux',
        thExample: 'Exemples',
      },
      faqTitle: 'Foire Aux Questions sur Cron (FAQ)',
      faqs: [
        {
          q: 'Quelles sont les différences entre Linux, Spring et Quartz ?',
          a: 'Linux compte 5 champs, Spring 6 champs (avec les secondes au début) et Quartz jusqu’à 7 champs (avec l’année facultative).',
        },
      ],
    },
    json: {
      title: 'Formateur JSON, Validateur & Générateur TypeScript Gratuit',
      badge: '100% Local & Sécurisé · Zéro Téléchargement',
      subtitle: 'Formatez, compressez, échappez et convertissez votre JSON en interfaces TypeScript en un clic.',
      inputLabel: 'JSON EN ENTRÉE',
      inputPlaceholder: 'Collez votre code JSON ici...',
      outputLabel: 'RÉSULTAT / TYPESCRIPT',
      outputPlaceholder: 'Le résultat apparaîtra ici...',
      validBadge: 'JSON Valide',
      invalidBadge: 'Erreur de Syntaxe',
      errors: {
        formatError: 'Erreur de formatage JSON',
        parseError: 'Erreur de syntaxe JSON',
      },
      views: {
        split: 'Scindé',
        wide: 'Plein écran',
        fullscreen: 'Plein écran',
        exitFullscreen: 'Quitter le plein écran',
        ready: 'Prêt pour la saisie',
        copied: 'Copié',
      },
      buttons: {
        format2: 'Formater (2 Espaces)',
        format4: 'Formater (4 Espaces)',
        minify: 'Compresser (Minify)',
        escape: 'Échapper (\\")',
        unescape: 'Supprimer échappement',
        unicodeDecode: 'Unicode ➔ Texte',
        unicodeEncode: 'Texte ➔ Unicode',
        toTypeScript: '⚡ JSON vers TypeScript',
        sample: 'Exemple',
        copy: 'Copier',
        clear: 'Effacer',
        download: 'Télécharger .json',
      },
      stats: {
        nodes: 'nœuds',
        size: 'octets',
        lines: 'lignes',
      },
      table: {
        title: 'Types de Données JSON',
        thType: 'Type',
        thExample: 'Exemple',
        thDesc: 'Description',
        rows: [
          { type: 'Object (Objet)', example: '{ "key": "value" }', desc: 'Collection non ordonnée de paires clé/valeur entre guillemets doubles.' },
          { type: 'Array (Tableau)', example: '[ "apple", 123, true ]', desc: 'Liste ordonnée de valeurs séparées par des virgules.' },
          { type: 'String (Chaîne)', example: '"Hello \\"World\\""', desc: 'Séquence de caractères Unicode entre guillemets doubles.' },
          { type: 'Number (Nombre)', example: '42, 3.14159, 1e10', desc: 'Entiers et flottants. NaN et Infinity ne sont pas autorisés.' },
          { type: 'Boolean (Booléen)', example: 'true / false', desc: 'Doit être en minuscules (true ou false).' },
          { type: 'Null (Nul)', example: 'null', desc: 'Représente une valeur vide, doit être en minuscules.' },
        ],
      },
      faqTitle: 'FAQ JSON',
      faqs: [
        {
          q: 'Les données confidentielles sont-elles transmises à un serveur ?',
          a: 'Non. Toutes les opérations sont exécutées localement dans la mémoire de votre navigateur sans aucun transfert réseau.',
        },
      ],
    },
  },

  // 🇨🇳 简体中文
  zh: {
    nav: {
      caseConverter: '字母大小写与命名',
      cronVisualizer: 'Cron 调度可视化',
      jsonProcessor: 'JSON 格式化 & TS 生成',
      switchTool: '关联开发工具：',
      clientSafe: '100% 浏览器离线计算',
      zeroLatency: '瞬时零延迟引擎',
      footerTitle: 'DevText 开发者工具箱',
      footerSubtitle: '专注极致性能的高效开发生产力套件',
      privacyPolicy: '隐私政策',
      termsOfService: '服务条款',
      aboutContact: '关于与联系',
      toolsTab: '极客工具箱',
      howToTab: '3步操作指南',
      useCasesTab: '实战使用场景',
      cheatsheetTab: '语法速查手册',
      guidesTab: '技术指南专区',
      faqTab: '常见问题解答',
      readGuide: '阅读深度指南',
      backToGuides: '返回指南列表',
      tryExample: '填入测试',
      featuredGuidesTitle: '精选开发者技术指南',
      featuredGuidesSubtitle: '深入剖析代码命名规范、分布式调度架构、JSON 类型安全与 SEO 性能工程。',
      cheatsheetTitle: '交互式开发语法速查表',
      cheatsheetSubtitle: '涵盖主流命名法对比、Linux/Spring/Quartz Cron 字段对照与 TypeScript 类型映射。',
    },
    case: {
      title: '英文字母大小写与代码命名规范转换器',
      badge: '纯本地离线计算 · 零数据外发 · 极速安全',
      placeholder: '在此粘贴或输入需要格式化的英文文本、数据库字段或代码变量...',
      copySuccess: '已成功复制到剪贴板！',
      cutSuccess: '已成功剪切到剪贴板！',
      inputLabel: '原始文本 / 代码变量',
      resultLabel: '转换输出结果',
      charsLabel: '字符',
      resultPlaceholder: '转换结果将在此处实时呈现...',
      options: {
        autoCopy: '点击按钮后自动复制：',
        showNewBox: '开启双栏分屏对照模式：',
        yes: '开启',
        no: '关闭',
      },
      buttons: {
        upper: '全部大写 (UPPERCASE)',
        lower: '全部小写 (lowercase)',
        capitalize: '每个单词首字母大写',
        lowerFirst: '首字母转小写 (lowerFirst)',
        sentence: '句首字母大写 (Sentence case)',
        title: '标题大小写 (Title Case)',
        copy: '一键复制',
        cut: '一键剪切',
        clear: '清空内容',
        spaceToSnake: '空格 ➔ 下划线 (snake_case)',
        snakeToCamel: '下划线 ➔ 小驼峰 (camelCase)',
        camelToSnake: '小驼峰 ➔ 下划线 (snake_case)',
        camelToSpace: '小驼峰 ➔ 空格分隔',
        spaceToKebab: '空格 ➔ 中横线 (kebab-case)',
        snakeToKebab: '下划线 ➔ 中横线 (kebab-case)',
        kebabToSnake: '中横线 ➔ 下划线 (snake_case)',
        snakeToSpace: '下划线 ➔ 空格分隔',
        snakeToDot: '下划线 ➔ 点连接 (dot.case)',
        dotToSnake: '点连接 ➔ 下划线 (snake_case)',
        spaceToNewline: '空格 ➔ 换行分行',
        newlineToSpace: '换行 ➔ 空格连接',
        stripSymbols: '过滤特殊符号字符',
        stripSpaces: '清除全部多余空格',
        stripNewlines: '清除空白行与连续换行',
      },
      tips: '所有算法完全在您本地电脑浏览器内存中离线计算，数据绝不上传云端，彻底杜绝企业核心代码与敏感字段泄露风险。',
      table: {
        title: '常用编程命名规范与业界最佳实践对照表',
        thConvention: '命名规范',
        thExample: '代码范例',
        thUsage: '业界主流技术栈与规范场景',
        rows: [
          { name: 'camelCase (小驼峰命名)', example: 'userProfileId', usage: 'Java / JavaScript / TypeScript 变量名、方法名与入参' },
          { name: 'PascalCase (大驼峰命名)', example: 'UserProfileId', usage: 'Java / C# 类名、接口名、React / Vue 组件名' },
          { name: 'snake_case (下划线命名)', example: 'user_profile_id', usage: 'Python 变量、MySQL / PostgreSQL 表名与字段名' },
          { name: 'kebab-case (中横线命名)', example: 'user-profile-id', usage: 'URL 路由 Slug、CSS 选择器、HTML 自定义属性、NPM 包名' },
          { name: 'SCREAMING_SNAKE_CASE', example: 'USER_PROFILE_ID', usage: 'Java 常量、全局配置、环境变量 (.env) 与 Enum 枚举值' },
        ],
      },
      faqTitle: '常见技术问答与隐私安全说明 (FAQ)',
      faqs: [
        {
          q: '什么是驼峰命名 (camelCase) 与下划线命名 (snake_case) 的最佳适用场景？',
          a: '在现代前后端分离架构中，前端 JavaScript/TypeScript 和 Java 后端业务逻辑推荐使用 camelCase；而在编写 Python 脚本、设计 MySQL/PostgreSQL 数据库表字段以及定义对外 REST API 入参时，业界通常采用 snake_case。',
        },
        {
          q: '为什么要在本地浏览器执行，而不是调用大模型 AI？',
          a: '相比大模型需要联网上传、等待 Token 逐字吐出且可能产生“幻觉少字”，本地正则与算法转换速度在 0.1 毫秒以内，即点即出，且 100% 确保企业内网代码与 JWT 凭据的绝对隐私安全。',
        },
      ],
    },
    cron: {
      title: 'Cron 表达式可视化解析器与未来触发时间计算器',
      badge: 'Linux · Spring · Quartz 三大规范',
      subtitle: '秒级自然语言中文直译，实时精确模拟接下来 7 次计划执行时间与倒计时。',
      modeLinux: 'Linux (5位)',
      modeSpring: 'Spring (6位)',
      modeQuartz: 'Quartz (6-7位)',
      inputLabel: 'CRON 表达式',
      inputPlaceholder: '如: 0 */12 * * * (Linux) 或 0 0 18 L * ? (Quartz)',
      calcBtn: '查看执行时间',
      humanExplanation: '执行规则解析',
      nextRunsTitle: '接下来 7 次的执行时间 (Next 7 Runs)',
      quickPresetsTitle: '常用生产级预设模板',
      copyExpr: '复制 Cron 表达式',
      copied: '已成功复制到剪贴板！',
      presetApplied: '已应用所选预设模板',
      emptyRuns: '当前表达式在模拟范围内未找到匹配的未来执行时间点。',
      fields: {
        sec: '秒 (0-59)',
        min: '分 (0-59)',
        hour: '时 (0-23)',
        dom: '日 (1-31)',
        mon: '月 (1-12 或 JAN-DEC)',
        dow: '星期',
        year: '年 (1970-2099, 可选)',
      },
      table: {
        title: '三大规范 Cron 语法与特殊符号对照表 (Linux vs Spring vs Quartz)',
        thField: '时间字段',
        thAllowed: '允许取值范围',
        thSpecial: '支持特殊符号',
        thExample: '经典范例',
      },
      faqTitle: 'Cron 调度三大规范区别与特殊字符深度解析 (FAQ)',
      faqs: [
        {
          q: 'Linux、Spring 与 Quartz 三大 Cron 规范的核心差异是什么？',
          a: '1) Linux (5 字段): 从【分】开始到【周】，星期 0 和 7 均为周日。\n2) Java Spring (6 字段): 在最前增加了【秒】，星期 0 和 7 为周日，支持 ? 通配符。\n3) Java Quartz (6-7 字段): 支持可选的【年】，注意其星期 1 为周日 (1-7)，并独家支持 L (最后一天/最后周五)、W (工作日) 和 # (第N个周几)。',
        },
        {
          q: 'Quartz 中的 L、W、# 和 ? 特殊符号怎么使用？',
          a: '“L”代表 Last（如 0 0 18 L * ? 表示每月最后一天 18:00，5L 表示最后一个周五）；“W”代表最近工作日（如 15W 表示最接近 15 号的工作日）；“#”代表第几个（如 5#3 表示每月第 3 个周五）；“?”用于日月与周互斥占位。',
        },
      ],
    },
    json: {
      title: 'JSON 在线解析格式化、语法校验与 TS 类型定义生成器',
      badge: '纯本地离线计算 · 零数据外发 · 杜绝敏感数据泄露',
      subtitle: '集成 2/4 空格美化、单行压缩、字符串转义/去除转义、Unicode 中文互转与一键生成 TypeScript Interface。',
      inputLabel: '原始 JSON / 字符串输入',
      inputPlaceholder: '在此粘贴或输入需要解析的 JSON 字符串、API 响应报文或待转义文本...',
      outputLabel: '处理结果 / TYPESCRIPT 类型定义',
      outputPlaceholder: '格式化后的 JSON 或生成的 TypeScript Interface 将在此处实时呈现...',
      validBadge: 'JSON 语法合法',
      invalidBadge: 'JSON 语法错误',
      errors: {
        formatError: 'JSON 格式化失败',
        parseError: 'JSON 语法解析错误',
      },
      views: {
        split: '分屏',
        wide: '全景',
        fullscreen: '全屏沉浸',
        exitFullscreen: '退出全屏',
        ready: '等待输入数据',
        copied: '已复制',
      },
      buttons: {
        format2: '格式化 (2 空格缩进)',
        format4: '格式化 (4 空格缩进)',
        minify: '压缩紧凑 (Minify)',
        escape: '转义 (\\")',
        unescape: '去除转义',
        unicodeDecode: 'Unicode ➔ 中文',
        unicodeEncode: '中文 ➔ Unicode',
        toTypeScript: '⚡ 生成 TypeScript 接口',
        sample: '载入示例数据',
        copy: '一键复制',
        clear: '清空内容',
        download: '导出 .json 文件',
      },
      stats: {
        nodes: '节点数',
        size: '字节大小',
        lines: '总行数',
      },
      table: {
        title: 'JSON 标准数据类型与语法规范对照表',
        thType: '数据类型',
        thExample: '标准范例',
        thDesc: '规范说明与注意事项',
        rows: [
          { type: 'Object (对象)', example: '{ "key": "value" }', desc: '无序的键值对集合，键名必须使用英文双引号包裹。' },
          { type: 'Array (数组)', example: '[ "apple", 123, true ]', desc: '有序的值集合，元素间以英文逗号分隔。' },
          { type: 'String (字符串)', example: '"Hello \\"World\\""', desc: 'Unicode 字符序列，必须使用双引号，单引号不合法。' },
          { type: 'Number (数值)', example: '42, 3.14159, 1e10', desc: '支持整数、浮点数与科学计数法，不支持 NaN 与 Infinity。' },
          { type: 'Boolean (布尔值)', example: 'true / false', desc: '必须全小写，不支持 True / FALSE。' },
          { type: 'Null (空值)', example: 'null', desc: '必须全小写，表示空值或缺省。' },
        ],
      },
      faqTitle: 'JSON 解析与开发常见问题解答 (FAQ)',
      faqs: [
        {
          q: '为什么在浏览器本地处理 JSON 比上传到第三方服务器更安全？',
          a: '很多第三方在线工具会将用户的 JSON 上传至后端服务器记录日志，极易导致接口 Token、数据库连接串、用户信息或商业报文泄露。本工具所有算法 100% 在本地浏览器内存中完成，数据绝不跨出您的电脑。',
        },
        {
          q: '一键生成 TypeScript 接口定义有什么优势？',
          a: '对于前端开发（React/Vue）和 Node.js 工程师，只需将后端返回的 JSON 粘贴进来，点击【⚡ 生成 TypeScript 接口】，系统就会自动推导属性类型、嵌套对象并生成标准 export interface 代码，极大提升开发效率！',
        },
      ],
    },
  },
};
