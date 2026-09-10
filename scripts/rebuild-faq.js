import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const fullFaqByLocale = {
  en: {
    badge: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions (FAQ)',
    subtitle: 'Answers to common security, privacy, performance, and engineering questions.',
    items: [
      {
        question: 'Is my data safe? Does any text or code get uploaded to your servers?',
        answer: 'No. DevText operates 100% inside your browser using modern WebAssembly and JavaScript engines. Zero characters, passwords, or code snippets ever leave your local machine or touch remote servers. It is completely safe for proprietary enterprise source code and confidential documents.',
      },
      {
        question: 'Can this tool handle huge files with tens of thousands of lines without freezing?',
        answer: 'Yes. Our text processing engine uses compiled regex patterns and chunked streaming string manipulation, capable of formatting 50,000+ lines in under 50 milliseconds without blocking the browser main thread.',
      },
      {
        question: 'Does it support Unicode accents, international characters, and Chinese text?',
        answer: 'Yes. DevText fully adheres to Unicode Standard Annex #31 and ECMAScript Unicode property escapes (\\p{L}). Accents in Spanish, German umlauts (ä, ö, ü), French cedillas (ç), and CJK ideographs are safely preserved without corruption.',
      },
      {
        question: 'What is the official difference between camelCase and PascalCase?',
        answer: 'Both use capitalized internal words, but camelCase starts with a lowercase letter (userProfile), commonly used for variables and functions in JavaScript. PascalCase starts with an uppercase letter (UserProfile), mandatory for class names, React components, and TypeScript types.',
      },
      {
        question: 'Why does Google recommend kebab-case for URL structure?',
        answer: 'Google\'s official SEO guidelines specifically state that hyphens (-) are treated as word separators, whereas underscores (_) join words together. A URL like /user-profile is indexed as "user" and "profile", whereas /user_profile may be treated as a single unsegmented term.',
      },
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
  },
  zh: {
    badge: '技术解答',
    title: '常见问题解答 (FAQ)',
    subtitle: '关于数据安全、本地运算隐私、大文件性能与工程规范的深度解答。',
    items: [
      {
        question: '我的数据安全吗？会有任何文本被上传到远程服务器吗？',
        answer: '绝对安全。DevText 采用 100% 纯客户端浏览器计算引擎。您的任何文本、密码或公司商业代码绝不会上传至任何远程服务器，亦不保存任何服务器日志。断网离线状态下亦可完美运行，完全满足企业机密代码安全合规审计。',
      },
      {
        question: '工具能处理大文本或几万行的代码吗？会卡死浏览器吗？',
        answer: '完全可以。转换引擎采用预编译正则优化与流式字符串切分算法，能够轻松在 50 毫秒内完成数万行代码或大篇幅日志的格式转换，杜绝浏览器主线程卡顿与崩溃。',
      },
      {
        question: '支持中文字符、西语重音符号、德语变音等特殊字符吗？',
        answer: '完全支持。转换算法严格遵循 Unicode Standard Annex #31 规范与 ECMAScript Unicode 属性转义（\\p{L}）。无论是西语重音符、德语变音符号（ä, ö, ü）、法语软音符（ç）还是中日韩汉字，都能被精准识别并妥善保留，绝无字符乱码。',
      },
      {
        question: 'camelCase（小驼峰）与 PascalCase（大驼峰）的标准区别是什么？',
        answer: '两者的核心区别在于首字母大小写：camelCase（小驼峰）首字母必须小写（如 userProfile），广泛用于 JS/TS 变量与函数；PascalCase（大驼峰）首字母必须大写（如 UserProfile），是 React 组件、TypeScript 接口与 Java/C# 类名的强制标准。',
      },
      {
        question: '为什么 Google SEO 官方强烈推荐使用 kebab-case（短横线）URL？',
        answer: 'Google 官方搜索中心 SEO 指南明确指出：搜索引擎将连字符（- / kebab-case）识别为标准的词间分隔符，而将下划线（_）视为同一个复合词。例如 /user-profile 会被正确索引为 "user" 和 "profile" 两个独立关键词，而 /user_profile 会被视为不可分割的整体，降低搜索命中率。',
      },
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
  },
  es: {
    badge: 'Preguntas Frecuentes',
    title: 'Preguntas Frecuentes (FAQ)',
    subtitle: 'Respuestas a preguntas comunes sobre seguridad, rendimiento y privacidad.',
    items: [
      {
        question: '¿Están seguros mis datos? ¿Se sube texto a servidores remotos?',
        answer: 'Absolutamente seguro. DevText funciona 100% en su navegador local. Ningún texto, contraseña o fragmento de código confidencial se envía a servidores externos ni se almacena en la nube.',
      },
      {
        question: '¿Puede esta herramienta procesar archivos grandes sin congelar la pantalla?',
        answer: 'Sí. Nuestro motor de procesamiento utiliza expresiones regulares optimizadas capaces de formatear más de 50.000 líneas en menos de 50 milisegundos sin bloquear el hilo principal del navegador.',
      },
      {
        question: '¿Admite acentos, diéresis y caracteres internacionales?',
        answer: 'Sí. Soporta completamente caracteres internacionales, acentos del español, diéresis del alemán (ä, ö, ü) y caracteres asiáticos con total fidelidad al estándar Unicode.',
      },
      {
        question: '¿Cuál es la diferencia oficial entre camelCase y PascalCase?',
        answer: 'La diferencia es la primera letra: camelCase comienza con minúscula (userProfile, para variables JS), mientras que PascalCase comienza con mayúscula (UserProfile, para clases y componentes React).',
      },
      {
        question: '¿Por qué Google recomienda kebab-case para la estructura de URLs?',
        answer: 'Las directrices oficiales de Google indican que los guiones (-) se interpretan como separadores de palabras, mientras que los guiones bajos (_) unen las palabras, reduciendo la eficacia SEO.',
      },
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
  },
  ja: {
    badge: 'よくある質問',
    title: 'よくある質問 (FAQ)',
    subtitle: 'セキュリティ、プライバシー、大容量テキスト処理に関する回答。',
    items: [
      {
        question: 'データは安全ですか？サーバーに入力内容が送信されますか？',
        answer: '完全に安全です。DevText は 100% ブラウザ内で動作し、入力されたコードや機密テキストが外部サーバーへ送信されることは一切ありません。オフライン環境でも完全動作します。',
      },
      {
        question: '数万行規模の大きなテキストでもフリーズせず処理できますか？',
        answer: 'はい。最適化された正規表現とメモリ効率の高い文字列処理により、数万行規模のテキストやログも 50 ミリ秒以内に高速処理し、ブラウザの快適性を維持します。',
      },
      {
        question: '日本語の漢字やアクセント記号などの特殊文字に対応していますか？',
        answer: 'はい。Unicode 規格に完全準拠しており、日本語の漢字・ひらがな・カタカナはもちろん、欧州言語のアクセント記号も文字化けせず正確に処理されます。',
      },
      {
        question: 'camelCase と PascalCase の使い分けのルールは何ですか？',
        answer: '先頭文字の大文字・小文字が異なります。camelCase は小文字で始まり（userProfile、変数や関数用）、PascalCase は大文字で始まります（UserProfile、React コンポーネントやクラス用）。',
      },
      {
        question: 'なぜ Google SEO では kebab-case（ハイフン区切り）が推奨されるのですか？',
        answer: 'Google 検索アルゴリズムは、ハイフン（-）を単語の区切りとして認識しますが、アンダースコア（_）は1つの結合された単語として認識するため、kebab-case の方が SEO 的に有利です。',
      },
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
  },
  de: {
    badge: 'Häufige Fragen',
    title: 'Häufig gestellte Fragen (FAQ)',
    subtitle: 'Antworten auf häufige Fragen zu Datenschutz, Performance und Konventionen.',
    items: [
      {
        question: 'Sind meine Daten sicher? Werden Texte an Server übertragen?',
        answer: 'Absolut sicher. DevText läuft zu 100% lokal in Ihrem Browser. Es werden keinerlei Daten, Passwörter oder Code-Snippets an externe Server übertragen oder protokolliert.',
      },
      {
        question: 'Kann das Tool auch große Dateien mit zehntausenden Zeilen verarbeiten?',
        answer: 'Ja. Dank optimierter Regex-Engines werden auch große Texte mit über 50.000 Zeilen in unter 50 Millisekunden ohne Verzögerung verarbeitet.',
      },
      {
        question: 'Werden deutsche Umlaute und Sonderzeichen unterstützt?',
        answer: 'Ja. Volle Unterstützung für Unicode-Zeichen, deutsche Umlaute (ä, ö, ü, ß) und internationale Schriftzeichen ohne Formatierungsverlust.',
      },
      {
        question: 'Was ist der offizielle Unterschied zwischen camelCase und PascalCase?',
        answer: 'Der Unterschied liegt beim ersten Buchstaben: camelCase beginnt klein (userProfile für Variablen), PascalCase beginnt groß (UserProfile für Klassen und React-Komponenten).',
      },
      {
        question: 'Warum empfiehlt Google kebab-case für URL-Strukturen?',
        answer: 'Google wertet Bindestriche (-) als Worttrenner, während Unterstriche (_) Wörter verbinden. URLs im kebab-case erzielen daher nachweislich bessere SEO-Rankings.',
      },
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
  },
  fr: {
    badge: 'Questions Fréquentes',
    title: 'Foire Aux Questions (FAQ)',
    subtitle: 'Réponses aux questions fréquentes sur la confidentialité et les performances.',
    items: [
      {
        question: 'Mes données sont-elles sécurisées ? Des textes sont-ils envoyés sur des serveurs ?',
        answer: 'Totalement sécurisé. DevText s\'exécute à 100% dans votre navigateur. Aucune donnée ou ligne de code n\'est envoyée vers un serveur externe ni enregistrée.',
      },
      {
        question: 'L\'outil peut-il traiter de très grands textes sans bloquer le navigateur ?',
        answer: 'Oui. Grâce à des expressions régulières optimisées, notre outil traite plus de 50 000 lignes en moins de 50 ms sans figer votre navigateur.',
      },
      {
        question: 'Les caractères accentués et caractères internationaux sont-ils pris en charge ?',
        answer: 'Oui. Prise en charge intégrale des caractères accentués français (é, è, ç, œ) et de la norme internationale Unicode sans altération.',
      },
      {
        question: 'Quelle est la différence entre camelCase et PascalCase ?',
        answer: 'La différence réside dans la première lettre : camelCase commence par une minuscule (userProfile), tandis que PascalCase débute par une majuscule (UserProfile pour les classes et composants).',
      },
      {
        question: 'Pourquoi Google recommande-t-il le kebab-case pour les URLs ?',
        answer: 'Google traite les tirets (-) comme des séparateurs de mots, tandis que les tirets bas (_) lient les termes entre eux, ce qui nuit au référencement naturel.',
      },
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
  },
};

// 1. Rewrite featuresData.ts
const featuresPath = path.join(projectRoot, 'src/lib/featuresData.ts');
const featuresOld = fs.readFileSync(featuresPath, 'utf-8');
const faqDataIdx = featuresOld.indexOf('export const faqData:');
if (faqDataIdx !== -1) {
  const prefix = featuresOld.slice(0, faqDataIdx);
  const newFeaturesContent = `${prefix}export const faqData: Record<string, FaqSectionData> = ${JSON.stringify(fullFaqByLocale, null, 2)};\n`;
  fs.writeFileSync(featuresPath, newFeaturesContent, 'utf-8');
  console.log('✓ Replaced: src/lib/featuresData.ts with 8 clean FAQ questions per locale');
}

// 2. Rewrite scripts/ssg-data.js
const ssgPath = path.join(projectRoot, 'scripts/ssg-data.js');
const ssgOld = fs.readFileSync(ssgPath, 'utf-8');
const ssgFaqIdx = ssgOld.indexOf('export const ssgFaqByLocale =');
if (ssgFaqIdx !== -1) {
  const prefix = ssgOld.slice(0, ssgFaqIdx);
  // Prepare ssgFaq object (without badge)
  const ssgFaqObj = {};
  for (const [loc, data] of Object.entries(fullFaqByLocale)) {
    ssgFaqObj[loc] = {
      title: data.title,
      subtitle: data.subtitle,
      items: data.items,
    };
  }
  const newSsgContent = `${prefix}export const ssgFaqByLocale = ${JSON.stringify(ssgFaqObj, null, 2)};\n`;
  fs.writeFileSync(ssgPath, newSsgContent, 'utf-8');
  console.log('✓ Replaced: scripts/ssg-data.js with 8 clean FAQ questions per locale');
}
