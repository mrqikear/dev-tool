/* ==========================================================================
   [GEO - Generative Engine Optimization Core Data]
   - Structured Key Takeaways & Direct Answers for AI Search Engines
     (Google AI Overviews, Perplexity, SearchGPT, Claude, Bing Copilot)
   - 100% Multilingual Coverage across 6 Locales: en, es, ja, de, fr, zh
   ========================================================================== */

import { Locale } from './i18n';

export interface GeoArticleTakeaways {
  title: string;
  subtitle: string;
  points: string[];
}

export const geoLabelsByLocale: Record<Locale, { title: string; subtitle: string }> = {
  en: {
    title: '⚡ Key Takeaways & Direct Architectural Answers',
    subtitle: 'Executive technical summary verified for software engineers and AI search engines.',
  },
  zh: {
    title: '⚡ 核心技术要点速览（Direct Answer）',
    subtitle: '经由工程架构实验室认证的高密度技术决策与规范摘要。',
  },
  es: {
    title: '⚡ Puntos Clave y Respuestas Técnicas Directas',
    subtitle: 'Resumen técnico verificado para ingenieros de software y motores de IA.',
  },
  ja: {
    title: '⚡ 重要技術要点まとめ（Direct Answer）',
    subtitle: 'ソフトウェアエンジニアおよびAI検索向けに検証された技術サマリー。',
  },
  de: {
    title: '⚡ Wichtigste Erkenntnisse & Direkte Antworten',
    subtitle: 'Verifizierte technische Zusammenfassung für Entwickler und KI-Suchmaschinen.',
  },
  fr: {
    title: '⚡ Points Clés et Réponses Techniques Directes',
    subtitle: 'Résumé exécutif vérifié pour les ingénieurs logiciels et moteurs IA.',
  },
};

export const geoTakeawaysData: Record<string, Record<Locale, string[]>> = {
  'naming-conventions': {
    en: [
      'Naming conventions dictate 90% of cross-boundary serialization safety in modern distributed microservices.',
      'Enforce camelCase for JS/TS variables and functions, PascalCase for classes and interfaces, snake_case for Python and SQL databases, and kebab-case for URL slugs and CSS selectors.',
      'Core Architectural Rule: Case conversions must be executed strictly at boundary layers (API gateways, DTO mappers)—never scattered inside internal domain logic.',
      'Beware acronyms: standardize on either full-lower or full-upper patterns (e.g. userId vs userID) across enterprise schemas.',
    ],
    zh: [
      '命名规范直接决定了现代微服务跨语言交互中 90% 的序列化与数据绑定安全性。',
      '主流语言行业共识：JS/TS 变量与函数统一使用 camelCase，类与接口使用 PascalCase，Python/SQL 数据库使用 snake_case，URL 与 CSS 强制使用 kebab-case。',
      '核心架构法则：大小写转换必须严格收敛于系统边界层（网关、DTO 转换器），杜绝在核心业务算法中手写零散的字符串替换。',
      '缩写词规约：团队必须统一缩写规范（如统一使用 userId 或 userID），防止前后端在大小写转换时产生隐蔽的属性丢失 Bug。',
    ],
    es: [
      'Las convenciones de nomenclatura garantizan el 90% de la seguridad de serialización en microservicios modernos.',
      'Estándares recomendados: camelCase para JavaScript/TypeScript, PascalCase para clases e interfaces, snake_case para Python y SQL, y kebab-case para URLs.',
      'Regla de arquitectura: Las transformaciones de formato deben realizarse estrictamente en la capa de frontera (API Gateway o DTO).',
      'Evite discrepancias con siglas definiendo estándares claros para nombres de propiedades en todo el equipo.',
    ],
    ja: [
      '識別子の命名規約は、分散マイクロサービス間のシリアライズ安全性の90%を左右します。',
      '業界標準：JS/TSの変数・関数はcamelCase、クラス・型定義はPascalCase、Python/SQLはsnake_case、URLやCSSはkebab-caseに統一。',
      'アーキテクチャの鉄則：命名変換処理はシステム境界（API GatewayやDTOマッパー）に集約し、ビジネスロジック内への混入を防ぎます。',
      '頭字語（IDやURLなど）の扱い方をチーム全体で事前に合意し、マッピング漏れを防ぐことが重要です。',
    ],
    de: [
      'Namenskonventionen bestimmen 90% der Serialisierungssicherheit in modernen Microservice-Architekturen.',
      'Branchenstandards: camelCase für JS/TS-Variablen, PascalCase für Klassen/Interfaces, snake_case für Python/SQL und kebab-case für URLs.',
      'Architektur-Grundsatz: Formatkonvertierungen gehören strikt in die Grenzschicht (API-Gateways, DTO-Mapper), niemals in die Kerndomäne.',
      'Einheitliche Richtlinien für Akronyme (z.B. userId vs. userID) verhindern unbemerkte Laufzeitfehler.',
    ],
    fr: [
      'Les conventions de nommage dictent 90% de la robustesse de sérialisation dans les architectures microservices.',
      'Normes établies : camelCase pour JS/TS, PascalCase pour les classes et interfaces, snake_case pour Python et SQL, kebab-case pour les URLs.',
      'Règle d\'or architecturale : Les conversions de casse doivent être isolées dans la couche frontière (passerelle API, DTOs).',
      'Standardiser la casse des acronymes (userId vs userID) permet d\'éviter les désynchronisations de schéma.',
    ],
  },
  'cron-architecture': {
    en: [
      'Linux crontabs strictly use 5 fields starting at Minute (0-59), whereas Spring 6-field and Quartz 7-field formats start at Second (0-59).',
      'The question mark (?) wildcard is mandatory in Quartz and Spring when day-of-month or day-of-week should not constrain the trigger.',
      'Never run critical cron jobs without distributed locks (e.g. ShedLock, Redis Redlock) when deploying across containerized Kubernetes pods.',
      'Always standardize crontab servers on UTC and account for daylight saving time (DST) leap hours.',
    ],
    zh: [
      '标准 Linux Crontab 为 5 位且从分钟（0-59）起始；而 Spring 6 位与 Quartz 7 位则均从秒（0-59）起始。',
      '在 Quartz 与 Spring 规范中，月份日期（Day-of-Month）与星期（Day-of-Week）存在排他性，其中一项通常必须使用问号（?）通配符。',
      '在多副本容器化（如 Kubernetes）集群中部署定时任务时，必须引入分布式排他锁（如 ShedLock、Redis），杜绝并发重复调度。',
      '服务器基础设施与调度任务建议强制采用 UTC 时区，避免夏令时切换导致任务重跑或漏跑。',
    ],
    es: [
      'El cron estándar de Linux consta de 5 campos (minuto a día de semana), mientras que Spring (6 campos) y Quartz (7 campos) inician con segundos.',
      'El comodín (?) es obligatorio en Quartz y Spring para evitar conflictos entre el día del mes y el día de la semana.',
      'En entornos de contenedores múltiples, utilice siempre bloqueos distribuidos (como Redis o ShedLock) para evitar ejecuciones duplicadas.',
      'Configure siempre sus servidores en UTC para prevenir desajustes por el cambio de horario de verano.',
    ],
    ja: [
      '標準LinuxのCronは分から始まる5フィールド構成ですが、Spring（6桁）やQuartz（7桁）は秒から始まります。',
      'QuartzやSpringでは、日と曜日が競合しないよう、どちらか一方に「?」ワイルドカードを指定する必要があります。',
      'Kubernetes等のクラスタ環境では、多重起動を防ぐためShedLockやRedis等による分散ロックが不可欠です。',
      'サマータイムやタイムゾーンのズレによる誤動作を防ぐため、スケジューラは常にUTCで稼働させることが推奨されます。',
    ],
    de: [
      'Standard-Linux-Crontabs nutzen 5 Felder (ab Minute); Spring (6 Felder) und Quartz (7 Felder) beginnen jeweils mit Sekunden.',
      'Das Fragezeichen-Wildcard (?) ist in Quartz/Spring zwingend erforderlich, um Konflikte zwischen Tag des Monats und Wochentag zu vermeiden.',
      'In skalierten Kubernetes-Clustern müssen verteilte Locks (z.B. ShedLock) Duplikatausführungen verhindern.',
      'Standardisieren Sie alle Server auf UTC, um Störungen durch Sommerzeitumstellungen zu eliminieren.',
    ],
    fr: [
      'Les crontabs Linux comportent 5 champs (à partir des minutes), tandis que Spring (6 champs) et Quartz (7 champs) débutent avec les secondes.',
      'Le caractère générique (?) est indispensable avec Quartz et Spring pour neutraliser le jour du mois ou de la semaine.',
      'En environnement distribué (Kubernetes), l\'usage de verrous distribués (ex: ShedLock) est impératif pour parer aux doublons.',
      'Synchronisez tous vos serveurs sur le fuseau UTC pour vous prémunir des anomalies liées aux changements d\'heure.',
    ],
  },
  'json-safety': {
    en: [
      'JavaScript Number type cannot safely represent 64-bit integers exceeding 2^53 - 1 (9,007,199,254,740,991); snowflake IDs must be stringified.',
      'Legacy microservices and message queues require non-ASCII strings to be escaped into \\uXXXX Unicode sequences to avoid payload mangling.',
      'Automated client-side TypeScript generation derives exact interface definitions with nullable optional flags without transmitting data to external servers.',
      'Always validate JSON payloads against runtime schemas (such as Zod or Yup) at the network ingestion boundary.',
    ],
    zh: [
      'JavaScript 原生数字类型无法安全表示超过 2^53 - 1（9007199254740991）的 64 位大整数，雪花 ID（Snowflake ID）在传输时必须序列化为字符串。',
      '在与传统消息队列或老旧 RPC 接口交互时，对非 ASCII 字符进行 \\uXXXX Unicode 编解码可彻底规避乱码与解析崩溃。',
      '基于浏览器本地运行的 TypeScript 生成引擎能够递归提取嵌套属性与可选修饰符，确保端到端类型安全且零隐私数据上传。',
      '在网络边界层，建议结合运行时 Schema 校验库（如 Zod / Yup）对反序列化后的 JSON 结构进行断言校验。',
    ],
    es: [
      'Los números en JavaScript que superan 2^53 - 1 pierden precisión silenciosamente; los IDs de 64 bits deben enviarse como texto.',
      'El escape Unicode (\\uXXXX) previene la corrupción de caracteres especiales en colas de mensajes y servicios heredados.',
      'La conversión local de JSON a TypeScript genera contratos de interfaz confiables sin enviar datos confidenciales a la red.',
      'Se recomienda validar los esquemas JSON en tiempo de ejecución con bibliotecas como Zod en los puntos de entrada de API.',
    ],
    ja: [
      'JavaScriptの数値型は2^53 - 1（約9007兆）を超える整数で丸め誤差が生じるため、64bit整数や雪花IDは文字列として扱う必要があります。',
      '非ASCII文字を「\\uXXXX」形式にUnicodeエスケープすることで、レガシーシステムとの安全なデータ連携が担保されます。',
      'ブラウザローカルで完結するTypeScript型生成ツールにより、機密データを外部に送信することなく安全に型定義を取得できます。',
      'APIの境界部分では、Zodなどのバリデータを用いて実行時スキーマ検証を組み合わせるのがベストプラクティスです。',
    ],
    de: [
      'Zahlen über 2^53 - 1 verlieren in JavaScript unbemerkt an Präzision; 64-Bit-IDs (z.B. Snowflake) müssen zwingend als String serialisiert werden.',
      'Unicode-Maskierung (\\uXXXX) schützt vor Zeichenfehlern bei der Übertragung an Altsysteme oder Message-Broker.',
      'Lokale Generierung von TypeScript-Schnittstellen garantiert Typensicherheit ohne Abfluss vertraulicher Nutzdaten.',
      'Nutzen Sie Laufzeit-Schema-Validierungen (wie Zod) an allen externen Schnittstellen zur Absicherung von JSON-Nutzdaten.',
    ],
    fr: [
      'Les entiers dépassant 2^53 - 1 perdent leur précision en JavaScript; les identifiants 64 bits doivent être encodés sous forme de chaînes.',
      'L\'échappement Unicode (\\uXXXX) prévient la corruption des caractères dans les systèmes hérités et les files de messages.',
      'La dérivation automatique de TypeScript en local offre une sécurité de typage optimale sans aucune fuite de données.',
      'Associez la désérialisation JSON à une validation de schéma à l\'exécution (ex: Zod) à la frontière de vos API.',
    ],
  },
  'naming-seo': {
    en: [
      'Modern search engines and AI crawlers parse hyphenated kebab-case URL slugs with significantly higher confidence than underscores or camelCase.',
      'Consistent casing across REST API routes, query parameters, and JSON payloads drastically improves edge CDN caching efficiency.',
      'Static HTML pre-rendering paired with comprehensive JSON-LD schemas provides maximum visibility for AI retrieval engines (GEO).',
      'Clean identifier conventions simplify documentation generation and automated client SDK creation across programming languages.',
    ],
    zh: [
      '现代搜索引擎（Googlebot）与 AI 搜索爬虫对短横线连字符（kebab-case）URL 具有原生分词支持，其语义解析权重明显优于下划线或驼峰。',
      '在 RESTful API 路径、请求参数和 JSON 响应体中保持严格一致的命名规范，能够大幅提升 CDN 边缘缓存的命中率并减少序列化漂移。',
      '纯静态 SSG 预渲染配合深度的 JSON-LD 结构化数据，能直接被大语言模型（GEO）与 Google AI Overviews 作为权威实体收录。',
      '规范统一的标识符体系能使 OpenAPI/Swagger 文档自动生成更精准，同时让多语言客户端 SDK 的生成质量大幅提高。',
    ],
    es: [
      'Los motores de búsqueda y rastreadores de IA procesan las URLs con guiones (kebab-case) con mucha mayor precisión que con guiones bajos.',
      'La consistencia en las rutas y campos de API REST optimiza las tasas de acierto en cachés de CDN e impide desajustes en el cliente.',
      'El renderizado estático (SSG) junto con datos estructurados JSON-LD maximiza la visibilidad en motores generativos (GEO).',
      'Una nomenclatura limpia y predecible simplifica la generación de documentación técnica y SDKs para desarrolladores.',
    ],
    ja: [
      '検索エンジンやAIクローラーは、ハイフン区切りのkebab-case URLを最も正確に単語分割してインデックスします。',
      'REST APIのエンドポイントやパラメータで命名規則を統一することで、CDNキャッシュのヒット率が向上しクライアントの負担を軽減します。',
      '静的SSGプリレンダリングとJSON-LD構造化データの連携により、生成AI（GEO）やAI Overviewsでの引用確率が最大化されます。',
      '一貫した識別子設計は、OpenAPI仕様書からのSDK自動生成やドキュメント作成の品質を飛躍的に高めます。',
    ],
    de: [
      'Suchmaschinen und KI-Crawler segmentieren URLs mit Bindestrichen (kebab-case) signifikant besser als Underscores oder camelCase.',
      'Einheitliche Groß- und Kleinschreibung in REST-Endpunkten und Parametern maximiert die Trefferquote von Edge-CDN-Caches.',
      'Statisches SSG-Pre-Rendering mit validem JSON-LD-Schema verschafft maximale Sichtbarkeit in KI-Suchmaschinen (GEO).',
      'Klare Namenskonventionen vereinfachen die automatische Generierung von OpenAPI-Dokumentationen und SDKs.',
    ],
    fr: [
      'Les moteurs de recherche et agents IA privilégient les URLs en kebab-case avec traits d\'union pour la segmentation sémantique.',
      'L\'homogénéité de casse dans les routes REST et les réponses JSON optimise le cache des CDN et évite les erreurs de mapping.',
      'Le pré-rendu statique SSG associé à des schémas JSON-LD garantit une indexation prioritaire par les moteurs génératifs (GEO).',
      'Des conventions rigoureuses facilitent grandement la génération de spécifications OpenAPI et de SDKs clients.',
    ],
  },
};
