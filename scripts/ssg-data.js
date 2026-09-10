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

export const ssgHowToByLocale = {
  en: {
    title: 'How to Use DevText: 3-Step Instant Workflow',
    subtitle: 'Zero learning curve. Transform case formats, generate TypeScript types, and simulate cron schedules with client-side speed.',
    steps: [
      { step: '01', title: 'Paste or Type Source Text', desc: 'Insert raw strings, camelCase identifiers, multiline code, cron expressions, or JSON payloads into the editor.' },
      { step: '02', title: 'Select Desired Target Format', desc: 'Click any format: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, or JSON prettifier.' },
      { step: '03', title: '1-Click Copy & Instant Integration', desc: 'Copy formatted results instantly to your clipboard. No ads, no popups, zero data stored on any server.' }
    ]
  },
  zh: {
    title: '如何高效使用 DevText：3 步极简操作流程',
    subtitle: '零学习成本。全浏览器本地秒级转换命名格式、生成 TypeScript 类型及模拟 Cron 调度。',
    steps: [
      { step: '01', title: '第 1 步：粘贴或输入源文本', desc: '在输入框中填入待处理的原始字符串、代码标识符、多行日志、Cron 表达式或 JSON 数据。' },
      { step: '02', title: '第 2 步：选择目标转换规范', desc: '点击对应的操作按钮：驼峰 camelCase、帕斯卡 PascalCase、下划线 snake_case、短横线 kebab-case 或 JSON 格式化。' },
      { step: '03', title: '第 3 步：一键复制并投产使用', desc: '转换结果实时呈现，一键复制至剪贴板，无弹窗打扰，数据 100% 停留本地，即刻粘贴至 IDE 编码。' }
    ]
  },
  es: {
    title: 'Cómo usar DevText: Flujo de trabajo instantáneo en 3 pasos',
    subtitle: 'Sin curva de aprendizaje. Transforme formatos de mayúsculas, genere interfaces TypeScript y simule cron localmente.',
    steps: [
      { step: '01', title: 'Paso 01: Pegar o escribir el texto de origen', desc: 'Introduzca su cadena de texto, identificadores camelCase, código multilínea, expresión cron o JSON en el editor.' },
      { step: '02', title: 'Paso 02: Seleccionar el formato de destino', desc: 'Haga clic en cualquier botón: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE o formateador JSON.' },
      { step: '03', title: 'Paso 03: Copiar con 1 clic e integrar', desc: 'Copie el resultado formateado al portapapeles al instante. Sin ventanas emergentes y con privacidad total.' }
    ]
  },
  ja: {
    title: 'DevText の使い方：3ステップの即時ワークフロー',
    subtitle: '学習コストゼロ。大文字・小文字変換、TypeScript 型生成、Cron 式シミュレーションをローカルで即時実行。',
    steps: [
      { step: '01', title: 'ステップ 01: ソーステキストを入力または貼り付け', desc: 'エディタに対象の文字列、識別子、複数行コード、Cron 式、または JSON データを入力または貼り付けます。' },
      { step: '02', title: 'ステップ 02: 変換先の命名規則を選択', desc: 'ボタンを1クリック：camelCase、PascalCase、snake_case、kebab-case、CONSTANT_CASE、または JSON 整形。' },
      { step: '03', title: 'ステップ 03: 1クリックでコピーして活用', desc: '変換結果をワンクリックでクリップボードにコピー。広告ポップアップなし、データ外部送信ゼロで安心。' }
    ]
  },
  de: {
    title: 'So nutzen Sie DevText: 3-Schritte-Sofort-Workflow',
    subtitle: 'Keine Lernkurve. Ändern Sie Textformate, generieren Sie TypeScript-Typen und simulieren Sie Cron-Zeitpläne blitzschnell.',
    steps: [
      { step: '01', title: 'Schritt 01: Quelltext einfügen oder eingeben', desc: 'Geben Sie Ihre unformatierten Zeichenfolgen, camelCase-Bezeichner, mehrzeiligen Code, Cron-Ausdrücke oder JSON ein.' },
      { step: '02', title: 'Schritt 02: Zielformat auswählen', desc: 'Klicken Sie auf das gewünschte Format: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE oder JSON.' },
      { step: '03', title: 'Schritt 03: 1-Klick-Kopieren & Einbinden', desc: 'Kopieren Sie das formatierte Ergebnis mit einem Klick in die Zwischenablage. 100% lokal und ohne Popups.' }
    ]
  },
  fr: {
    title: 'Comment utiliser DevText : Flux de travail instantané en 3 étapes',
    subtitle: 'Aucune courbe d’apprentissage. Modifiez la casse, générez des types TypeScript et simulez vos cron en local.',
    steps: [
      { step: '01', title: 'Étape 01 : Coller ou saisir le texte source', desc: 'Insérez votre chaîne de caractères, identifiants camelCase, code multiligne, expression cron ou JSON.' },
      { step: '02', title: 'Étape 02 : Sélectionner le format cible', desc: 'Cliquez sur le bouton de votre choix : camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE ou JSON.' },
      { step: '03', title: 'Étape 03 : Copier en 1 clic et intégrer', desc: 'Copiez instantanément le résultat dans votre presse-papiers. Sans pop-up et 100% confidentiel.' }
    ]
  }
};

export const ssgUseCasesByLocale = {
  en: {
    title: 'Enterprise Engineering Use Cases',
    subtitle: 'How professional software engineers save hours every sprint using automated format standardizers.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. API Data Transfer Object Alignment',
        problem: 'Databases & Go/Python services return snake_case (user_account_id), while TypeScript React requires camelCase (userAccountId).',
        solution: 'Instant 1-click conversion eliminates typo regressions across API boundaries.',
        example: 'user_account_id ➔ userAccountId'
      },
      {
        tag: 'SQL & Database ORMs',
        title: '2. SQL Schemas & ORM Entity Modeling',
        problem: 'Requirement sheets use spaced headers (Order Created Date) unsuitable for relational database DDL.',
        solution: 'Instantly convert to order_created_date for PostgreSQL DDL, and OrderCreatedDate for Hibernate / Prisma entities.',
        example: 'Order Created Date ➔ order_created_date / OrderCreatedDate'
      },
      {
        tag: 'SEO & Microservices',
        title: '3. SEO Clean URL Slugs & Route Endpoints',
        problem: 'Google Search Guidelines strictly penalize underscores in URLs, requiring hyphen-separated kebab-case.',
        solution: 'Transform editorial blog headlines into clean, URL-encoded kebab-case slugs in milliseconds.',
        example: 'Developer Guide To Clean Code ➔ developer-guide-to-clean-code'
      }
    ]
  },
  zh: {
    title: '真实企业级工程使用场景与实战方案',
    subtitle: '专业工程师如何通过自动化文本与命名工具，在日常迭代中省下数小时的重复枯燥排版时间。',
    cases: [
      {
        tag: '前后端 DTO 联调',
        title: '1. API 接口数据传输对象（DTO）字段对齐',
        problem: '数据库与 Python/Go 微服务常返回下划线字段（如 user_account_id），而前端 React/Vue 的 TypeScript 规范强制要求小驼峰（userAccountId）。',
        solution: '一键批量互转，杜绝因手动改名引发的字段拼写失误与运行时 undefined 异常。',
        example: 'user_account_id ➔ userAccountId'
      },
      {
        tag: '数据库与 ORM 建模',
        title: '2. 数据库 SQL 建表与 ORM 实体双向映射',
        problem: '产品需求文档或 Excel 表头往往是带空格或杂乱英文（如 Order Created Date），无法直接作为数据库列名。',
        solution: '一键转为 order_created_date 用于 MySQL/PostgreSQL DDL，转为 OrderCreatedDate 供 Prisma/Hibernate 实体使用。',
        example: 'Order Created Date ➔ order_created_date / OrderCreatedDate'
      },
      {
        tag: 'SEO 与微服务路由',
        title: '3. SEO 友好 URL 路由与云原生微服务规范',
        problem: 'Google 官方搜索指南明确规定：URL 必须使用短横线分隔单词，严禁混用下划线或空格以保障搜索索引权重。',
        solution: '将文章标题或类目名一秒转换为标准的 URL Slug（如 developer-guide-to-clean-code），显著提升 SEO 排名。',
        example: 'Developer Guide To Clean Code ➔ developer-guide-to-clean-code'
      }
    ]
  },
  es: {
    title: 'Casos de uso en ingeniería de software',
    subtitle: 'Cómo los ingenieros profesionales ahorran horas en cada sprint estandarizando nombres y datos.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. Mapeo de DTO entre Frontend y Backend',
        problem: 'Las bases de datos devuelven campos en snake_case (user_account_id), mientras que React/TypeScript exige camelCase (userAccountId).',
        solution: 'La conversión en 1 clic elimina errores tipográficos en las interfaces de comunicación.',
        example: 'user_account_id ➔ userAccountId'
      },
      {
        tag: 'Bases de datos y ORM',
        title: '2. Esquemas de Base de Datos SQL y Modelos ORM',
        problem: 'Hojas de Excel contienen encabezados con espacios (Order Created Date) incompatibles con SQL.',
        solution: 'Convierta al instante a order_created_date para PostgreSQL y a OrderCreatedDate para clases Prisma/Hibernate.',
        example: 'Order Created Date ➔ order_created_date / OrderCreatedDate'
      },
      {
        tag: 'SEO y Microservicios',
        title: '3. Slugs SEO para URLs y Rutas de Microservicios',
        problem: 'Google penaliza el uso de guiones bajos en URLs, exigiendo guiones medios (kebab-case).',
        solution: 'Transforme títulos de blogs en slugs limpios y optimizados para motores de búsqueda.',
        example: 'Developer Guide To Clean Code ➔ developer-guide-to-clean-code'
      }
    ]
  },
  ja: {
    title: '実践的な開発ユースケースとソリューション',
    subtitle: '命名規則とデータ構造の自動標準化により、日々の開発スプリントで何時間もの工数を削減。',
    cases: [
      {
        tag: 'フロント ↔ バック DTO',
        title: '1. API DTO フィールドの自動アライメント',
        problem: 'データベースや Go/Python API は snake_case（user_account_id）を返しますが、TypeScript/React は camelCase（userAccountId）を要求します。',
        solution: '1クリックで一括変換し、手動入力によるタイポや undefined エラーを完全に防ぎます。',
        example: 'user_account_id ➔ userAccountId'
      },
      {
        tag: 'SQL & ORM 定義',
        title: '2. SQL テーブル定義と ORM エンティティモデリング',
        problem: '要件定義書や Excel の列名は空白混じりの英語（Order Created Date）になりがちです。',
        solution: 'SQL 用の order_created_date や Prisma/Hibernate 用の OrderCreatedDate へ即時変換。',
        example: 'Order Created Date ➔ order_created_date / OrderCreatedDate'
      },
      {
        tag: 'SEO & マイクロサービス',
        title: '3. SEO フレンドリーな URL スラッグとルーティング',
        problem: 'Google 検索エンジンは URL 内の単語区切りにアンダースコアではなくハイフン（kebab-case）を推奨しています。',
        solution: '記事タイトルを即座に SEO 最適化された URL スラッグに変換します。',
        example: 'Developer Guide To Clean Code ➔ developer-guide-to-clean-code'
      }
    ]
  },
  de: {
    title: 'Anwendungsfälle in der Softwareentwicklung',
    subtitle: 'Wie professionelle Entwickler jede Woche wertvolle Zeit bei der Code-Standardisierung sparen.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. API-DTO-Mapping zwischen Frontend und Backend',
        problem: 'Datenbanken liefern snake_case (user_account_id), während TypeScript camelCase (userAccountId) verlangt.',
        solution: '1-Klick-Konvertierung verhindert Flüchtigkeitsfehler an Schnittstellen.',
        example: 'user_account_id ➔ userAccountId'
      },
      {
        tag: 'SQL & ORM-Modelle',
        title: '2. SQL-Datenbankschemata & ORM-Modellierung',
        problem: 'Excel-Anforderungsdokumente nutzen Bezeichnungen mit Leerzeichen (Order Created Date).',
        solution: 'Wandeln Sie diese sofort in order_created_date für SQL und OrderCreatedDate für ORM-Entities um.',
        example: 'Order Created Date ➔ order_created_date / OrderCreatedDate'
      },
      {
        tag: 'SEO & Microservices',
        title: '3. SEO-freundliche URL-Slugs & API-Endpunkte',
        problem: 'Google bevorzugt Bindestriche (kebab-case) anstelle von Unterstrichen für die Web-Indexierung.',
        solution: 'Konvertieren Sie Beitragstitel sofort in suchmaschinenoptimierte Slugs.',
        example: 'Developer Guide To Clean Code ➔ developer-guide-to-clean-code'
      }
    ]
  },
  fr: {
    title: 'Cas d\'usage en ingénierie logicielle',
    subtitle: 'Comment les développeurs gagnent un temps précieux chaque sprint grâce à la standardisation.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. Alignement DTO entre API et Frontend',
        problem: 'Les bases de données renvoient du snake_case (user_account_id) alors que TypeScript exige du camelCase (userAccountId).',
        solution: 'Conversion instantanée en 1 clic éliminant tout risque de faute de frappe.',
        example: 'user_account_id ➔ userAccountId'
      },
      {
        tag: 'SQL & ORM Modèles',
        title: '2. Schémas SQL et Modélisation ORM',
        problem: 'Les fichiers Excel contiennent des en-têtes avec espaces (Order Created Date) incompatibles avec SQL.',
        solution: 'Convertissez immédiatement vers order_created_date pour SQL et OrderCreatedDate pour Prisma/Hibernate.',
        example: 'Order Created Date ➔ order_created_date / OrderCreatedDate'
      },
      {
        tag: 'SEO & Microservices',
        title: '3. Slugs d\'URL SEO et Routage d\'API',
        problem: 'Google pénalise les tirets bas dans les URLs et exige des tirets (kebab-case).',
        solution: 'Transformez vos titres en slugs parfaitement indexables par les moteurs de recherche.',
        example: 'Developer Guide To Clean Code ➔ developer-guide-to-clean-code'
      }
    ]
  }
};

export const ssgFaqByLocale = {
  "en": {
    "title": "Frequently Asked Questions (FAQ)",
    "subtitle": "Answers to common security, privacy, performance, and engineering questions.",
    "items": [
      {
        "question": "Is my data safe? Does any text or code get uploaded to your servers?",
        "answer": "No. DevText operates 100% inside your browser using modern WebAssembly and JavaScript engines. Zero characters, passwords, or code snippets ever leave your local machine or touch remote servers. It is completely safe for proprietary enterprise source code and confidential documents."
      },
      {
        "question": "Can this tool handle huge files with tens of thousands of lines without freezing?",
        "answer": "Yes. Our text processing engine uses compiled regex patterns and chunked streaming string manipulation, capable of formatting 50,000+ lines in under 50 milliseconds without blocking the browser main thread."
      },
      {
        "question": "Does it support Unicode accents, international characters, and Chinese text?",
        "answer": "Yes. DevText fully adheres to Unicode Standard Annex #31 and ECMAScript Unicode property escapes (\\p{L}). Accents in Spanish, German umlauts (ä, ö, ü), French cedillas (ç), and CJK ideographs are safely preserved without corruption."
      },
      {
        "question": "What is the official difference between camelCase and PascalCase?",
        "answer": "Both use capitalized internal words, but camelCase starts with a lowercase letter (userProfile), commonly used for variables and functions in JavaScript. PascalCase starts with an uppercase letter (UserProfile), mandatory for class names, React components, and TypeScript types."
      },
      {
        "question": "Why does Google recommend kebab-case for URL structure?",
        "answer": "Google's official SEO guidelines specifically state that hyphens (-) are treated as word separators, whereas underscores (_) join words together. A URL like /user-profile is indexed as \"user\" and \"profile\", whereas /user_profile may be treated as a single unsegmented term."
      },
      {
        "question": "How should distributed systems handle Cron timezone shifts and Daylight Saving Time (DST)?",
        "answer": "Always standardize your server operating system clock and scheduling runtime on Coordinated Universal Time (UTC). In regions observing Daylight Saving Time, clocks \"spring forward\" or \"fall back\" by one hour, which risks either skipping or duplicating cron tasks scheduled during that window. If local timezone scheduling is mandatory, use Quartz/Spring with explicit ZoneId parameters rather than server-local system defaults."
      },
      {
        "question": "Why do 64-bit integers (like Snowflake IDs) lose precision in JSON, and how to avoid it?",
        "answer": "Standard JavaScript Numbers adhere to IEEE 754 double-precision floats, which have a safe integer limit of 2^53 - 1 (9,007,199,254,740,991 / Number.MAX_SAFE_INTEGER). Backend 64-bit BigInt IDs exceeding this threshold will lose their lowest significant digits when deserialized via standard JSON.parse. The industry solution is to serialize all 64-bit IDs as Strings over API boundaries and convert them to BigInt in your application code."
      },
      {
        "question": "Why is AST-based codemod refactoring superior to regex find-and-replace for identifier casing?",
        "answer": "Regular expressions operate purely on character streams without semantic awareness. Renaming a variable with regex frequently breaks identical substrings inside comments, string literals, and CSS class names. Abstract Syntax Tree (AST) codemods parse code into hierarchical grammar nodes, ensuring that only actual identifier tokens within the correct lexical scope are transformed."
      }
    ]
  },
  "zh": {
    "title": "常见问题解答 (FAQ)",
    "subtitle": "关于数据安全、本地运算隐私、大文件性能与工程规范的深度解答。",
    "items": [
      {
        "question": "我的数据安全吗？会有任何文本被上传到远程服务器吗？",
        "answer": "绝对安全。DevText 采用 100% 纯客户端浏览器计算引擎。您的任何文本、密码或公司商业代码绝不会上传至任何远程服务器，亦不保存任何服务器日志。断网离线状态下亦可完美运行，完全满足企业机密代码安全合规审计。"
      },
      {
        "question": "工具能处理大文本或几万行的代码吗？会卡死浏览器吗？",
        "answer": "完全可以。转换引擎采用预编译正则优化与流式字符串切分算法，能够轻松在 50 毫秒内完成数万行代码或大篇幅日志的格式转换，杜绝浏览器主线程卡顿与崩溃。"
      },
      {
        "question": "支持中文字符、西语重音符号、德语变音等特殊字符吗？",
        "answer": "完全支持。转换算法严格遵循 Unicode Standard Annex #31 规范与 ECMAScript Unicode 属性转义（\\p{L}）。无论是西语重音符、德语变音符号（ä, ö, ü）、法语软音符（ç）还是中日韩汉字，都能被精准识别并妥善保留，绝无字符乱码。"
      },
      {
        "question": "camelCase（小驼峰）与 PascalCase（大驼峰）的标准区别是什么？",
        "answer": "两者的核心区别在于首字母大小写：camelCase（小驼峰）首字母必须小写（如 userProfile），广泛用于 JS/TS 变量与函数；PascalCase（大驼峰）首字母必须大写（如 UserProfile），是 React 组件、TypeScript 接口与 Java/C# 类名的强制标准。"
      },
      {
        "question": "为什么 Google SEO 官方强烈推荐使用 kebab-case（短横线）URL？",
        "answer": "Google 官方搜索中心 SEO 指南明确指出：搜索引擎将连字符（- / kebab-case）识别为标准的词间分隔符，而将下划线（_）视为同一个复合词。例如 /user-profile 会被正确索引为 \"user\" 和 \"profile\" 两个独立关键词，而 /user_profile 会被视为不可分割的整体，降低搜索命中率。"
      },
      {
        "question": "分布式定时任务如何正确处理时区漂移与夏令时（DST）陷阱？",
        "answer": "核心原则：所有服务器基础设施和调度引擎必须强制统一采用 UTC（世界协调时间）。在实行夏令时的国家，每年会发生时钟拨快或拨慢 1 小时，如果任务设定在凌晨切换时段，将导致任务跳过或重复执行。若业务必须按本地时间触发，应在 Spring/Quartz 调度器中显式绑定 ZoneId（如 Asia/Shanghai），杜绝依赖不可控的系统本地时区。"
      },
      {
        "question": "为什么大于 2^53 - 1 的 64 位雪花算法 ID 在 JSON 解析时会丢失精度？",
        "answer": "JavaScript 的 Number 类型基于 IEEE 754 双精度浮点数标准，其安全整数上限为 2^53 - 1（即 9,007,199,254,740,991 / Number.MAX_SAFE_INTEGER）。后端的 64 位 Long 或 Snowflake ID 往往超过该上限，前端直接调用 JSON.parse 会导致末位精度被抹零。行业规范是后端在序列化 DTO 时统一将 64 位 ID 转为 String 字符串传输，前端按需使用 BigInt 处理。"
      },
      {
        "question": "在大规模代码重构中，为什么推荐 AST 抽象语法树而不是全局正则替换？",
        "answer": "普通正则表达式仅进行扁平的字符匹配，缺乏语法和作用域感知，极易误伤同名的代码注释、字符串常量或第三方库属性。而 AST（抽象语法树）解析器能精准识别代码的作用域与节点类型（如 VariableDeclarator、Property），只对目标语义下的变量标识符进行安全重构，杜绝因文本误替换导致的线上隐蔽 Bug。"
      }
    ]
  },
  "es": {
    "title": "Preguntas Frecuentes (FAQ)",
    "subtitle": "Respuestas a preguntas comunes sobre seguridad, rendimiento y privacidad.",
    "items": [
      {
        "question": "¿Están seguros mis datos? ¿Se sube texto a servidores remotos?",
        "answer": "Absolutamente seguro. DevText funciona 100% en su navegador local. Ningún texto, contraseña o fragmento de código confidencial se envía a servidores externos ni se almacena en la nube."
      },
      {
        "question": "¿Puede esta herramienta procesar archivos grandes sin congelar la pantalla?",
        "answer": "Sí. Nuestro motor de procesamiento utiliza expresiones regulares optimizadas capaces de formatear más de 50.000 líneas en menos de 50 milisegundos sin bloquear el hilo principal del navegador."
      },
      {
        "question": "¿Admite acentos, diéresis y caracteres internacionales?",
        "answer": "Sí. Soporta completamente caracteres internacionales, acentos del español, diéresis del alemán (ä, ö, ü) y caracteres asiáticos con total fidelidad al estándar Unicode."
      },
      {
        "question": "¿Cuál es la diferencia oficial entre camelCase y PascalCase?",
        "answer": "La diferencia es la primera letra: camelCase comienza con minúscula (userProfile, para variables JS), mientras que PascalCase comienza con mayúscula (UserProfile, para clases y componentes React)."
      },
      {
        "question": "¿Por qué Google recomienda kebab-case para la estructura de URLs?",
        "answer": "Las directrices oficiales de Google indican que los guiones (-) se interpretan como separadores de palabras, mientras que los guiones bajos (_) unen las palabras, reduciendo la eficacia SEO."
      },
      {
        "question": "¿Cómo deben gestionar los sistemas distribuidos la zona horaria y el horario de verano en Cron?",
        "answer": "La regla de oro es configurar siempre los servidores y planificadores en UTC. En regiones con horario de verano, el cambio de hora puede duplicar u omitir tareas programadas. Si se requiere hora local, especifique un ZoneId explícito en Quartz o Spring en lugar de usar la hora del sistema operativo."
      },
      {
        "question": "¿Por qué los enteros de 64 bits pierden precisión en JSON en JavaScript?",
        "answer": "JavaScript utiliza números de punto flotante de doble precisión (IEEE 754), con un límite seguro de 2^53 - 1. Los IDs de 64 bits (como Snowflake IDs) superan este límite y se truncan al usar JSON.parse. La solución estándar es serializar estos IDs como cadenas (strings) en la API."
      },
      {
        "question": "¿Por qué es superior el refactorizado basado en AST frente a expresiones regulares?",
        "answer": "Las expresiones regulares no tienen noción de ámbito sintáctico y pueden modificar comentarios o cadenas literales por error. Las herramientas AST analizan el árbol sintáctico del lenguaje y solo modifican los identificadores correctos en su ámbito léxico."
      }
    ]
  },
  "ja": {
    "title": "よくある質問 (FAQ)",
    "subtitle": "セキュリティ、プライバシー、大容量テキスト処理に関する回答。",
    "items": [
      {
        "question": "データは安全ですか？サーバーに入力内容が送信されますか？",
        "answer": "完全に安全です。DevText は 100% ブラウザ内で動作し、入力されたコードや機密テキストが外部サーバーへ送信されることは一切ありません。オフライン環境でも完全動作します。"
      },
      {
        "question": "数万行規模の大きなテキストでもフリーズせず処理できますか？",
        "answer": "はい。最適化された正規表現とメモリ効率の高い文字列処理により、数万行規模のテキストやログも 50 ミリ秒以内に高速処理し、ブラウザの快適性を維持します。"
      },
      {
        "question": "日本語の漢字やアクセント記号などの特殊文字に対応していますか？",
        "answer": "はい。Unicode 規格に完全準拠しており、日本語の漢字・ひらがな・カタカナはもちろん、欧州言語のアクセント記号も文字化けせず正確に処理されます。"
      },
      {
        "question": "camelCase と PascalCase の使い分けのルールは何ですか？",
        "answer": "先頭文字の大文字・小文字が異なります。camelCase は小文字で始まり（userProfile、変数や関数用）、PascalCase は大文字で始まります（UserProfile、React コンポーネントやクラス用）。"
      },
      {
        "question": "なぜ Google SEO では kebab-case（ハイフン区切り）が推奨されるのですか？",
        "answer": "Google 検索アルゴリズムは、ハイフン（-）を単語の区切りとして認識しますが、アンダースコア（_）は1つの結合された単語として認識するため、kebab-case の方が SEO 的に有利です。"
      },
      {
        "question": "分散システムにおいてCronのタイムゾーンや夏時間（DST）を安全に扱うには？",
        "answer": "サーバーおよびスケジューラーの基盤は常にUTCで統一するのが原則です。夏時間を採用する国では1時間のズレによりジョブの重複やスキップが発生します。現地時間での実行が必要な場合は、QuartzやSpringで明示的にZoneIdを指定してください。"
      },
      {
        "question": "JavaScriptで2^53 - 1を超える64ビット整数がJSON解析で精度落ちする理由は？",
        "answer": "JavaScriptの数値型はIEEE 754倍精度浮点数に準拠しており、安全な整数の最大値は2^53 - 1です。これを超えるIDをJSON.parseすると下位桁が0に丸められます。対策としてAPI通信では64ビットIDを文字列型（string）として送受信します。"
      },
      {
        "question": "命名規則のリファクタリングで正規表現ではなくASTが推奨される理由は？",
        "answer": "正規表現による置換は構文スコープを認識できないため、コメントや文字列リテラルを誤って書き換える危険があります。AST（抽象構文木）ツールは構文解析を行い、対象の識別子トークンのみを安全にリファクタリングします。"
      }
    ]
  },
  "de": {
    "title": "Häufig gestellte Fragen (FAQ)",
    "subtitle": "Antworten auf häufige Fragen zu Datenschutz, Performance und Konventionen.",
    "items": [
      {
        "question": "Sind meine Daten sicher? Werden Texte an Server übertragen?",
        "answer": "Absolut sicher. DevText läuft zu 100% lokal in Ihrem Browser. Es werden keinerlei Daten, Passwörter oder Code-Snippets an externe Server übertragen oder protokolliert."
      },
      {
        "question": "Kann das Tool auch große Dateien mit zehntausenden Zeilen verarbeiten?",
        "answer": "Ja. Dank optimierter Regex-Engines werden auch große Texte mit über 50.000 Zeilen in unter 50 Millisekunden ohne Verzögerung verarbeitet."
      },
      {
        "question": "Werden deutsche Umlaute und Sonderzeichen unterstützt?",
        "answer": "Ja. Volle Unterstützung für Unicode-Zeichen, deutsche Umlaute (ä, ö, ü, ß) und internationale Schriftzeichen ohne Formatierungsverlust."
      },
      {
        "question": "Was ist der offizielle Unterschied zwischen camelCase und PascalCase?",
        "answer": "Der Unterschied liegt beim ersten Buchstaben: camelCase beginnt klein (userProfile für Variablen), PascalCase beginnt groß (UserProfile für Klassen und React-Komponenten)."
      },
      {
        "question": "Warum empfiehlt Google kebab-case für URL-Strukturen?",
        "answer": "Google wertet Bindestriche (-) als Worttrenner, während Unterstriche (_) Wörter verbinden. URLs im kebab-case erzielen daher nachweislich bessere SEO-Rankings."
      },
      {
        "question": "Wie sollten verteilte Systeme Cron-Zeitzonen und die Sommerzeit behandeln?",
        "answer": "Konfigurieren Sie Server und Scheduler stets auf UTC. Bei der Zeitumstellung können Jobs sonst übersprungen oder doppelt ausgeführt werden. Falls lokale Zeiten zwingend sind, nutzen Sie explizite ZoneId-Parameter in Spring/Quartz statt der Host-Systemzeit."
      },
      {
        "question": "Warum verlieren 64-Bit-Ganzzahlen beim JSON-Parsing in JavaScript an Präzision?",
        "answer": "JavaScript-Zahlen folgen dem IEEE 754-Standard mit einem sicheren Limit von 2^53 - 1. IDs über diesem Wert verlieren beim normalen JSON.parse ihre Genauigkeit. Der Branchenstandard besteht darin, 64-Bit-IDs in REST-APIs stets als Strings zu serialisieren."
      },
      {
        "question": "Warum ist AST-basiertes Codemod-Refactoring dem Suchen-und-Ersetzen mit Regex überlegen?",
        "answer": "Regex operiert auf rohem Text und kann versehentlich Kommentare oder String-Literale umbenennen. AST-Tools analysieren die grammatikalische Baumstruktur des Codes und benennen ausschließlich Variablenbezeichner im gültigen Gültigkeitsbereich um."
      }
    ]
  },
  "fr": {
    "title": "Foire Aux Questions (FAQ)",
    "subtitle": "Réponses aux questions fréquentes sur la confidentialité et les performances.",
    "items": [
      {
        "question": "Mes données sont-elles sécurisées ? Des textes sont-ils envoyés sur des serveurs ?",
        "answer": "Totalement sécurisé. DevText s'exécute à 100% dans votre navigateur. Aucune donnée ou ligne de code n'est envoyée vers un serveur externe ni enregistrée."
      },
      {
        "question": "L'outil peut-il traiter de très grands textes sans bloquer le navigateur ?",
        "answer": "Oui. Grâce à des expressions régulières optimisées, notre outil traite plus de 50 000 lignes en moins de 50 ms sans figer votre navigateur."
      },
      {
        "question": "Les caractères accentués et caractères internationaux sont-ils pris en charge ?",
        "answer": "Oui. Prise en charge intégrale des caractères accentués français (é, è, ç, œ) et de la norme internationale Unicode sans altération."
      },
      {
        "question": "Quelle est la différence entre camelCase et PascalCase ?",
        "answer": "La différence réside dans la première lettre : camelCase commence par une minuscule (userProfile), tandis que PascalCase débute par une majuscule (UserProfile pour les classes et composants)."
      },
      {
        "question": "Pourquoi Google recommande-t-il le kebab-case pour les URLs ?",
        "answer": "Google traite les tirets (-) comme des séparateurs de mots, tandis que les tirets bas (_) lient les termes entre eux, ce qui nuit au référencement naturel."
      },
      {
        "question": "Comment gérer les fuseaux horaires et le changement d'heure saisonnier dans Cron ?",
        "answer": "La règle universelle consiste à configurer vos serveurs et planificateurs en UTC. Les passages à l'heure d'été ou d'hiver peuvent provoquer des doublons ou omissions. Pour une planification locale, définissez un ZoneId explicite dans Spring ou Quartz."
      },
      {
        "question": "Pourquoi les entiers 64 bits perdent-ils en précision lors du parsing JSON en JavaScript ?",
        "answer": "Les nombres JavaScript utilisent le format IEEE 754, limité aux entiers sécurisés jusqu'à 2^53 - 1. Les identifiants de 64 bits sont donc tronqués par JSON.parse. La solution consiste à toujours les transmettre sous forme de chaînes de caractères (string)."
      },
      {
        "question": "Pourquoi le refactoring basé sur l'AST est-il supérieur aux expressions régulières ?",
        "answer": "Les expressions régulières ne comprennent pas la portée du code et risquent de modifier par erreur des commentaires. Les codemods basés sur l'AST manipulent l'arbre syntaxique et ne renomment que les identifiants au bon endroit."
      }
    ]
  }
};
