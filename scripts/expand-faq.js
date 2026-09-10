import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const extraFaqsByLocale = {
  en: [
    {
      question: 'How should distributed systems handle Cron timezone shifts and Daylight Saving Time (DST)?',
      answer: 'Always standardize your server operating system clock and scheduling runtime on Coordinated Universal Time (UTC). In regions observing Daylight Saving Time, clocks "spring forward" or "fall back" by one hour, which risks either skipping or duplicating cron tasks scheduled during that window. If local timezone scheduling is mandatory, use Quartz/Spring with explicit ZoneId parameters rather than server-local system defaults.',
    },
    {
      question: 'Why do 64-bit integers (like Snowflake IDs) lose precision in JSON, and how to avoid it?',
      answer: 'Standard JavaScript Numbers adhere to IEEE 754 double-precision floats, which have a safe integer limit of 2^53 - 1 (9,007,199,254,740,991 / Number.MAX_SAFE_INTEGER). Backend 64-bit BigInt IDs exceeding this threshold will lose their lowest significant digits when deserialized via standard JSON.parse. The industry solution is to serialize all 64-bit IDs as Strings over API boundaries and convert them to BigInt in your application code.',
    },
    {
      question: 'Why is AST-based codemod refactoring superior to regex find-and-replace for identifier casing?',
      answer: 'Regular expressions operate purely on character streams without semantic awareness. Renaming a variable with regex frequently breaks identical substrings inside comments, string literals, and CSS class names. Abstract Syntax Tree (AST) codemods parse code into hierarchical grammar nodes, ensuring that only actual identifier tokens within the correct lexical scope are transformed.',
    },
  ],
  zh: [
    {
      question: '分布式定时任务如何正确处理时区漂移与夏令时（DST）陷阱？',
      answer: '核心原则：所有服务器基础设施和调度引擎必须强制统一采用 UTC（世界协调时间）。在实行夏令时的国家，每年会发生时钟拨快或拨慢 1 小时，如果任务设定在凌晨切换时段，将导致任务跳过或重复执行。若业务必须按本地时间触发，应在 Spring/Quartz 调度器中显式绑定 ZoneId（如 Asia/Shanghai），杜绝依赖不可控的系统本地时区。',
    },
    {
      question: '为什么大于 2^53 - 1 的 64 位雪花算法 ID 在 JSON 解析时会丢失精度？',
      answer: 'JavaScript 的 Number 类型基于 IEEE 754 双精度浮点数标准，其安全整数上限为 2^53 - 1（即 9,007,199,254,740,991 / Number.MAX_SAFE_INTEGER）。后端的 64 位 Long 或 Snowflake ID 往往超过该上限，前端直接调用 JSON.parse 会导致末位精度被抹零。行业规范是后端在序列化 DTO 时统一将 64 位 ID 转为 String 字符串传输，前端按需使用 BigInt 处理。',
    },
    {
      question: '在大规模代码重构中，为什么推荐 AST 抽象语法树而不是全局正则替换？',
      answer: '普通正则表达式仅进行扁平的字符匹配，缺乏语法和作用域感知，极易误伤同名的代码注释、字符串常量或第三方库属性。而 AST（抽象语法树）解析器能精准识别代码的作用域与节点类型（如 VariableDeclarator、Property），只对目标语义下的变量标识符进行安全重构，杜绝因文本误替换导致的线上隐蔽 Bug。',
    },
  ],
  es: [
    {
      question: '¿Cómo deben gestionar los sistemas distribuidos la zona horaria y el horario de verano en Cron?',
      answer: 'La regla de oro es configurar siempre los servidores y planificadores en UTC. En regiones con horario de verano, el cambio de hora puede duplicar u omitir tareas programadas. Si se requiere hora local, especifique un ZoneId explícito en Quartz o Spring en lugar de usar la hora del sistema operativo.',
    },
    {
      question: '¿Por qué los enteros de 64 bits pierden precisión en JSON en JavaScript?',
      answer: 'JavaScript utiliza números de punto flotante de doble precisión (IEEE 754), con un límite seguro de 2^53 - 1. Los IDs de 64 bits (como Snowflake IDs) superan este límite y se truncan al usar JSON.parse. La solución estándar es serializar estos IDs como cadenas (strings) en la API.',
    },
    {
      question: '¿Por qué es superior el refactorizado basado en AST frente a expresiones regulares?',
      answer: 'Las expresiones regulares no tienen noción de ámbito sintáctico y pueden modificar comentarios o cadenas literales por error. Las herramientas AST analizan el árbol sintáctico del lenguaje y solo modifican los identificadores correctos en su ámbito léxico.',
    },
  ],
  ja: [
    {
      question: '分散システムにおいてCronのタイムゾーンや夏時間（DST）を安全に扱うには？',
      answer: 'サーバーおよびスケジューラーの基盤は常にUTCで統一するのが原則です。夏時間を採用する国では1時間のズレによりジョブの重複やスキップが発生します。現地時間での実行が必要な場合は、QuartzやSpringで明示的にZoneIdを指定してください。',
    },
    {
      question: 'JavaScriptで2^53 - 1を超える64ビット整数がJSON解析で精度落ちする理由は？',
      answer: 'JavaScriptの数値型はIEEE 754倍精度浮点数に準拠しており、安全な整数の最大値は2^53 - 1です。これを超えるIDをJSON.parseすると下位桁が0に丸められます。対策としてAPI通信では64ビットIDを文字列型（string）として送受信します。',
    },
    {
      question: '命名規則のリファクタリングで正規表現ではなくASTが推奨される理由は？',
      answer: '正規表現による置換は構文スコープを認識できないため、コメントや文字列リテラルを誤って書き換える危険があります。AST（抽象構文木）ツールは構文解析を行い、対象の識別子トークンのみを安全にリファクタリングします。',
    },
  ],
  de: [
    {
      question: 'Wie sollten verteilte Systeme Cron-Zeitzonen und die Sommerzeit behandeln?',
      answer: 'Konfigurieren Sie Server und Scheduler stets auf UTC. Bei der Zeitumstellung können Jobs sonst übersprungen oder doppelt ausgeführt werden. Falls lokale Zeiten zwingend sind, nutzen Sie explizite ZoneId-Parameter in Spring/Quartz statt der Host-Systemzeit.',
    },
    {
      question: 'Warum verlieren 64-Bit-Ganzzahlen beim JSON-Parsing in JavaScript an Präzision?',
      answer: 'JavaScript-Zahlen folgen dem IEEE 754-Standard mit einem sicheren Limit von 2^53 - 1. IDs über diesem Wert verlieren beim normalen JSON.parse ihre Genauigkeit. Der Branchenstandard besteht darin, 64-Bit-IDs in REST-APIs stets als Strings zu serialisieren.',
    },
    {
      question: 'Warum ist AST-basiertes Codemod-Refactoring dem Suchen-und-Ersetzen mit Regex überlegen?',
      answer: 'Regex operiert auf rohem Text und kann versehentlich Kommentare oder String-Literale umbenennen. AST-Tools analysieren die grammatikalische Baumstruktur des Codes und benennen ausschließlich Variablenbezeichner im gültigen Gültigkeitsbereich um.',
    },
  ],
  fr: [
    {
      question: 'Comment gérer les fuseaux horaires et le changement d\'heure saisonnier dans Cron ?',
      answer: 'La règle universelle consiste à configurer vos serveurs et planificateurs en UTC. Les passages à l\'heure d\'été ou d\'hiver peuvent provoquer des doublons ou omissions. Pour une planification locale, définissez un ZoneId explicite dans Spring ou Quartz.',
    },
    {
      question: 'Pourquoi les entiers 64 bits perdent-ils en précision lors du parsing JSON en JavaScript ?',
      answer: 'Les nombres JavaScript utilisent le format IEEE 754, limité aux entiers sécurisés jusqu\'à 2^53 - 1. Les identifiants de 64 bits sont donc tronqués par JSON.parse. La solution consiste à toujours les transmettre sous forme de chaînes de caractères (string).',
    },
    {
      question: 'Pourquoi le refactoring basé sur l\'AST est-il supérieur aux expressions régulières ?',
      answer: 'Les expressions régulières ne comprennent pas la portée du code et risquent de modifier par erreur des commentaires. Les codemods basés sur l\'AST manipulent l\'arbre syntaxique et ne renomment que les identifiants au bon endroit.',
    },
  ],
};

// 1. Update src/lib/featuresData.ts
const featuresPath = path.join(projectRoot, 'src/lib/featuresData.ts');
let featuresContent = fs.readFileSync(featuresPath, 'utf-8');

// For each locale, add the 3 extra questions to items if not already present
for (const [loc, extraItems] of Object.entries(extraFaqsByLocale)) {
  for (const item of extraItems) {
    if (!featuresContent.includes(item.question.slice(0, 20))) {
      // Find where faqData[loc].items ends and append
      const locKeyRegex = new RegExp(`(${loc}:\\s*\\{[\\s\\S]*?items:\\s*\\[)([\\s\\S]*?)(\\]\\s*,?\\s*\\})`);
      featuresContent = featuresContent.replace(locKeyRegex, (match, prefix, existingItems, suffix) => {
        const itemStr = `,\n      {\n        question: ${JSON.stringify(item.question)},\n        answer: ${JSON.stringify(item.answer)},\n      }`;
        return prefix + existingItems.trimEnd() + itemStr + '\n    ' + suffix;
      });
    }
  }
}
fs.writeFileSync(featuresPath, featuresContent, 'utf-8');
console.log('✓ Updated: src/lib/featuresData.ts (expanded to 8 FAQ questions per locale)');

// 2. Update scripts/ssg-data.js
const ssgPath = path.join(projectRoot, 'scripts/ssg-data.js');
let ssgContent = fs.readFileSync(ssgPath, 'utf-8');

for (const [loc, extraItems] of Object.entries(extraFaqsByLocale)) {
  for (const item of extraItems) {
    if (!ssgContent.includes(item.question.slice(0, 20))) {
      const locKeyRegex = new RegExp(`(ssgFaqByLocale\\s*=\\s*\\{[\\s\\S]*?${loc}:\\s*\\{[\\s\\S]*?items:\\s*\\[)([\\s\\S]*?)(\\]\\s*\\})`);
      ssgContent = ssgContent.replace(locKeyRegex, (match, prefix, existingItems, suffix) => {
        const itemStr = `,\n      {\n        question: ${JSON.stringify(item.question)},\n        answer: ${JSON.stringify(item.answer)}\n      }`;
        return prefix + existingItems.trimEnd() + itemStr + '\n    ' + suffix;
      });
    }
  }
}
fs.writeFileSync(ssgPath, ssgContent, 'utf-8');
console.log('✓ Updated: scripts/ssg-data.js (expanded to 8 FAQ questions per locale)');
