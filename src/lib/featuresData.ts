export interface HowToStep {
  step: string;
  title: string;
  desc: string;
}

export interface HowToSectionData {
  badge: string;
  title: string;
  subtitle: string;
  steps: HowToStep[];
}

export interface UseCaseItem {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  inputExample: string;
  outputExample: string;
  formatName: string;
}

export interface UseCasesSectionData {
  badge: string;
  title: string;
  subtitle: string;
  cases: UseCaseItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionData {
  badge: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export const howToData: Record<string, HowToSectionData> = {
  en: {
    badge: '3-Step Quickstart',
    title: 'How to Use DevText: 3-Step Instant Workflow',
    subtitle: 'Zero learning curve. Transform case formats, generate TypeScript types, and simulate cron schedules with client-side speed.',
    steps: [
      {
        step: '01',
        title: 'Paste or Type Source Text',
        desc: 'Insert raw strings, camelCase identifiers, multiline code, cron expressions, or JSON payloads into the editor.',
      },
      {
        step: '02',
        title: 'Select Desired Target Format',
        desc: 'Click any format: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, or JSON prettifier.',
      },
      {
        step: '03',
        title: '1-Click Copy & Instant Integration',
        desc: 'Copy formatted results instantly to your clipboard. No ads, no popups, zero data stored on any server.',
      },
    ],
  },
  zh: {
    badge: '3步极简上手',
    title: '如何高效使用 DevText：3 步极简操作流程',
    subtitle: '零学习成本。全浏览器本地秒级转换命名格式、生成 TypeScript 类型及模拟 Cron 调度。',
    steps: [
      {
        step: '01',
        title: '粘贴或输入源文本',
        desc: '在输入框中填入待处理的原始字符串、代码标识符、多行日志、Cron 表达式或 JSON 数据。',
      },
      {
        step: '02',
        title: '选择目标转换规范',
        desc: '点击对应的操作按钮：驼峰 camelCase、帕斯卡 PascalCase、下划线 snake_case、短横线 kebab-case 或 JSON 格式化。',
      },
      {
        step: '03',
        title: '一键复制并投产使用',
        desc: '转换结果实时呈现，一键复制至剪贴板，无弹窗打扰，数据 100% 停留本地，即刻粘贴至 IDE 编码。',
      },
    ],
  },
  es: {
    badge: 'Inicio rápido en 3 pasos',
    title: 'Cómo usar DevText: Flujo de trabajo instantáneo en 3 pasos',
    subtitle: 'Sin curva de aprendizaje. Transforme formatos de mayúsculas, genere interfaces TypeScript y simule cron localmente.',
    steps: [
      {
        step: '01',
        title: 'Pegar o escribir el texto de origen',
        desc: 'Introduzca su cadena de texto, identificadores camelCase, código multilínea, expresión cron o JSON en el editor.',
      },
      {
        step: '02',
        title: 'Seleccionar el formato de destino',
        desc: 'Haga clic en cualquier botón: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE o formateador JSON.',
      },
      {
        step: '03',
        title: 'Copiar con 1 clic e integrar',
        desc: 'Copie el resultado formateado al portapapeles al instante. Sin ventanas emergentes y con privacidad total.',
      },
    ],
  },
  ja: {
    badge: '3ステップ簡単ガイド',
    title: 'DevText の使い方：3ステップの即時ワークフロー',
    subtitle: '学習コストゼロ。大文字・小文字変換、TypeScript 型生成、Cron 式シミュレーションをローカルで即時実行。',
    steps: [
      {
        step: '01',
        title: 'ソーステキストを入力または貼り付け',
        desc: 'エディタに対象の文字列、識別子、複数行コード、Cron 式、または JSON データを入力または貼り付けます。',
      },
      {
        step: '02',
        title: '変換先の命名規則を選択',
        desc: 'ボタンを1クリック：camelCase、PascalCase、snake_case、kebab-case、CONSTANT_CASE、または JSON 整形。',
      },
      {
        step: '03',
        title: '1クリックでコピーして活用',
        desc: '変換結果をワンクリックでクリップボードにコピー。広告ポップアップなし、データ外部送信ゼロで安心。',
      },
    ],
  },
  de: {
    badge: '3-Schritte-Schnellstart',
    title: 'So nutzen Sie DevText: 3-Schritte-Sofort-Workflow',
    subtitle: 'Keine Lernkurve. Ändern Sie Textformate, generieren Sie TypeScript-Typen und simulieren Sie Cron-Zeitpläne blitzschnell.',
    steps: [
      {
        step: '01',
        title: 'Quelltext einfügen oder eingeben',
        desc: 'Geben Sie Ihre unformatierten Zeichenfolgen, camelCase-Bezeichner, mehrzeiligen Code, Cron-Ausdrücke oder JSON ein.',
      },
      {
        step: '02',
        title: 'Zielformat auswählen',
        desc: 'Klicken Sie auf das gewünschte Format: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE oder JSON.',
      },
      {
        step: '03',
        title: '1-Klick-Kopieren & Einbinden',
        desc: 'Kopieren Sie das formatierte Ergebnis mit einem Klick in die Zwischenablage. 100% lokal und ohne Popups.',
      },
    ],
  },
  fr: {
    badge: 'Démarrage rapide en 3 étapes',
    title: 'Comment utiliser DevText : Flux de travail instantané en 3 étapes',
    subtitle: 'Aucune courbe d’apprentissage. Modifiez la casse, générez des types TypeScript et simulez vos cron en local.',
    steps: [
      {
        step: '01',
        title: 'Coller ou saisir le texte source',
        desc: 'Insérez votre chaîne de caractères, identifiants camelCase, code multiligne, expression cron ou JSON.',
      },
      {
        step: '02',
        title: 'Sélectionner le format cible',
        desc: 'Cliquez sur le bouton de votre choix : camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE ou JSON.',
      },
      {
        step: '03',
        title: 'Copier en 1 clic et intégrer',
        desc: 'Copiez instantanément le résultat dans votre presse-papiers. Sans pop-up et 100% confidentiel.',
      },
    ],
  },
};

export const useCasesData: Record<string, UseCasesSectionData> = {
  en: {
    badge: 'Practical Engineering',
    title: 'Enterprise Engineering Use Cases',
    subtitle: 'How professional software engineers save hours every sprint using automated format standardizers.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. API Data Transfer Object Alignment',
        problem: 'Databases & Go/Python services return snake_case (e.g. user_account_id), while TypeScript React strictly requires camelCase (userAccountId).',
        solution: 'Instant 1-click conversion eliminates typo regressions across API boundaries.',
        inputExample: 'user_account_id: 1042',
        outputExample: 'userAccountId: 1042',
        formatName: 'camelCase',
      },
      {
        tag: 'SQL & Database ORMs',
        title: '2. SQL Schemas & ORM Entity Modeling',
        problem: 'Requirement sheets or spreadsheets use spaced headers (e.g. Order Created Date) unsuitable for relational database DDL.',
        solution: 'Instantly convert to order_created_date for PostgreSQL DDL, and OrderCreatedDate for Hibernate / Prisma entities.',
        inputExample: 'Order Created Date',
        outputExample: 'order_created_date',
        formatName: 'snake_case',
      },
      {
        tag: 'SEO & Microservices',
        title: '3. SEO Clean URL Slugs & Route Endpoints',
        problem: 'Google Search Guidelines strictly penalize underscores in URLs, requiring hyphen-separated kebab-case.',
        solution: 'Transform editorial blog headlines into clean, URL-encoded kebab-case slugs in milliseconds.',
        inputExample: 'Developer Guide To Clean Code',
        outputExample: 'developer-guide-to-clean-code',
        formatName: 'kebab-case',
      },
    ],
  },
  zh: {
    badge: '实战解决方案',
    title: '真实企业级工程使用场景与实战方案',
    subtitle: '专业工程师如何通过自动化文本与命名工具，在日常迭代中省下数小时的重复枯燥排版时间。',
    cases: [
      {
        tag: '前后端 DTO 联调',
        title: '1. API 接口数据传输对象（DTO）字段对齐',
        problem: '数据库与 Python/Go 微服务常返回下划线字段（如 user_account_id），而前端 React/Vue 的 TypeScript 规范强制要求小驼峰（userAccountId）。',
        solution: '一键批量互转，杜绝因手动改名引发的字段拼写失误与运行时 undefined 异常。',
        inputExample: 'user_account_id: 1042',
        outputExample: 'userAccountId: 1042',
        formatName: 'camelCase',
      },
      {
        tag: '数据库与 ORM 建模',
        title: '2. 数据库 SQL 建表与 ORM 实体双向映射',
        problem: '产品需求文档或 Excel 表头往往是带空格或杂乱英文（如 Order Created Date），无法直接作为数据库列名。',
        solution: '一键转为 order_created_date 用于 MySQL/PostgreSQL DDL，转为 OrderCreatedDate 供 Prisma/Hibernate 实体使用。',
        inputExample: 'Order Created Date',
        outputExample: 'order_created_date',
        formatName: 'snake_case',
      },
      {
        tag: 'SEO 与微服务路由',
        title: '3. SEO 友好 URL 路由与云原生微服务规范',
        problem: 'Google 官方搜索指南明确规定：URL 必须使用短横线分隔单词，严禁混用下划线或空格以保障搜索索引权重。',
        solution: '将文章标题或类目名一秒转换为标准的 URL Slug（如 developer-guide-to-clean-code），显著提升 SEO 排名。',
        inputExample: 'Developer Guide To Clean Code',
        outputExample: 'developer-guide-to-clean-code',
        formatName: 'kebab-case',
      },
    ],
  },
  es: {
    badge: 'Casos de uso reales',
    title: 'Casos de uso en ingeniería de software',
    subtitle: 'Cómo los ingenieros profesionales ahorran horas en cada sprint estandarizando nombres y datos.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. Mapeo de DTO entre Frontend y Backend',
        problem: 'Las bases de datos devuelven campos en snake_case (user_account_id), mientras que React/TypeScript exige camelCase (userAccountId).',
        solution: 'La conversión en 1 clic elimina errores tipográficos en las interfaces de comunicación.',
        inputExample: 'user_account_id: 1042',
        outputExample: 'userAccountId: 1042',
        formatName: 'camelCase',
      },
      {
        tag: 'Bases de datos y ORM',
        title: '2. Esquemas de Base de Datos SQL y Modelos ORM',
        problem: 'Hojas de Excel contienen encabezados con espacios (Order Created Date) incompatibles con SQL.',
        solution: 'Convierta al instante a order_created_date para PostgreSQL y a OrderCreatedDate para clases Prisma/Hibernate.',
        inputExample: 'Order Created Date',
        outputExample: 'order_created_date',
        formatName: 'snake_case',
      },
      {
        tag: 'SEO y Microservicios',
        title: '3. Slugs SEO para URLs y Rutas de Microservicios',
        problem: 'Google penaliza el uso de guiones bajos en URLs, exigiendo guiones medios (kebab-case).',
        solution: 'Transforme títulos de blogs en slugs limpios y optimizados para motores de búsqueda.',
        inputExample: 'Developer Guide To Clean Code',
        outputExample: 'developer-guide-to-clean-code',
        formatName: 'kebab-case',
      },
    ],
  },
  ja: {
    badge: '実践的ユースケース',
    title: '実践的な開発ユースケースとソリューション',
    subtitle: '命名規則とデータ構造の自動標準化により、日々の開発スプリントで何時間もの工数を削減。',
    cases: [
      {
        tag: 'フロント ↔ バック DTO',
        title: '1. API DTO フィールドの自動アライメント',
        problem: 'データベースや Go/Python API は snake_case（user_account_id）を返しますが、TypeScript/React は camelCase（userAccountId）を要求します。',
        solution: '1クリックで一括変換し、手動入力によるタイポや undefined エラーを完全に防ぎます。',
        inputExample: 'user_account_id: 1042',
        outputExample: 'userAccountId: 1042',
        formatName: 'camelCase',
      },
      {
        tag: 'SQL & ORM 定義',
        title: '2. SQL テーブル定義と ORM エンティティモデリング',
        problem: '要件定義書や Excel の列名は空白混じりの英語（Order Created Date）になりがちです。',
        solution: 'SQL 用の order_created_date や Prisma/Hibernate 用の OrderCreatedDate へ即時変換。',
        inputExample: 'Order Created Date',
        outputExample: 'order_created_date',
        formatName: 'snake_case',
      },
      {
        tag: 'SEO & マイクロサービス',
        title: '3. SEO フレンドリーな URL スラッグとルーティング',
        problem: 'Google 検索エンジンは URL 内の単語区切りにアンダースコアではなくハイフン（kebab-case）を推奨しています。',
        solution: '記事タイトルを即座に SEO 最適化された URL スラッグに変換します。',
        inputExample: 'Developer Guide To Clean Code',
        outputExample: 'developer-guide-to-clean-code',
        formatName: 'kebab-case',
      },
    ],
  },
  de: {
    badge: 'Praxis-Lösungen',
    title: 'Anwendungsfälle in der Softwareentwicklung',
    subtitle: 'Wie professionelle Entwickler jede Woche wertvolle Zeit bei der Code-Standardisierung sparen.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. API-DTO-Mapping zwischen Frontend und Backend',
        problem: 'Datenbanken liefern snake_case (user_account_id), während TypeScript camelCase (userAccountId) verlangt.',
        solution: '1-Klick-Konvertierung verhindert Flüchtigkeitsfehler an Schnittstellen.',
        inputExample: 'user_account_id: 1042',
        outputExample: 'userAccountId: 1042',
        formatName: 'camelCase',
      },
      {
        tag: 'SQL & ORM-Modelle',
        title: '2. SQL-Datenbankschemata & ORM-Modellierung',
        problem: 'Excel-Anforderungsdokumente nutzen Bezeichnungen mit Leerzeichen (Order Created Date).',
        solution: 'Wandeln Sie diese sofort in order_created_date für SQL und OrderCreatedDate für ORM-Entities um.',
        inputExample: 'Order Created Date',
        outputExample: 'order_created_date',
        formatName: 'snake_case',
      },
      {
        tag: 'SEO & Microservices',
        title: '3. SEO-freundliche URL-Slugs & API-Endpunkte',
        problem: 'Google bevorzugt Bindestriche (kebab-case) anstelle von Unterstrichen für die Web-Indexierung.',
        solution: 'Konvertieren Sie Beitragstitel sofort in suchmaschinenoptimierte Slugs.',
        inputExample: 'Developer Guide To Clean Code',
        outputExample: 'developer-guide-to-clean-code',
        formatName: 'kebab-case',
      },
    ],
  },
  fr: {
    badge: 'Cas d’usage réels',
    title: 'Cas d\'usage en ingénierie logicielle',
    subtitle: 'Comment les développeurs gagnent un temps précieux chaque sprint grâce à la standardisation.',
    cases: [
      {
        tag: 'Frontend ↔ Backend DTO',
        title: '1. Alignement DTO entre API et Frontend',
        problem: 'Les bases de données renvoient du snake_case (user_account_id) alors que TypeScript exige du camelCase (userAccountId).',
        solution: 'Conversion instantanée en 1 clic éliminant tout risque de faute de frappe.',
        inputExample: 'user_account_id: 1042',
        outputExample: 'userAccountId: 1042',
        formatName: 'camelCase',
      },
      {
        tag: 'SQL & ORM Modèles',
        title: '2. Schémas SQL et Modélisation ORM',
        problem: 'Les fichiers Excel contiennent des en-têtes avec espaces (Order Created Date) incompatibles avec SQL.',
        solution: 'Convertissez immédiatement vers order_created_date pour SQL et OrderCreatedDate pour Prisma/Hibernate.',
        inputExample: 'Order Created Date',
        outputExample: 'order_created_date',
        formatName: 'snake_case',
      },
      {
        tag: 'SEO & Microservices',
        title: '3. Slugs d\'URL SEO et Routage d\'API',
        problem: 'Google pénalise les tirets bas dans les URLs et exige des tirets (kebab-case).',
        solution: 'Transformez vos titres en slugs parfaitement indexables par les moteurs de recherche.',
        inputExample: 'Developer Guide To Clean Code',
        outputExample: 'developer-guide-to-clean-code',
        formatName: 'kebab-case',
      },
    ],
  },
};

export const faqData: Record<string, FaqSectionData> = {
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
    ],
  },
  ja: {
    badge: 'よくあるご質問',
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
    ],
  },
};
