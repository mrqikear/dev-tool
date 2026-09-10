/* ==========================================================================
   [SSG Pre-rendered Guides & Cheatsheet Content for Google AdSense & SEO]
   - Embedded directly into static HTML across all 18 localized routes
   - Guaranteed rich publisher editorial content in raw HTML for review bots
   - 100% Internationalized across en, es, ja, de, fr, zh
   ========================================================================== */

export const ssgCheatsheetByLocale = {
  en: {
    title: 'Developer Syntax & Naming Convention Cheatsheet',
    subtitle: 'Authoritative reference matrix for casing standards, cron scheduling, and JSON schemas.',
    thStyle: 'Naming Style',
    thExample: 'Real-World Example',
    thUsage: 'Primary Language & Ecosystem Standard',
    rows: [
      { name: 'camelCase', example: 'userAccountProfileData', usage: 'Standard for JavaScript/TypeScript variables, functions, and object properties.' },
      { name: 'PascalCase', example: 'UserAccountProfileData', usage: 'Required for React components, TypeScript interfaces, and Java / C# classes.' },
      { name: 'snake_case', example: 'user_account_profile_data', usage: 'Mandatory in Python (PEP 8) and relational database columns (PostgreSQL, MySQL).' },
      { name: 'kebab-case', example: 'user-account-profile-data', usage: 'Official Google standard for SEO-friendly URLs, CSS classes, and Kubernetes slugs.' },
      { name: 'CONSTANT_CASE', example: 'MAXIMUM_RETRY_THRESHOLD', usage: 'Global immutable constants, system environment variables, and enum identifiers.' },
      { name: 'Title Case', example: 'User Account Profile Data', usage: 'Standard for technical documentation headlines, blog titles, and menu labels.' }
    ]
  },
  zh: {
    title: '现代编程语法与代码命名规范速查表',
    subtitle: '涵盖全主流编程语言规范、Linux/Spring/Quartz 调度与 TypeScript 类型映射矩阵。',
    thStyle: '命名风格',
    thExample: '真实代码示例',
    thUsage: '主流语言与生态技术规范',
    rows: [
      { name: 'camelCase (小驼峰)', example: 'userAccountProfileData', usage: 'JavaScript / TypeScript 变量、对象属性与函数方法标准' },
      { name: 'PascalCase (大驼峰)', example: 'UserAccountProfileData', usage: 'React 组件、TypeScript 接口与 Java / C# 领域实体类名' },
      { name: 'snake_case (下划线)', example: 'user_account_profile_data', usage: 'Python 变量方法 (PEP 8) 与 MySQL / PostgreSQL 数据库表字段' },
      { name: 'kebab-case (短横线)', example: 'user-account-profile-data', usage: 'Google 官方强推 URL 路由路径、CSS 类名与 Kubernetes 资源标识' },
      { name: 'CONSTANT_CASE (全大写)', example: 'MAXIMUM_RETRY_THRESHOLD', usage: '全局不可变常量、环境变量配置与 Redux Action 标识' },
      { name: 'Title Case (英文标题)', example: 'User Account Profile Data', usage: '英文技术文档、博客文章 H1/H2 标题与新闻头条' }
    ]
  },
  es: {
    title: 'Guía Rápida de Sintaxis y Convenciones de Nomenclatura',
    subtitle: 'Matriz de referencia autorizada para estándares de nombres, cron y esquemas JSON.',
    thStyle: 'Estilo',
    thExample: 'Ejemplo Real',
    thUsage: 'Estándar de Lenguaje y Ecosistema',
    rows: [
      { name: 'camelCase', example: 'userAccountProfileData', usage: 'Estándar para variables, funciones y propiedades en JavaScript / TypeScript.' },
      { name: 'PascalCase', example: 'UserAccountProfileData', usage: 'Requerido para componentes React, interfaces TypeScript y clases Java / C#.' },
      { name: 'snake_case', example: 'user_account_profile_data', usage: 'Obligatorio en Python (PEP 8) y columnas de bases de datos relacionales.' },
      { name: 'kebab-case', example: 'user-account-profile-data', usage: 'Estándar recomendado por Google para URLs amigables con SEO y clases CSS.' },
      { name: 'CONSTANT_CASE', example: 'MAXIMUM_RETRY_THRESHOLD', usage: 'Constantes inmutables globales y variables de entorno del sistema.' },
      { name: 'Title Case', example: 'User Account Profile Data', usage: 'Estándar para encabezados de artículos técnicos y documentación.' }
    ]
  },
  ja: {
    title: '開発者向け構文・命名規則クイックリファレンス',
    subtitle: '命名基準、Cron 式スケジュール、JSON スキーマの公式設計マトリクス。',
    thStyle: '命名スタイル',
    thExample: '実コード例',
    thUsage: '主要言語・エコシステム標準',
    rows: [
      { name: 'camelCase (ローワーキャメル)', example: 'userAccountProfileData', usage: 'JavaScript / TypeScript の変数・プロパティ・関数' },
      { name: 'PascalCase (アッパーキャメル)', example: 'UserAccountProfileData', usage: 'React コンポーネント、TypeScript インターフェース、Java / C# クラス' },
      { name: 'snake_case (スネークケース)', example: 'user_account_profile_data', usage: 'Python (PEP 8) の変数・関数、MySQL / PostgreSQL カラム名' },
      { name: 'kebab-case (ケバブケース)', example: 'user-account-profile-data', usage: 'Google 推奨の SEO 対応 URL スラッグ、CSS クラス名、K8s リソース' },
      { name: 'CONSTANT_CASE (大文字スネーク)', example: 'MAXIMUM_RETRY_THRESHOLD', usage: '不変の定数定義、環境変数、Redux アクション識別子' },
      { name: 'Title Case (タイトルケース)', example: 'User Account Profile Data', usage: '技術ドキュメントの見出し、英語ブログタイトル' }
    ]
  },
  de: {
    title: 'Entwickler-Spickzettel für Syntax & Namenskonventionen',
    subtitle: 'Autoritative Referenzmatrix für Groß-/Kleinschreibung, Cron und JSON-Strukturen.',
    thStyle: 'Stil',
    thExample: 'Code-Beispiel',
    thUsage: 'Sprach- & Ökosystem-Standard',
    rows: [
      { name: 'camelCase', example: 'userAccountProfileData', usage: 'Standard für JavaScript/TypeScript Variablen, Funktionen und Properties.' },
      { name: 'PascalCase', example: 'UserAccountProfileData', usage: 'Erforderlich für React-Komponenten, Interfaces und Java/C#-Klassen.' },
      { name: 'snake_case', example: 'user_account_profile_data', usage: 'Standard in Python (PEP 8) und relationalen Datenbankspalten (MySQL, Postgres).' },
      { name: 'kebab-case', example: 'user-account-profile-data', usage: 'Offizielle Google-Empfehlung für SEO-URLs, CSS-Klassen und K8s.' },
      { name: 'CONSTANT_CASE', example: 'MAXIMUM_RETRY_THRESHOLD', usage: 'Globale unveränderliche Konstanten und Umgebungsvariablen.' },
      { name: 'Title Case', example: 'User Account Profile Data', usage: 'Standard für Überschriften in Dokumentationen und Artikeln.' }
    ]
  },
  fr: {
    title: 'Aide-mémoire des Conventions de Nommage et de Syntaxe',
    subtitle: 'Matrice de référence officielle pour les normes de casse, cron et schémas JSON.',
    thStyle: 'Style de Casse',
    thExample: 'Exemple Réel',
    thUsage: 'Norme de Langage et Écosystème',
    rows: [
      { name: 'camelCase', example: 'userAccountProfileData', usage: 'Standard pour les variables, fonctions et propriétés en JavaScript / TypeScript.' },
      { name: 'PascalCase', example: 'UserAccountProfileData', usage: 'Requis pour les composants React, interfaces TypeScript et classes Java / C#.' },
      { name: 'snake_case', example: 'user_account_profile_data', usage: 'Obligatoire en Python (PEP 8) et colonnes de bases de données relationnelles.' },
      { name: 'kebab-case', example: 'user-account-profile-data', usage: 'Standard officiel Google pour les URLs SEO, classes CSS et manifests K8s.' },
      { name: 'CONSTANT_CASE', example: 'MAXIMUM_RETRY_THRESHOLD', usage: 'Constantes globales immuables et variables d\'environnement.' },
      { name: 'Title Case', example: 'User Account Profile Data', usage: 'Standard pour les titres d\'articles et documentations techniques.' }
    ]
  }
};

export const ssgGuidesByLocale = {
  en: [
    {
      title: 'Programming Naming Conventions: The Complete Industry Guide',
      category: 'Code Architecture',
      readTime: '6 min read',
      p1: 'In enterprise software engineering, code is read twenty times more frequently than it is written. Variable and identifier naming conventions are not stylistic suggestions; they represent the structural grammar of a codebase.',
      p2: 'When engineers inconsistently mix camelCase and snake_case across microservices, downstream JSON serialization, database schema mapping, and client-side consumption begin to break silently, producing subtle runtime bugs and inflated maintenance debt.',
      codeTitle: 'naming-standards-example.ts',
      code: `// Interface & Class in PascalCase
interface UserAccountProfile {
  userId: string;          // camelCase property
  createdTimestamp: number; // camelCase timestamp
}

// Global immutable constant in SCREAMING_SNAKE_CASE
const MAXIMUM_RETRY_THRESHOLD = 5;

// Pure function in camelCase
export function formatUserProfile(accountRecord: UserAccountProfile): string {
  const apiEndpointSlug = 'user-account-summary'; // kebab-case for URL routing
  return \`/v1/\${apiEndpointSlug}/\${accountRecord.userId}\`;
}`,
      tip: 'Pro Tip: A clean architecture enforces case conversions strictly at the boundary layer (e.g., converting snake_case database columns to camelCase domain models via automatic DTO mapping).'
    },
    {
      title: 'Mastering Cron Expressions: From Linux Crontab to Spring & Quartz',
      category: 'DevOps & Backend',
      readTime: '8 min read',
      p1: 'Cron remains the undisputed heartbeat of scheduled operations, from database backups and report generation to automated cleanup tasks.',
      p2: 'Standard POSIX / Linux uses 5 fields (Minute, Hour, Day of Month, Month, Day of Week), whereas Spring Framework defaults to 6 fields (adding Seconds at the start), and Quartz scheduler supports 7 fields (including optional Year). Understanding step intervals (*/15) and ? symbols is essential for resilient distributed jobs.',
      codeTitle: 'cron-dialects-comparison.txt',
      code: `# Linux / Unix POSIX (5 Fields: Min Hour DOM Mon DOW)
0 2 * * *         -> Runs every day at 02:00 AM

# Spring Framework (6 Fields: Sec Min Hour DOM Mon DOW)
0 0 2 * * ?       -> Runs every day at 02:00:00 AM

# Quartz Scheduler (7 Fields: Sec Min Hour DOM Mon DOW Year)
0 0 2 1 * ? 2026  -> Runs at 02:00 AM on the 1st of every month in 2026`,
      tip: 'Critical Architecture Rule: Always standardize scheduled batch jobs on UTC at the scheduler server level to avoid daylight saving time skips or double executions.'
    },
    {
      title: 'JSON Serialization & TypeScript Type Safety in Modern Web APIs',
      category: 'Fullstack Engineering',
      readTime: '7 min read',
      p1: 'JSON is the de facto standard data interchange format of the internet. Yet vanilla JSON lacks native support for dates, maps, sets, and 64-bit integers (BigInt).',
      p2: 'When an API returns a 64-bit snowflake ID (e.g., 9007199254740993), native JavaScript JSON.parse will silently round the number to 9007199254740992 due to IEEE 754 floating-point limitations, corrupting primary keys in downstream database queries.',
      codeTitle: 'json-precision-fix.ts',
      code: `// Safe: Always serialize 64-bit IDs and timestamps as string values
const safeContract = {
  orderId: "9007199254740993", // Transmitted as string to preserve precision
  amountInCents: 4990,         // Integers within Number.MAX_SAFE_INTEGER
  createdAtIso: "2026-09-10T12:00:00Z"
};`,
      tip: 'Best Practice: Pair generated TypeScript interfaces with runtime validation libraries like Zod or ArkType on all public endpoints.'
    },
    {
      title: 'How String Formatting, URL Slugs, and Clean Naming Impact SEO & API Performance',
      category: 'Web Performance',
      readTime: '5 min read',
      p1: 'Google Search Central explicitly recommends using hyphens (kebab-case) rather than underscores (snake_case) or camelCase in website URLs. Search crawlers treat hyphens as natural word separators.',
      p2: 'Linux production servers and edge CDNs (Cloudflare, CloudFront) treat uppercase and lowercase URLs as distinct resource endpoints. A link pointing to /Case-Converter instead of /case-converter can produce duplicate content penalties and 404 errors.',
      codeTitle: 'seo-url-rules.txt',
      code: `❌ Bad (Mixed Case / Underscore):  https://example.com/DevTools/Text_Format_Utility/
❌ Bad (Encoded Whitespace):      https://example.com/tools/online%20case%20converter/
✅ Ideal (Lowercase Kebab-Case):   https://example.com/tools/online-case-converter/`,
      tip: 'SEO Guideline: Use hyphens to separate words in your URLs. Avoid punctuation marks and mixed casing.'
    }
  ],
  zh: [
    {
      title: '现代编程命名规范权威手册：camelCase、PascalCase、snake_case 与 kebab-case',
      category: '代码架构与规范',
      readTime: '6 分钟阅读',
      p1: '在企业级现代软件工程中，代码被阅读和维护的频次是编写频次的二十倍以上。变量与标识符的命名风格并非个人审美，而是整个工程系统的基础语法与契约。',
      p2: '当团队在微服务开发中随意混用驼峰命名（camelCase）与下划线命名（snake_case）时，数据库列字段映射、下游 JSON 序列化以及前端数据绑定往往会产生隐蔽的运行时 Bug，给项目带来巨大的技术债务。',
      codeTitle: 'naming-standards-example.ts',
      code: `// 接口与类：大驼峰 (PascalCase)
interface UserAccountProfile {
  userId: string;          // 变量与属性：小驼峰 (camelCase)
  createdTimestamp: number;
}

// 全局不可变常量：全大写下划线 (SCREAMING_SNAKE_CASE)
const MAXIMUM_RETRY_THRESHOLD = 5;

// 纯函数方法：小驼峰 (camelCase)
export function formatUserProfile(accountRecord: UserAccountProfile): string {
  const apiEndpointSlug = 'user-account-summary'; // 路由路径：短横线 (kebab-case)
  return \`/v1/\${apiEndpointSlug}/\${accountRecord.userId}\`;
}`,
      tip: '核心架构法则：优秀的系统架构应当在系统边界层（如 Gateway 网关、DTO 转换层）统一定义转换规则，杜绝在核心业务逻辑中手写字符串替换。'
    },
    {
      title: 'Cron 定时调度表达式权威指南：从 Linux Crontab 到 Spring 与 Quartz',
      category: '后端架构与调度',
      readTime: '8 分钟阅读',
      p1: 'Cron 表达式是现代后端系统中负责数据清洗、报表拉取、账单核对与日志轮转的底层节拍器。',
      p2: '工程师在多语言开发中经常因语法方言报错：标准 Linux/POSIX Crontab 采用 5 位定义（分、时、日、月、周）；Spring 定时任务框架使用 6 位（首位增加了精确到“秒”）；而 Quartz 调度器则支持 7 位（末尾支持可选的“年份”）。',
      codeTitle: 'cron-dialects-comparison.txt',
      code: `# Linux / Unix POSIX (5 位: 分 时 日 月 周)
0 2 * * *         -> 每天凌晨 02:00 执行

# Spring 框架 (6 位: 秒 分 时 日 月 周)
0 0 2 * * ?       -> 每天凌晨 02:00:00 执行

# Quartz 调度框架 (7 位: 秒 分 时 日 月 周 年)
0 0 2 1 * ? 2026  -> 2026年每个月1号凌晨 02:00 执行`,
      tip: '高可用设计金律：调度系统的底层时区务必统一设定为 UTC。若直接使用含夏令时（DST）的本地时区，会导致每年在时钟回拨或快进时发生任务漏跑或重复执行两次。'
    },
    {
      title: 'JSON 数据序列化与 TypeScript 类型安全工程实践',
      category: '全栈工程化',
      readTime: '7 分钟阅读',
      p1: 'JSON 是全网最通用的通信协议，但它本质是轻量文本，原生缺乏对 Date 日期、Map、Set 以及 64 位大整数（BigInt）的支持。',
      p2: '当后端微服务返回高位分布式雪花 ID（如 9007199254740993）时，JavaScript 原生 JSON.parse 会由于 IEEE 754 双精度浮点限制将其默默截断为 9007199254740992，导致前后端查询主键数据彻底不一致。',
      codeTitle: 'json-precision-fix.ts',
      code: `// 危险陷阱：超过 Number.MAX_SAFE_INTEGER 导致雪花 ID 精度损坏
const rawBad = '{"orderId": 9007199254740993}';
console.log(JSON.parse(rawBad).orderId); // 输出: 9007199254740992 (数据损坏!)

// 安全最佳实践：超过 53 位的整数与时间戳一律转为字符串传输
const safeContract = {
  orderId: "9007199254740993", // 字符串传输，保留完整精度
  amountInCents: 4990,         // 安全范围内的整型
  createdAtIso: "2026-09-10T12:00:00Z"
};`,
      tip: '工程建议：通过自动化工具将真实 JSON 负载逆向解析为强类型 interface，并在公开 API 配合 Zod 运行时校验。'
    },
    {
      title: '文本格式化、URL Slug 与 Clean Code 如何影响现代 Web API 与 SEO',
      category: 'Web 性能与 SEO',
      readTime: '5 分钟阅读',
      p1: 'Google 搜索中心（Search Central）在官方 SEO 指南中明确建议：网址 URL 应当使用短横线（-），而非下划线（_）或驼峰拼写。搜索引擎爬虫将短横线视作准确的分词符。',
      p2: '虽然 Windows 本地开发环境对文件名大小写不敏感，但 Linux 生产服务器（Nginx/Apache）以及全球边缘 CDN 严格区分大小写。若外部链接混用大小写将直接导致 404 错误和权重分散。',
      codeTitle: 'seo-url-rules.txt',
      code: `❌ 不规范 (混杂大写与下划线): https://example.com/DevTools/Text_Format_Utility/
❌ 不规范 (URL 空格转义):      https://example.com/tools/online%20case%20converter/
✅ 最佳实践 (全小写短横线):    https://example.com/tools/online-case-converter/`,
      tip: 'SEO 核心原则：请在网址中使用连字符分隔单词。避免在网址中使用下划线与大写字母。'
    }
  ],
  es: [
    {
      title: 'Convenciones de Nomenclatura en Programación: Guía Completa de la Industria',
      category: 'Arquitectura de Software',
      readTime: '6 min de lectura',
      p1: 'En el desarrollo de software empresarial, el código se lee veinte veces más de lo que se escribe. Las convenciones de nombres son la gramática estructural de un sistema.',
      p2: 'Cuando los equipos mezclan camelCase y snake_case sin control en microservicios, la serialización JSON y el mapeo en bases de datos sufren errores silenciosos en tiempo de ejecución.',
      codeTitle: 'ejemplo-nomenclatura.ts',
      code: `// Interfaces y Clases en PascalCase
interface PerfilUsuario {
  usuarioId: string;        // camelCase
  fechaCreacion: number;
}

// Constante inmutable en SCREAMING_SNAKE_CASE
const MAXIMO_INTENTOS_REINTENTO = 5;

// Función pura en camelCase
export function obtenerRutaUsuario(perfil: PerfilUsuario): string {
  const rutaBase = 'resumen-cuenta-usuario'; // kebab-case para URL
  return \`/v1/\${rutaBase}/\${perfil.usuarioId}\`;
}`,
      tip: 'Regla de Arquitectura: Aplique transformaciones de nombres de forma estricta en las capas de frontera (como API Gateways y DTOs).'
    },
    {
      title: 'Dominando las Expresiones Cron: De Linux Crontab a Spring y Quartz',
      category: 'DevOps y Backend',
      readTime: '8 min de lectura',
      p1: 'Cron es el motor fundamental para tareas programadas en servidores Linux y aplicaciones empresariales.',
      p2: 'Linux POSIX utiliza 5 campos (Minuto, Hora, Día del Mes, Mes, Día de la Semana), Spring Framework añade Segundos al principio (6 campos), y Quartz soporta Año opcional al final (7 campos).',
      codeTitle: 'cron-dialectos-comparativa.txt',
      code: `# Linux / Unix POSIX (5 Campos: Min Hora DOM Mes DOW)
0 2 * * *         -> Ejecuta diariamente a las 02:00 AM

# Spring Framework (6 Campos: Seg Min Hora DOM Mes DOW)
0 0 2 * * ?       -> Ejecuta diariamente a las 02:00:00 AM

# Quartz Scheduler (7 Campos: Seg Min Hora DOM Mes DOW Año)
0 0 2 1 * ? 2026  -> Ejecuta el día 1 de cada mes a las 02:00 AM en 2026`,
      tip: 'Regla Crítica: Configure siempre las tareas por lotes en hora UTC para evitar fallos por cambio de horario de verano.'
    },
    {
      title: 'Serialización JSON y Seguridad de Tipos con TypeScript en APIs Web',
      category: 'Ingeniería Fullstack',
      readTime: '7 min de lectura',
      p1: 'JavaScript utiliza el estándar IEEE 754 de punto flotante de doble precisión. Números mayores a 2^53 - 1 (como identificadores Snowflake) pierden precisión al deserializarse con JSON.parse.',
      p2: 'La solución recomendada en APIs REST modernas es transmitir identificadores numéricos de 64 bits siempre como cadenas de texto (string).',
      codeTitle: 'json-precision-fix.ts',
      code: `const safeContract = {
  orderId: "9007199254740993", // Transmitido como cadena para preservar precisión
  amountInCents: 4990,
  createdAtIso: "2026-09-10T12:00:00Z"
};`,
      tip: 'Mejor Práctica: Combine interfaces TypeScript con validación en tiempo de ejecución (Zod).'
    },
    {
      title: 'Cómo el Formato de Texto y URLs Afectan el SEO y Rendimiento de APIs',
      category: 'Rendimiento y SEO',
      readTime: '5 min de lectura',
      p1: 'Los rastreadores de Google interpretan los guiones medios (-) como separadores de palabras, mientras que los guiones bajos (_) unen las palabras en un solo término.',
      p2: 'Utilizar kebab-case en minúsculas garantiza que los motores de búsqueda clasifiquen adecuadamente cada palabra clave de su ruta web.',
      codeTitle: 'seo-url-rules.txt',
      code: `❌ Incorrecto: https://example.com/DevTools/Text_Format_Utility/
✅ Ideal:      https://example.com/tools/online-case-converter/`,
      tip: 'Guía de Google: Utilice guiones para separar palabras en sus URLs.'
    }
  ],
  ja: [
    {
      title: 'プログラミング命名規則の完全ガイド：camelCase・PascalCase・snake_case・kebab-case',
      category: 'コード設計・命名規則',
      readTime: '6分で読める',
      p1: 'エンタープライズ開発において、コードが読まれる頻度は書かれる頻度の20倍以上です。命名規則は単なる好みではなく、システム全体の整合性を保つための文法です。',
      p2: 'camelCase と snake_case が混在すると、JSON のシリアライズやデータベースマッピングで予期せぬバグを引き起こす原因になります。',
      codeTitle: 'naming-example.ts',
      code: `// インターフェースとクラス：PascalCase
interface UserAccountProfile {
  userId: string;          // 変数とプロパティ：camelCase
  createdTimestamp: number;
}

// 不変の定数：SCREAMING_SNAKE_CASE
const MAXIMUM_RETRY_THRESHOLD = 5;

// 関数：camelCase
export function formatUserProfile(profile: UserAccountProfile): string {
  const apiSlug = 'user-account-summary'; // URLパス：kebab-case
  return \`/v1/\${apiSlug}/\${profile.userId}\`;
}`,
      tip: 'アーキテクチャの原則：命名変換はシステムの境界レイヤー（API ゲートウェイや DTO マッピング層）で自動化することが推奨されます。'
    },
    {
      title: 'Cron 式の完全解説：Linux Crontab から Spring・Quartz まで',
      category: 'バックエンド・DevOps',
      readTime: '8分で読める',
      p1: 'Linux POSIX は 5 フィールド（分・時・日・月・曜日）、Spring Framework は秒を含む 6 フィールド、Quartz は年を含む 7 フィールドに対応しています。',
      p2: '実行環境に応じた正しい書式を選択し、タイムゾーンを UTC で統一することが重要です。',
      codeTitle: 'cron-syntax.txt',
      code: `# Linux (5桁: 分 時 日 月 曜日)
0 2 * * *         -> 毎日深夜 02:00 に実行

# Spring (6桁: 秒 分 時 日 月 曜日)
0 0 2 * * ?       -> 毎日深夜 02:00:00 に実行

# Quartz (7桁: 秒 分 時 日 月 曜日 年)
0 0 2 1 * ? 2026  -> 2026年の毎月1日 02:00 に実行`,
      tip: '重要設計ルール：スケジューラーの基準時刻は必ず UTC に設定し、夏時間のズレを防いでください。'
    },
    {
      title: 'JSON シリアライズと TypeScript 型安全性のベストプラクティス',
      category: 'フルスタック開発',
      readTime: '7分で読める',
      p1: 'JavaScript の数値は IEEE 754 浮動小数点数（最大安全整数 2^53 - 1）として扱われるため、分散システムの 64 ビット ID（Snowflake ID 等）は文字列型（string）としてやり取りする必要があります。',
      p2: '生の JSON サンプルから TypeScript 型定義を逆生成することで、フロントエンドの開発速度と型安全性を最大化できます。',
      codeTitle: 'json-precision-fix.ts',
      code: `const safeContract = {
  orderId: "9007199254740993", // 精度損失を防ぐため文字列で送信
  amountInCents: 4990,
  createdAtIso: "2026-09-10T12:00:00Z"
};`,
      tip: 'ベストプラクティス：TypeScript インターフェースと Zod バリデーションを併用してください。'
    },
    {
      title: '文字列フォーマット・URL スラッグ・命名が SEO と API に与える影響',
      category: 'Web パフォーマンス & SEO',
      readTime: '5分で読める',
      p1: 'Google 検索セントラルのガイドラインでは、単語の区切りにアンダースコア（_）ではなくハイフン（-）を使用することが推奨されています。',
      p2: 'Linux サーバーと CDN は URL の大文字・小文字を厳格に区別するため、小文字ケバブケースで統一することが不可欠です。',
      codeTitle: 'seo-url-rules.txt',
      code: `❌ 非推奨: https://example.com/DevTools/Text_Format_Utility/
✅ 推奨:   https://example.com/tools/online-case-converter/`,
      tip: 'Google SEO ガイドライン：単語の区切りにはハイフンを使用してください。'
    }
  ],
  de: [
    {
      title: 'Programmier-Namenskonventionen: Der vollständige Branchenleitfaden',
      category: 'Software-Architektur',
      readTime: '6 Min. Lesezeit',
      p1: 'In der professionellen Softwareentwicklung wird Code zwanzigmal häufiger gelesen als geschrieben. Einheitliche Namenskonventionen reduzieren Fehler bei der JSON-Serialisierung.',
      p2: 'JavaScript/TypeScript nutzen camelCase für Variablen und PascalCase für Klassen. Python nutzt snake_case nach PEP 8.',
      codeTitle: 'naming-example.ts',
      code: `interface UserAccountProfile {
  userId: string;
  createdTimestamp: number;
}
const MAXIMUM_RETRY_THRESHOLD = 5;
export function formatUserProfile(profile: UserAccountProfile): string {
  const apiSlug = 'user-account-summary';
  return \`/v1/\${apiSlug}/\${profile.userId}\`;
}`,
      tip: 'Architektur-Tipp: Führen Sie Namenskonvertierungen an Schnittstellen-Grenzen (z. B. API-Gateways) automatisiert durch.'
    },
    {
      title: 'Cron-Ausdrücke meistern: Von Linux Crontab bis Spring & Quartz',
      category: 'Backend & DevOps',
      readTime: '8 Min. Lesezeit',
      p1: 'Linux nutzt 5 Felder, Spring 6 Felder (inklusive Sekunden) und Quartz bis zu 7 Felder (inklusive optionalem Jahr).',
      p2: 'Standardisieren Sie geplante Aufgaben auf UTC, um Probleme mit der Sommerzeitumstellung zu vermeiden.',
      codeTitle: 'cron-syntax.txt',
      code: `# Linux (5 Felder: Min Std Tag Monat Wochentag)
0 2 * * *         -> Täglich um 02:00 Uhr
# Spring (6 Felder: Sek Min Std Tag Monat Wochentag)
0 0 2 * * ?       -> Täglich um 02:00:00 Uhr`,
      tip: 'Architektur-Regel: Verwenden Sie UTC auf Server-Ebene für alle periodischen Cron-Jobs.'
    },
    {
      title: 'JSON-Serialisierung und TypeScript-Typsicherheit in modernen Web-APIs',
      category: 'Fullstack-Engineering',
      readTime: '7 Min. Lesezeit',
      p1: 'Da JavaScript Zahlen als IEEE 754 Floats darstellt, sollten IDs über 2^53 - 1 in JSON stets als Strings übertragen werden.',
      p2: 'Die automatische Generierung robuster TypeScript-Typen aus JSON verhindert Laufzeitfehler.',
      codeTitle: 'json-precision-fix.ts',
      code: `const safeContract = {
  orderId: "9007199254740993", // Als String zur Vermeidung von Rundungsfehlern
  amountInCents: 4990,
  createdAtIso: "2026-09-10T12:00:00Z"
};`,
      tip: 'Empfehlung: Kombinieren Sie TypeScript-Typen mit Laufzeitvalidierung (Zod).'
    },
    {
      title: 'Wie Textformatierung, URL-Slugs und Benennung SEO und APIs beeinflussen',
      category: 'Web-Performance & SEO',
      readTime: '5 Min. Lesezeit',
      p1: 'Google empfiehlt Bindestriche (-) statt Unterstriche (_) zur Trennung von Wörtern in URLs für eine optimale Indexierung.',
      p2: 'Linux-Webserver und CDNs unterscheiden strikt zwischen Groß- und Kleinschreibung.',
      codeTitle: 'seo-url-rules.txt',
      code: `❌ Schlecht: https://example.com/DevTools/Text_Format_Utility/
✅ Ideal:    https://example.com/tools/online-case-converter/`,
      tip: 'Google Richtlinie: Nutzen Sie Bindestriche zur Worttrennung in URLs.'
    }
  ],
  fr: [
    {
      title: 'Conventions de Nommage en Programmation : Le Guide Complet',
      category: 'Architecture Logicielle',
      readTime: '6 min de lecture',
      p1: 'Dans l\'ingénierie logicielle, le code est lu vingt fois plus souvent qu\'il n\'est écrit. Des conventions claires garantissent une maintenabilité optimale.',
      p2: 'JavaScript / TypeScript utilise camelCase pour les variables et PascalCase pour les classes. Python impose snake_case selon la PEP 8.',
      codeTitle: 'naming-example.ts',
      code: `interface UserAccountProfile {
  userId: string;
  createdTimestamp: number;
}
const MAXIMUM_RETRY_THRESHOLD = 5;
export function formatUserProfile(profile: UserAccountProfile): string {
  const apiSlug = 'user-account-summary';
  return \`/v1/\${apiSlug}/\${profile.userId}\`;
}`,
      tip: 'Conseil d\'architecture : Effectuez les conversions de casse aux frontières du système (passerelles API, DTO).'
    },
    {
      title: 'Maîtriser les Expressions Cron : De Linux Crontab à Spring & Quartz',
      category: 'DevOps & Backend',
      readTime: '8 min de lecture',
      p1: 'Linux utilise 5 champs, Spring Framework en utilise 6 (avec secondes) et Quartz peut en utiliser 7 (avec année).',
      p2: 'Configurez toujours les serveurs en fuseau horaire UTC pour éviter les décalages de changement d\'heure.',
      codeTitle: 'cron-syntax.txt',
      code: `# Linux (5 champs: Min Heure Jour Mois JourSemaine)
0 2 * * *         -> Tous les jours à 02:00
# Spring (6 champs: Sec Min Heure Jour Mois JourSemaine)
0 0 2 * * ?       -> Tous les jours à 02:00:00`,
      tip: 'Règle essentielle : Standardisez l\'horloge système en UTC pour tous les traitements batch.'
    },
    {
      title: 'Sérialisation JSON et Sécurité de Typage TypeScript dans les APIs Web',
      category: 'Ingénierie Fullstack',
      readTime: '7 min de lecture',
      p1: 'Pour éviter la troncature des identifiants 64 bits au-delà de 2^53 - 1 en JavaScript, transmettez toujours les identifiants sous forme de chaînes de caractères.',
      p2: 'Générez automatiquement des interfaces TypeScript pour garantir des contrats d\'API stricts.',
      codeTitle: 'json-precision-fix.ts',
      code: `const safeContract = {
  orderId: "9007199254740993", // Transmis en chaîne pour préserver la précision
  amountInCents: 4990,
  createdAtIso: "2026-09-10T12:00:00Z"
};`,
      tip: 'Bonne pratique : Associez les types TypeScript à une validation au runtime comme Zod.'
    },
    {
      title: 'Impact du Formatage de Texte et des URLs sur le SEO et les Performances API',
      category: 'Performance Web & SEO',
      readTime: '5 min de lecture',
      p1: 'Google recommande l\'usage de tirets courts (-) plutôt que d\'underscores (_) pour séparer les mots dans les URLs.',
      p2: 'Les serveurs Linux et les CDN traitent les majuscules et minuscules comme des ressources distinctes.',
      codeTitle: 'seo-url-rules.txt',
      code: `❌ À éviter: https://example.com/DevTools/Text_Format_Utility/
✅ Recommandé: https://example.com/tools/online-case-converter/`,
      tip: 'Directive Google : Utilisez des tirets pour séparer les mots dans les URLs.'
    }
  ]
};

export const ssgMetaByLocale = {
  en: {
    guidesSectionTitle: '📚 In-Depth Technical Guides & Specifications',
    guidesSectionSubtitle: 'Comprehensive engineering documentation covering naming conventions, distributed cron architectures, and type-safe JSON contracts.',
    footerNotice: 'DevText Toolkit · Free, Secure & High-Performance Developer Utilities',
    privacySafety: '⚡ 100% Client-Side In-Browser Engine · Zero Data Leaves Your Device',
    privacySubtitle: 'Supports offline instant execution with zero server latency and end-to-end client privacy protection.'
  },
  zh: {
    guidesSectionTitle: '📚 深度技术指南与工程规范专区',
    guidesSectionSubtitle: '全面覆盖主流命名法则、分布式定时调度架构、TypeScript 类型安全契约与高并发 API 性能设计。',
    footerNotice: 'DevText 开发者工具箱 · 纯本地离线计算 · 零延迟 · 隐私安全保障',
    privacySafety: '⚡ 100% 浏览器本地离线计算 · 零数据外发 · 极速隐私',
    privacySubtitle: '无需连接任何远程后端服务器，纯前端客户端执行，彻底杜绝数据泄露隐患。'
  },
  es: {
    guidesSectionTitle: '📚 Guías Técnicas Detalladas y Especificaciones',
    guidesSectionSubtitle: 'Documentación exhaustiva sobre convenciones de nombres, arquitecturas cron distribuidas y contratos JSON seguros.',
    footerNotice: 'DevText Toolkit · Utilidades Gratuitas, Seguras y de Alto Rendimiento',
    privacySafety: '⚡ 100% Motor Local en Navegador · Cero Datos Salen de su Dispositivo',
    privacySubtitle: 'Procesamiento instantáneo sin latencia de servidor y con máxima protección de privacidad.'
  },
  ja: {
    guidesSectionTitle: '📚 開発者向け詳細技術ガイド＆仕様リファレンス',
    guidesSectionSubtitle: '命名規則の標準化、分散 Cron スケジューリング設計、TypeScript 型安全性のベストプラクティス。',
    footerNotice: 'DevText Toolkit · 完全ブラウザ完結 · ゼロ遅延 · 高セキュリティ開発者ツール',
    privacySafety: '⚡ 100% ブラウザ内ローカル処理 · 外部データ送信ゼロ',
    privacySubtitle: 'サーバーへのデータアップロードは一切行わず、完全オフラインで瞬時に高速処理します。'
  },
  de: {
    guidesSectionTitle: '📚 Technische Leitfäden & Spezifikationen',
    guidesSectionSubtitle: 'Umfassende Dokumentation zu Namenskonventionen, verteilten Cron-Architekturen und typsicheren JSON-Schnittstellen.',
    footerNotice: 'DevText Toolkit · Kostenlose, sichere und leistungsstarke Entwickler-Tools',
    privacySafety: '⚡ 100% Lokale Browser-Engine · Keine Daten verlassen Ihr Gerät',
    privacySubtitle: 'Sofortige Ausführung ohne Server-Latenz und mit vollständigem Schutz Ihrer Privatsphäre.'
  },
  fr: {
    guidesSectionTitle: '📚 Guides Techniques Approfondis & Spécifications',
    guidesSectionSubtitle: 'Documentation technique complète sur les conventions de nommage, architectures cron et sécurité des types JSON.',
    footerNotice: 'DevText Toolkit · Utilitaires Développeurs Gratuits, Sécurisés et Haute Performance',
    privacySafety: '⚡ 100% Moteur Local dans le Navigateur · Aucune Donnée ne Quitte Votre Appareil',
    privacySubtitle: 'Exécution instantanée sans latence serveur avec protection absolue de votre confidentialité.'
  }
};
