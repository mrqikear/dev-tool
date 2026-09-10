import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 4 New Articles across all 6 languages (en, zh, es, ja, de, fr)
const newArticlesByLocale = {
  en: [
    {
      id: 'kebab-vs-snake',
      slug: 'kebab-case-vs-snake-case-database-and-url-best-practices',
      category: 'Database & Routing',
      readTime: '7 min read',
      updatedDate: 'September 2026',
      title: 'Kebab-Case vs Snake_Case: Architectural Trade-Offs in Database Schemas and Modern URL Routing',
      summary: 'An authoritative engineering comparison between hyphen-separated and underscore-separated naming conventions across SQL databases, RESTful URLs, cloud infrastructure, and search engine word segmentation algorithms.',
      sections: [
        {
          heading: '1. Syntax Mechanics: Word Boundary Parsing in Compilers & Crawlers',
          paragraphs: [
            'In modern distributed systems, the distinction between a hyphen (-) and an underscore (_) is not purely aesthetic—it directly dictates how parsers, database engines, and search crawlers segment compound words.',
            'Search engine crawlers (such as Googlebot and Bingbot) treat hyphens (kebab-case) as explicit word delimiters (e.g. "user-profile" tokenizes into "user" and "profile"). Conversely, underscores (snake_case) are traditionally parsed as alphanumeric connectors (e.g. "user_profile" is treated as a single undivided token).',
            'Therefore, adopting kebab-case for URL path segments and REST resources is the industry standard for maximum indexing accuracy and search visibility.',
          ],
          callout: {
            type: 'tip',
            title: 'Pro Tip: URL Delimiter Standard',
            text: 'Official Google Search Central documentation explicitly mandates hyphens (-) over underscores (_) for query tokenization and route semantics.',
          },
        },
        {
          heading: '2. Database Schema Conventions: Why SQL Favors Snake_Case',
          paragraphs: [
            'While kebab-case excels in web routing, it creates severe grammatical ambiguity inside relational SQL engines (PostgreSQL, MySQL, SQLite). Because the hyphen operator doubles as the subtraction symbol (-), referencing kebab-case columns in SQL queries requires mandatory quote escaping (e.g. "SELECT `user-first-name` FROM users").',
            'Failure to escape hyphens triggers immediate SQL syntax errors, as the query planner interprets the identifier as an arithmetic subtraction operation ("user minus first minus name").',
            'Consequently, production database schemas universally enforce snake_case (e.g. "user_first_name") for all table names, column definitions, and index identifiers.',
          ],
          codeBlock: {
            lang: 'sql',
            title: 'sql-schema-standards.sql',
            code: `-- Standard SQL naming convention: snake_case column identifiers
CREATE TABLE user_account_records (
    account_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    billing_status_code VARCHAR(32) DEFAULT 'active_trial'
);

-- Creating composite index using snake_case
CREATE INDEX idx_user_account_lookup 
ON user_account_records (first_name, billing_status_code);`,
          },
        },
        {
          heading: '3. Boundary Transformation: The ORM and DTO Bridge',
          paragraphs: [
            'High-velocity software teams reconcile these competing requirements by adopting clear serialization boundaries: SQL columns use snake_case, TypeScript domain entities use camelCase, and external REST API endpoints use kebab-case.',
            'Automatic Object-Relational Mapping (ORM) interceptors and serialization libraries (like TypeORM, Prisma, or Jackson) handle bidirectional conversion at the network boundary, ensuring domain purity.',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'boundary-mapping.ts',
            code: `// Domain Entity (TypeScript camelCase)
interface UserProfileDto {
  accountId: string;
  firstName: string;
  billingStatusCode: string;
}

// REST Route Definition (Web kebab-case)
app.get('/v1/user-account-records/:accountId', async (req, res) => {
  // DB Query returns snake_case rows, mapped directly to camelCase DTO
  const record = await db.query('SELECT * FROM user_account_records WHERE account_id = $1', [req.params.accountId]);
  res.json(mapToCamelCase(record));
});`,
          },
        },
      ],
    },
    {
      id: 'code-refactoring',
      slug: 'enterprise-code-refactoring-and-identifier-standardization',
      category: 'Engineering Practice',
      readTime: '8 min read',
      updatedDate: 'September 2026',
      title: 'Enterprise Code Refactoring: Automating Identifier Standardization and Technical Debt Elimination',
      summary: 'A step-by-step architectural guide to auditing, linting, and refactoring heterogeneous variable names across enterprise monorepos using AST codemods, ESLint enforcement, and automated CI pipelines.',
      sections: [
        {
          heading: '1. The Compounding Cost of Naming Inconsistency',
          paragraphs: [
            'In mature enterprise codebases with multiple contributing teams, variable naming frequently degrades into a patchwork of camelCase, snake_case, and arbitrary PascalCase combinations.',
            'This inconsistency leads directly to runtime deserialization bugs (e.g. "record.user_id" returning undefined when the API contract shifted to "record.userId"), increased onboarding friction, and frequent pull request review debates.',
          ],
          callout: {
            type: 'warning',
            title: 'Architecture Warning: Silent Undefined Infiltration',
            text: 'TypeScript compiler cannot protect against missing properties if incoming API JSON payloads are loosely typed as any or Record<string, unknown> without strict linting.',
          },
        },
        {
          heading: '2. Enforcing Uniform Conventions via ESLint Rules',
          paragraphs: [
            'To halt the spread of non-standard identifiers, engineering organizations enforce strict compiler-level rules using @typescript-eslint/naming-convention.',
            'This rule allows fine-grained declarative enforcement: functions and variables must be camelCase, type aliases must be PascalCase, and global immutable constants must be UPPER_SNAKE_CASE.',
          ],
          codeBlock: {
            lang: 'json',
            title: '.eslintrc.json',
            code: `{
  "rules": {
    "@typescript-eslint/naming-convention": [
      "error",
      { "selector": "default", "format": ["camelCase"] },
      { "selector": "variable", "format": ["camelCase", "UPPER_CASE"] },
      { "selector": "typeLike", "format": ["PascalCase"] },
      { "selector": "enumMember", "format": ["UPPER_CASE"] }
    ]
  }
}`,
          },
        },
        {
          heading: '3. Automated Monorepo Migration Using AST Codemods',
          paragraphs: [
            'Manually renaming thousands of variables across a distributed monorepo is error-prone. Modern engineering teams leverage AST (Abstract Syntax Tree) transformation tools like jscodeshift.',
            'AST codemods parse source code into a syntax tree, safely locate target identifier nodes, perform case transformation, and format the output without breaking semantic references.',
          ],
          codeBlock: {
            lang: 'javascript',
            title: 'codemod-transform-snake-to-camel.js',
            code: `// jscodeshift AST transformation script
export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.Identifier)
    .forEach(path => {
      if (path.node.name.includes('_') && !/^[A-Z_]+$/.test(path.node.name)) {
        // Convert snake_case identifier to camelCase
        path.node.name = path.node.name.replace(/_([a-z])/g, (_, g) => g.toUpperCase());
      }
    })
    .toSource({ quote: 'single' });
}`,
          },
        },
      ],
    },
    {
      id: 'distributed-cron',
      slug: 'distributed-cron-scheduling-cluster-locks-and-ha-solutions',
      category: 'Distributed Systems',
      readTime: '9 min read',
      updatedDate: 'September 2026',
      title: 'Distributed Cron Scheduling: Cluster Locks, Idempotency, and High-Availability Architecture',
      summary: 'A deep dive into building fault-tolerant scheduled workloads in containerized Kubernetes clusters using Redis distributed mutexes, ShedLock, and idempotent execution pipelines.',
      sections: [
        {
          heading: '1. The Split-Brain Dilemma in Clustered Cron Jobs',
          paragraphs: [
            'In containerized cloud environments (Kubernetes, AWS ECS), backend services are horizontally scaled across multiple active pods. When a service contains an in-memory cron trigger (e.g. node-cron or Spring @Scheduled), each pod triggers the scheduled job simultaneously.',
            'Without centralized coordination, this produces catastrophic concurrent executions: duplicate invoice generation, double-charged credit cards, and race conditions on database records.',
          ],
          callout: {
            type: 'warning',
            title: 'Production Pitfall: Multiple Pod Triggers',
            text: 'Never rely on standard in-process crontabs in multi-replica deployments without an external distributed mutex lock.',
          },
        },
        {
          heading: '2. Solving Duplicate Runs with ShedLock & Redis Redlock',
          paragraphs: [
            'The standard industry solution is distributed locking via Redis or relational database lock tables. Tools like ShedLock guarantee that a scheduled task executes on exactly one node at any given timestamp.',
            'ShedLock sets a lock lease with two critical parameters: "lockAtMostFor" (prevents deadlocks if the executing node crashes) and "lockAtLeastFor" (prevents duplicate execution if nodes have slight NTP clock skew).',
          ],
          codeBlock: {
            lang: 'java',
            title: 'SpringShedLockConfig.java',
            code: `@Component
public class ClusteredBillingTask {

    // Guarantees task runs at most once across all active pods
    @Scheduled(cron = "0 0 2 * * ?") // 2:00 AM daily
    @SchedulerLock(
        name = "billingCalculationLock",
        lockAtMostFor = "15m",
        lockAtLeastFor = "5m"
    )
    public void executeDailyBilling() {
        // Only one pod in the entire cluster enters this critical section
        billingService.processOutstandingInvoices();
    }
}`,
          },
        },
        {
          heading: '3. Architectural Best Practice: Idempotent Consumer Design',
          paragraphs: [
            'Distributed locks mitigate 99% of race conditions, but network partitions can still lead to lock expiration before task completion. Resilient systems enforce idempotency at the data layer.',
            'Every scheduled run generates a unique execution fingerprint based on the target timestamp (e.g. "job-billing-2026-09-10"). Database transactions verify this key before processing records, ensuring that subsequent duplicate invocations are safely ignored.',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'idempotent-task-runner.ts',
            code: `async function runScheduledBatch(cronDateKey: string) {
  const queryRunner = db.createQueryRunner();
  await queryRunner.startTransaction();
  try {
    // Acquire DB-level idempotent key
    const lockAcquired = await queryRunner.manager.insert('task_executions', {
      jobName: 'daily_summary',
      executionDate: cronDateKey,
      status: 'RUNNING'
    });
    // Run business logic safely
    await processBatchRecords();
    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    console.log('Task already executed by peer node for today.');
  }
}`,
          },
        },
      ],
    },
    {
      id: 'json-ast-codegen',
      slug: 'deep-dive-into-json-ast-parsing-and-schema-codegen',
      category: 'Compiler & Type Systems',
      readTime: '8 min read',
      updatedDate: 'September 2026',
      title: 'Deep Dive into JSON AST Parsing and Automated TypeScript Interface Generation',
      summary: 'An architectural exploration of lexical analysis, recursive descent AST construction, heterogeneous array union inference, and browser-native type declaration generation with zero external telemetry.',
      sections: [
        {
          heading: '1. Why Naive JSON Parsing Fails at Enterprise Scale',
          paragraphs: [
            'Standard JSON parsers (such as window.JSON.parse) deserialize raw text directly into generic JavaScript object graphs. However, they lack semantic type metadata, silently truncate large integers beyond 2^53 - 1, and provide no recursive type inference.',
            'To generate production-ready TypeScript definitions from arbitrary JSON payloads, modern developer tools build an intermediate Abstract Syntax Tree (AST) that tracks structural taxonomy and optionality.',
          ],
          callout: {
            type: 'tip',
            title: 'Pro Tip: Client-Side Security First',
            text: 'Parsing and code generation must execute strictly within the browser memory space using WebAssembly or local JavaScript—enterprise code and test payloads should never be sent to third-party servers.',
          },
        },
        {
          heading: '2. The Lexer and Recursive Descent Parser Architecture',
          paragraphs: [
            'The transformation pipeline comprises three decoupled phases: Lexical Analysis (tokenizing JSON strings, numbers, punctuation), AST Construction (grouping key-value nodes), and TypeScript Code Generation.',
            'When encountering array nodes, the compiler evaluates all element variants to synthesize clean union types (e.g. "(string | number)[]") rather than collapsing to "any[]".',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'json-type-inferencer.ts',
            code: `// Core AST Type Node Definition
type TypeNode = 
  | { kind: 'primitive'; type: 'string' | 'number' | 'boolean' | 'null' }
  | { kind: 'array'; elementType: TypeNode }
  | { kind: 'union'; types: TypeNode[] }
  | { kind: 'object'; properties: Record<string, { optional: boolean; type: TypeNode }> };

// Infer strict type from arbitrary JSON value
function inferAstType(val: unknown): TypeNode {
  if (val === null) return { kind: 'primitive', type: 'null' };
  if (Array.isArray(val)) {
    const elementTypes = val.map(inferAstType);
    return { kind: 'array', elementType: mergeUnionTypes(elementTypes) };
  }
  if (typeof val === 'object') {
    const properties: Record<string, any> = {};
    for (const [k, v] of Object.entries(val)) {
      properties[k] = { optional: false, type: inferAstType(v) };
    }
    return { kind: 'object', properties };
  }
  return { kind: 'primitive', type: typeof val as any };
}`,
          },
        },
        {
          heading: '3. Handling Nullable Fields and Optional Property Modifiers',
          paragraphs: [
            'In production REST APIs, fields may be omitted or nullable across different records in a list. A robust type generator normalizes schemas across multiple instances, marking missing keys with the TypeScript optional operator ("?").',
            'This guarantees end-to-end type safety, preventing "Cannot read property of undefined" crashes when frontend applications consume polymorphic API endpoints.',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'emitted-interfaces.d.ts',
            code: `// Automatically derived strict TypeScript contracts
export interface UserSessionPayload {
  sessionId: string;
  userId: number;
  ipAddress?: string;           // Automatically marked optional
  roles: Array<'admin' | 'editor' | 'viewer'>;
  metadata: Record<string, string | number>;
  lastActiveTimestamp: number;
}`,
          },
        },
      ],
    },
  ],
  zh: [
    {
      id: 'kebab-vs-snake',
      slug: 'kebab-case-vs-snake-case-database-and-url-best-practices',
      category: '数据库与路由架构',
      readTime: '7 分钟阅读',
      updatedDate: '2026 年 9 月',
      title: 'Kebab-Case 与 Snake_Case：数据库字段设计与现代化 URL 路由语义的深度权衡',
      summary: '深入剖析中横线（连字符）与下划线命名在关系型数据库（PostgreSQL/MySQL）、RESTful 路由分词、云原生配置及搜索引擎（Googlebot）分词权重中的架构选型决策。',
      sections: [
        {
          heading: '一、底层语法机制：编译器与搜索引擎的分词差异',
          paragraphs: [
            '在现代分布式微服务与 Web 架构中，连字符（-）与下划线（_）的选择并非个人审美偏好，而是直接决定了分词器、数据库内核以及搜索引擎爬虫的语法解析路径。',
            '主流搜索引擎爬虫（包括 Googlebot、Bingbot）将短横线（kebab-case）视为天然的“单词分隔符”（例如 /user-profile 会被准确切分为 user 与 profile 两个独立词条）；相反，下划线（snake_case）在多数传统检索算法中被作为字母数字连接符处理，整体被视作单一词汇，无法充分享受长尾关键词分词红利。',
            '因此，在 RESTful URL 路径设计、Web 资源标识符以及微服务对外 API 路由中，采用 kebab-case 是业界的统一最佳实践。',
          ],
          callout: {
            type: 'tip',
            title: '专家规范：Google 官方 SEO 建议',
            text: 'Google 搜索中心官方文档明确指出：建议使用连字符（-）而非下划线（_）来连接 URL 中的单词，以便爬虫进行准确的语义提取与权重计算。',
          },
        },
        {
          heading: '二、关系型数据库设计：为何 SQL 强制选择 Snake_Case',
          paragraphs: [
            '尽管 kebab-case 在 Web 路由层占据绝对优势，但在关系型数据库（如 PostgreSQL、MySQL、Oracle、SQLite）中，连字符具有严重的语法二义性：连字符在 SQL 标准中即为减法运算符（-）。',
            '如果在数据库表名或列名中使用连字符（如 user-first-name），在编写 SQL 查询时必须强制使用引号或反引号转义（例如 `SELECT \`user-first-name\` FROM users`）。一旦遗漏转义，SQL 解析引擎会将其误判为算术减法表达式（user 减去 first 减去 name），从而抛出严重的语法错误。',
            '因此，生产级数据库设计规范无一例外地强制采用 snake_case（如 user_first_name）作为表名、字段名及索引名称的标准格式。',
          ],
          codeBlock: {
            lang: 'sql',
            title: 'sql-schema-standards.sql',
            code: `-- 生产级标准 SQL 命名规约：严格使用 snake_case 标识符
CREATE TABLE user_account_records (
    account_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    billing_status_code VARCHAR(32) DEFAULT 'active_trial'
);

-- 基于 snake_case 的复合查询索引构建
CREATE INDEX idx_user_account_lookup 
ON user_account_records (first_name, billing_status_code);`,
          },
        },
        {
          heading: '三、跨系统边界的转换方案：ORM 与 DTO 桥接',
          paragraphs: [
            '成熟的工程团队通过清晰的系统分层化解上述冲突：数据库存储层保持规范的 snake_case，应用层（TypeScript/Java）领域模型遵循 camelCase，外部 HTTP 路由遵循 kebab-case。',
            '通过在 API 网关或数据访问层（如 Prisma、TypeORM、MyBatis）配置自动命名转换拦截器，实现双向零侵入转换，确保各层纯粹性。',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'boundary-mapping.ts',
            code: `// 领域传输对象 (TypeScript camelCase)
interface UserProfileDto {
  accountId: string;
  firstName: string;
  billingStatusCode: string;
}

// 外部 REST 路由定义 (Web kebab-case)
app.get('/v1/user-account-records/:accountId', async (req, res) => {
  // 数据库层执行 snake_case 查询，并在边界层自动转换为 camelCase DTO
  const record = await db.query('SELECT * FROM user_account_records WHERE account_id = $1', [req.params.accountId]);
  res.json(mapToCamelCase(record));
});`,
          },
        },
      ],
    },
    {
      id: 'code-refactoring',
      slug: 'enterprise-code-refactoring-and-identifier-standardization',
      category: '工程重构与代码质量',
      readTime: '8 分钟阅读',
      updatedDate: '2026 年 9 月',
      title: '企业级中大型项目代码重构：标识符命名收敛、AST Codemod 与自动化规范实战',
      summary: '系统性讲解在大型微服务与 Monorepo 体系中，如何基于抽象语法树（AST）Codemod、ESLint 自定义规则与 CI 门禁治理异构命名技术债务，彻底杜绝属性映射缺失导致的线上事故。',
      sections: [
        {
          heading: '一、命名异构性带来的滚雪球式技术债务',
          paragraphs: [
            '在经历多人多年迭代的大型工程中，变量与属性命名常常退化为 camelCase、snake_case 与随性缩写的“大杂烩”。',
            '这种混乱在系统联调中极易引发严重的静默故障（例如后端由 user_id 切换为 userId 后，前端因未获知变更而导致 record.user_id 读出 undefined，使关键逻辑静默失效），同时大幅增加代码审查与新员工入职的学习成本。',
          ],
          callout: {
            type: 'warning',
            title: '架构警示：静默 Undefined 陷阱',
            text: '当接口返回的 JSON 数据被声明为 any 或粗糙的 Record<string, unknown> 时，TypeScript 编译器完全无法捕获字段命名不一致的严重隐患。',
          },
        },
        {
          heading: '二、通过 ESLint 与编译器插件强固收敛标准',
          paragraphs: [
            '要遏制不规范代码的蔓延，必须将其上升到编译器级别的门禁。通过配置 @typescript-eslint/naming-convention 规则，实现声明式约束：普通变量与函数强制 camelCase，类型与接口强制 PascalCase，全局常量强制 UPPER_SNAKE_CASE。',
          ],
          codeBlock: {
            lang: 'json',
            title: '.eslintrc.json',
            code: `{
  "rules": {
    "@typescript-eslint/naming-convention": [
      "error",
      { "selector": "default", "format": ["camelCase"] },
      { "selector": "variable", "format": ["camelCase", "UPPER_CASE"] },
      { "selector": "typeLike", "format": ["PascalCase"] },
      { "selector": "enumMember", "format": ["UPPER_CASE"] }
    ]
  }
}`,
          },
        },
        {
          heading: '三、基于 AST Codemod 的大规模无损自动重构',
          paragraphs: [
            '人工在成百上千个文件中查找替换极易误伤同名字符串。业界顶尖团队采用基于抽象语法树（AST）的 jscodeshift 工具编写自动化迁移脚本。',
            'AST Codemod 精确识别代码中的标识符（Identifier）节点，将其安全重构为标准 camelCase 格式，完美保留代码语义与注释。',
          ],
          codeBlock: {
            lang: 'javascript',
            title: 'codemod-transform-snake-to-camel.js',
            code: `// jscodeshift AST 自动化命名收敛重构脚本
export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.Identifier)
    .forEach(path => {
      if (path.node.name.includes('_') && !/^[A-Z_]+$/.test(path.node.name)) {
        // 将下划线命名安全收敛转换为标准小驼峰
        path.node.name = path.node.name.replace(/_([a-z])/g, (_, g) => g.toUpperCase());
      }
    })
    .toSource({ quote: 'single' });
}`,
          },
        },
      ],
    },
    {
      id: 'distributed-cron',
      slug: 'distributed-cron-scheduling-cluster-locks-and-ha-solutions',
      category: '分布式系统架构',
      readTime: '9 分钟阅读',
      updatedDate: '2026 年 9 月',
      title: '分布式系统中的定时任务调度：分布式锁、集群防重与高可用架构实战',
      summary: '深度解析 Kubernetes 多副本集群中定时任务的防重调度机制，覆盖 Redis 分布式排他锁、ShedLock 原理、幂等执行流水线与时区夏令时避坑方案。',
      sections: [
        {
          heading: '一、多副本容器化环境下的“脑裂重复执行”危机',
          paragraphs: [
            '在云原生 Kubernetes 体系中，后端服务通常横向扩缩容为 3 到 10 个 Pod 副本。若服务内置了传统的内存级定时任务（如 Spring @Scheduled 或 node-cron），当设定时间到达时，每个 Pod 都会同时触发该任务。',
            '在缺乏中央互斥协调的情况下，这会导致灾难性的并发事故：财务重复扣款、订单重复生成以及数据库行级死锁。',
          ],
          callout: {
            type: 'warning',
            title: '生产事故警示：绝不在集群环境下使用裸定时器',
            text: '多实例部署环境下，严禁直接运行未经分布式锁防护的本地 Cron 定时器。',
          },
        },
        {
          heading: '二、工业级防重方案：ShedLock 与 Redis 互斥锁机制',
          paragraphs: [
            '业界通用的架构模式是引入基于 Redis 或共享数据库的分布式锁框架（如 ShedLock）。它通过在共享介质中设置带租约的排他锁，确保集群中同一时刻仅有一个 Pod 能够赢得执行权。',
            'ShedLock 巧妙地引入了两个核心参数：lockAtMostFor（最大持有时间，防止节点崩溃导致死锁）与 lockAtLeastFor（最小保留时间，消除多节点 NTP 时钟毫秒级漂移引发的连续执行）。',
          ],
          codeBlock: {
            lang: 'java',
            title: 'SpringShedLockConfig.java',
            code: `@Component
public class ClusteredBillingTask {

    // 确保在整个 Kubernetes 集群中同一时刻仅有一个节点执行
    @Scheduled(cron = "0 0 2 * * ?") // 每日凌晨 2 点执行
    @SchedulerLock(
        name = "billingCalculationLock",
        lockAtMostFor = "15m",
        lockAtLeastFor = "5m"
    )
    public void executeDailyBilling() {
        // 集群中只有获得分布式锁的唯一步骤能进入核心结算逻辑
        billingService.processOutstandingInvoices();
    }
}`,
          },
        },
        {
          heading: '三、终极防线：数据层的天然幂等性设计',
          paragraphs: [
            '即使分布式锁机制健全，极端网络分区或垃圾回收（GC）长时间停顿也可能导致锁租约超时。高可用架构必须在数据层实现最终幂等保护。',
            '每次定时任务调度时，根据业务日期生成唯一幂等指纹（如 job-billing-2026-09-10），写入数据库唯一索引表中。若由于网络重试导致任务二次触发，数据库唯一约束将直接拦截重放。',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'idempotent-task-runner.ts',
            code: `async function runScheduledBatch(cronDateKey: string) {
  const queryRunner = db.createQueryRunner();
  await queryRunner.startTransaction();
  try {
    // 写入具有唯一约束的当日幂等执行记录
    await queryRunner.manager.insert('task_executions', {
      jobName: 'daily_summary',
      executionDate: cronDateKey,
      status: 'RUNNING'
    });
    // 安全执行业务批处理
    await processBatchRecords();
    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    console.log('检测到幂等记录已存在，今日任务已被其他节点抢先完成。');
  }
}`,
          },
        },
      ],
    },
    {
      id: 'json-ast-codegen',
      slug: 'deep-dive-into-json-ast-parsing-and-schema-codegen',
      category: '编译器与类型系统',
      readTime: '8 分钟阅读',
      updatedDate: '2026 年 9 月',
      title: '深入 JSON 抽象语法树（AST）解析与全自动 TypeScript 类型元数据生成',
      summary: '全面剖析词法分析 Token 流、递归下降 AST 语法树构建、异构数组联合类型推导及纯前端零上传生成高精度 TypeScript Interface 的底层算法。',
      sections: [
        {
          heading: '一、为何原生 JSON.parse 无法满足企业级类型推导',
          paragraphs: [
            '浏览器原生 JSON.parse 仅负责将字符串粗暴还原为运行时的弱类型对象图。它不仅会静默丢失超过 2^53 - 1 的大整数精度，更无法对嵌套对象提供类型契约保护。',
            '要实现高质量的自动类型生成，现代开发工具必须通过词法分析器构建抽象语法树（AST），并在语法树上遍历计算字段的可选性与多态联合类型。',
          ],
          callout: {
            type: 'tip',
            title: '核心准则：客户端纯本地执行',
            text: '开发者的业务数据和真实接口 Payload 严禁传输至第三方后端服务进行类型解析，必须 100% 在浏览器端利用纯 JavaScript/Wasm 完成语法树推导。',
          },
        },
        {
          heading: '二、分词（Lexer）与递归下降语法树构建',
          paragraphs: [
            '类型推导流水线分为三个解耦阶段：词法分析（拆解花括号、中括号、字符串、布尔值等 Token）、递归语法分析（构建包含属性类型与可选状态的 AST 树），以及目标语言代码发射器（Code Emitter）。',
            '在解析列表数据时，引擎深度扫描数组内所有元素的属性集合，智能归纳推导出联合类型（如 (string | number)[]），彻底告别粗暴泛滥的 any[]。',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'json-type-inferencer.ts',
            code: `// 核心 AST 类型节点定义
type TypeNode = 
  | { kind: 'primitive'; type: 'string' | 'number' | 'boolean' | 'null' }
  | { kind: 'array'; elementType: TypeNode }
  | { kind: 'union'; types: TypeNode[] }
  | { kind: 'object'; properties: Record<string, { optional: boolean; type: TypeNode }> };

// 递归推导任意未知 JSON 结构
function inferAstType(val: unknown): TypeNode {
  if (val === null) return { kind: 'primitive', type: 'null' };
  if (Array.isArray(val)) {
    const elementTypes = val.map(inferAstType);
    return { kind: 'array', elementType: mergeUnionTypes(elementTypes) };
  }
  if (typeof val === 'object') {
    const properties: Record<string, any> = {};
    for (const [k, v] of Object.entries(val)) {
      properties[k] = { optional: false, type: inferAstType(v) };
    }
    return { kind: 'object', properties };
  }
  return { kind: 'primitive', type: typeof val as any };
}`,
          },
        },
        {
          heading: '三、缺失字段归纳与可选修饰符（?）智能标记',
          paragraphs: [
            '真实 API 响应常伴随可选缺失字段或 null 值。优秀的类型生成器在对比同一模型的多条记录后，能自动标记缺失属性为可选修饰符（?），并生成严谨的 TypeScript Interface 接口定义。',
            '这种静态类型防线从根本上消灭了前端常见的 "Cannot read properties of undefined" 崩溃，大幅提升大型项目的稳定性。',
          ],
          codeBlock: {
            lang: 'typescript',
            title: 'emitted-interfaces.d.ts',
            code: `// 编译器纯本地自动发射的高精度 TypeScript 契约
export interface UserSessionPayload {
  sessionId: string;
  userId: number;
  ipAddress?: string;           // 多记录比对后智能标记为可选字段
  roles: Array<'admin' | 'editor' | 'viewer'>;
  metadata: Record<string, string | number>;
  lastActiveTimestamp: number;
}`,
          },
        },
      ],
    },
  ],
  es: [
    {
      id: 'kebab-vs-snake',
      slug: 'kebab-case-vs-snake-case-database-and-url-best-practices',
      category: 'Bases de Datos y Enrutamiento',
      readTime: '7 min de lectura',
      updatedDate: 'Septiembre 2026',
      title: 'Kebab-Case vs Snake_Case: Compensaciones Arquitectónicas en Bases de Datos y Rutas URL',
      summary: 'Comparación técnica exhaustiva entre guiones y guiones bajos en esquemas relacionales, enrutamiento REST y SEO.',
      sections: [
        {
          heading: '1. Mecánica de Segmentación Léxica y Rastreadores',
          paragraphs: [
            'Los rastreadores como Googlebot interpretan los guiones (kebab-case) como delimitadores de palabras claros, mientras que los guiones bajos (snake_case) suelen tratarse como conectores alfanuméricos.',
          ],
        },
        {
          heading: '2. Restricciones en Motores SQL',
          paragraphs: [
            'En bases de datos relacionales, el guion (-) es el operador de resta. Usar kebab-case obliga a escapar identificadores en cada consulta, por lo que snake_case es el estándar de facto en bases de datos.',
          ],
        },
      ],
    },
    {
      id: 'code-refactoring',
      slug: 'enterprise-code-refactoring-and-identifier-standardization',
      category: 'Práctica de Ingeniería',
      readTime: '8 min de lectura',
      updatedDate: 'Septiembre 2026',
      title: 'Refactorización de Código Empresarial: Automatización de Nomenclatura y Eliminación de Deuda Técnica',
      summary: 'Estrategias prácticas para unificar convenciones en monorepos y microservicios heredados usando codemods y linters automáticos.',
      sections: [
        {
          heading: '1. El Coste de la Inconsistencia en Nombres',
          paragraphs: [
            'La mezcla arbitraria de camelCase y snake_case causa errores en tiempo de ejecución al deserializar respuestas de APIs.',
          ],
        },
        {
          heading: '2. Transformaciones Seguras con Codemods AST',
          paragraphs: [
            'Herramientas como jscodeshift permiten refactorizar miles de archivos automáticamente sin alterar la semántica del código.',
          ],
        },
      ],
    },
    {
      id: 'distributed-cron',
      slug: 'distributed-cron-scheduling-cluster-locks-and-ha-solutions',
      category: 'Sistemas Distribuidos',
      readTime: '9 min de lectura',
      updatedDate: 'Septiembre 2026',
      title: 'Programación Cron Distribuida: Bloqueos de Clúster, Idempotencia y Arquitectura de Alta Disponibilidad',
      summary: 'Diseño de tareas programadas resistentes en clústeres Kubernetes mediante bloqueos distribuidos y pipelines idempotentes.',
      sections: [
        {
          heading: '1. Ejecución Duplicada en Clústeres Kubernetes',
          paragraphs: [
            'Cuando una aplicación se ejecuta en múltiples pods, los temporizadores en memoria se activan en paralelo, provocando facturaciones duplicadas.',
          ],
        },
        {
          heading: '2. Coordinación con Bloqueos Distribuidos y ShedLock',
          paragraphs: [
            'El uso de bloqueos distribuidos en Redis o bases de datos compartidas garantiza que solo un pod ejecute el trabajo programado.',
          ],
        },
      ],
    },
    {
      id: 'json-ast-codegen',
      slug: 'deep-dive-into-json-ast-parsing-and-schema-codegen',
      category: 'Sistemas de Tipos y Compiladores',
      readTime: '8 min de lectura',
      updatedDate: 'Septiembre 2026',
      title: 'Análisis Profundo del AST de JSON y Generación Automatizada de Interfaces TypeScript',
      summary: 'Explicación del análisis léxico, recorrido de AST recursivo e inferencia de tipos de unión sin enviar datos al servidor.',
      sections: [
        {
          heading: '1. Inferencia Segura en el Navegador',
          paragraphs: [
            'La generación de tipos debe ejecutarse completamente en el cliente para preservar la privacidad absoluta de los datos confidenciales.',
          ],
        },
        {
          heading: '2. Detección Inteligente de Propiedades Opcionales',
          paragraphs: [
            'Al comparar múltiples instancias en un arreglo, los campos ausentes se marcan con el operador opcional (?), previniendo errores de undefined.',
          ],
        },
      ],
    },
  ],
  ja: [
    {
      id: 'kebab-vs-snake',
      slug: 'kebab-case-vs-snake-case-database-and-url-best-practices',
      category: 'DB設計＆ルーティング',
      readTime: '7 分で読める',
      updatedDate: '2026年9月',
      title: 'Kebab-Case と Snake_Case の徹底比較：DB スキーマ設計とモダン URL ルーティングの最適解',
      summary: 'PostgreSQL/MySQLの列名規則、RESTfulエンドポイント設計、クローラーの単語境界解析におけるハイフンとアンダースコアの選定基準を詳解。',
      sections: [
        {
          heading: '1. 検索エンジンとクローラーの単語分割挙動',
          paragraphs: [
            'Googlebotなどの検索クローラーはハイフン（-）を明確な単語区切りとして認識しますが、アンダースコア（_）は文字列の連結と見なす傾向があります。',
          ],
        },
        {
          heading: '2. リレーショナルデータベースにおけるSQLの制約',
          paragraphs: [
            'SQLにおいてハイフンは減算演算子（-）と衝突するため、カラム名には安全な snake_case を採用するのが世界標準です。',
          ],
        },
      ],
    },
    {
      id: 'code-refactoring',
      slug: 'enterprise-code-refactoring-and-identifier-standardization',
      category: 'エンジニアリング実践',
      readTime: '8 分で読める',
      updatedDate: '2026年9月',
      title: 'エンタープライズコードのリファクタリング：命名規約の自動統一と技術的負債の解消実践',
      summary: '大規模マイクロサービスやモノレポにおける、AST Codemod、ESLintカスタムルール、CIパイプラインを用いた命名規則統一の完全手順。',
      sections: [
        {
          heading: '1. 命名の不整合が引き起こすランタイム障害',
          paragraphs: [
            'camelCaseとsnake_caseの混在は、API連携時の未定義値（undefined）参照エラーの原因となります。',
          ],
        },
        {
          heading: '2. AST Codemod による大規模コード自動置換',
          paragraphs: [
            'jscodeshift を用いることで、コードの文脈を壊さずに識別子のみを正確かつ安全にリファクタリングできます。',
          ],
        },
      ],
    },
    {
      id: 'distributed-cron',
      slug: 'distributed-cron-scheduling-cluster-locks-and-ha-solutions',
      category: '分散システム設計',
      readTime: '9 分で読める',
      updatedDate: '2026年9月',
      title: '分散環境における Cron スケジューリング：分散ロック・二重実行防止と高可用性アーキテクチャ',
      summary: 'Kubernetesクラスタで安全にバッチ処理を稼働させるための、Redis分散ロック（Redlock）、ShedLock、冪等性設計の実務ノウハウ。',
      sections: [
        {
          heading: '1. クラスタ環境における多重実行リスク',
          paragraphs: [
            '複数Podで稼働するWebアプリ内蔵のCronは、各ノードで同時にトリガーされてしまうため、分散排他制御が必須です。',
          ],
        },
        {
          heading: '2. ShedLock と Redis による排他制御と冪等性担保',
          paragraphs: [
            'ShedLockなどの分散ロックとDBの一意キー制約を組み合わせることで、万が一の重複実行を確実に防止します。',
          ],
        },
      ],
    },
    {
      id: 'json-ast-codegen',
      slug: 'deep-dive-into-json-ast-parsing-and-schema-codegen',
      category: '型システム＆コンパイラ',
      readTime: '8 分で読める',
      updatedDate: '2026年9月',
      title: 'JSON 抽象構文木（AST）解析と TypeScript 型定義の自動生成メカニズム詳解',
      summary: '字句解析トークンストリーム、再帰下降パーサーによるAST構築、複合ユニオン型推論と外部送信ゼロの型定義生成アルゴリズム。',
      sections: [
        {
          heading: '1. ブラウザローカル完結のプライバシー保護',
          paragraphs: [
            '機密性の高いJSONペイロードを外部サーバーへ送信せず、WebAssemblyやPure JSで高速にAST解析を実行します。',
          ],
        },
        {
          heading: '2. オプショナルプロパティ（?）の自動推論',
          paragraphs: [
            '複数オブジェクト間のプロパティ差分を比較し、欠落のある項目へ自動的に「?」を付与して厳格な型安全性を実現します。',
          ],
        },
      ],
    },
  ],
  de: [
    {
      id: 'kebab-vs-snake',
      slug: 'kebab-case-vs-snake-case-database-and-url-best-practices',
      category: 'Datenbanken & Routing',
      readTime: '7 Min. Lesezeit',
      updatedDate: 'September 2026',
      title: 'Kebab-Case vs. Snake_Case: Architektonische Abwägungen in Datenbankschemata und URL-Routing',
      summary: 'Detaillierte Gegenüberstellung von Bindestrich- und Unterstrich-Konventionen in relationalen Datenbanken, REST-URLs und SEO.',
      sections: [
        {
          heading: '1. Wortsegmentierung in Suchmaschinen-Crawlern',
          paragraphs: [
            'Suchmaschinen wie Googlebot werten Bindestriche (kebab-case) als Worttrenner, während Unterstriche als Zeichenverbinder interpretiert werden.',
          ],
        },
        {
          heading: '2. SQL-Syntax und Operator-Kollisionen',
          paragraphs: [
            'In SQL fungiert das Minuszeichen (-) als Rechenoperator. Datenbankspalten erfordern daher zwingend snake_case zur Vermeidung von Syntaxfehlern.',
          ],
        },
      ],
    },
    {
      id: 'code-refactoring',
      slug: 'enterprise-code-refactoring-and-identifier-standardization',
      category: 'Software-Engineering',
      readTime: '8 Min. Lesezeit',
      updatedDate: 'September 2026',
      title: 'Code-Refactoring im Unternehmen: Automatisierte Bezeichner-Standardisierung und Abbau technischer Schulden',
      summary: 'Praxisleitfaden zur Bereinigung gewachsener Codebasen durch AST-Codemods, Linter-Regeln und CI/CD-Qualitätsgates.',
      sections: [
        {
          heading: '1. Vermeidung von Deserialisierungsfehlern',
          paragraphs: [
            'Uneinheitliche Variablennamen führen bei API-Änderungen zu schwer auffindbaren Laufzeitfehlern.',
          ],
        },
        {
          heading: '2. Automatisierte Codemods mit jscodeshift',
          paragraphs: [
            'AST-Transformationen ermöglichen das risikofreie Umbenennen von Bezeichnern über Tausende von Quellcodedateien hinweg.',
          ],
        },
      ],
    },
    {
      id: 'distributed-cron',
      slug: 'distributed-cron-scheduling-cluster-locks-and-ha-solutions',
      category: 'Verteilte Systeme',
      readTime: '9 Min. Lesezeit',
      updatedDate: 'September 2026',
      title: 'Verteilte Cron-Planung: Cluster-Locks, Idempotenz und Hochverfügbarkeits-Architektur',
      summary: 'Architektur resilienter Hintergrundjobs in Kubernetes-Clustern mit verteilten Mutex-Locks, ShedLock und idempotenter Ausführung.',
      sections: [
        {
          heading: '1. Parallele Ausführung in Multi-Replica-Clustern',
          paragraphs: [
            'Werden Cron-Jobs auf mehreren Kubernetes-Pods ohne zentrale Verriegelung ausgeführt, kommt es zu doppelten Buchungen.',
          ],
        },
        {
          heading: '2. Verteilte Mutex-Sperren mit ShedLock',
          paragraphs: [
            'ShedLock garantiert über zentrale Redis- oder SQL-Tabellensperren, dass genau ein Pod den Auftrag ausführt.',
          ],
        },
      ],
    },
    {
      id: 'json-ast-codegen',
      slug: 'deep-dive-into-json-ast-parsing-and-schema-codegen',
      category: 'Typensysteme & Compiler',
      readTime: '8 Min. Lesezeit',
      updatedDate: 'September 2026',
      title: 'Tiefgreifende Analyse von JSON-AST-Parsing und automatisierter TypeScript-Interface-Generierung',
      summary: 'Einblick in Lexer-Token-Streams, rekursive AST-Erzeugung und lokale TypeScript-Interface-Ableitung ohne Server-Upload.',
      sections: [
        {
          heading: '1. Datenschutz durch rein clientseitige Verarbeitung',
          paragraphs: [
            'Unternehmensdaten verlassen niemals den Browser. Die AST-Inferenz erfolgt 100% lokal.',
          ],
        },
        {
          heading: '2. Automatische Erkennung optionaler Felder',
          paragraphs: [
            'Beim Abgleich mehrerer JSON-Objekte werden fehlende Attribute präzise mit dem TypeScript-Operator ? gekennzeichnet.',
          ],
        },
      ],
    },
  ],
  fr: [
    {
      id: 'kebab-vs-snake',
      slug: 'kebab-case-vs-snake-case-database-and-url-best-practices',
      category: 'Bases de Données & Routage',
      readTime: '7 min de lecture',
      updatedDate: 'Septembre 2026',
      title: 'Kebab-Case vs Snake_Case : Compromis Architecturaux entre Schémas de Base de Données et Routage URL',
      summary: 'Étude comparative des tirets et underscores dans les bases relationnelles, le routage REST et le référencement naturel.',
      sections: [
        {
          heading: '1. Segmentation des Mots et Robots d\'Indexation',
          paragraphs: [
            'Les moteurs comme Googlebot interprètent les tirets courts (kebab-case) comme des séparateurs sémantiques distincts, favorisant le SEO.',
          ],
        },
        {
          heading: '2. Ambiguïtés Syntaxiques en SQL',
          paragraphs: [
            'En SQL, le tiret est l\'opérateur de soustraction. Pour éviter les conflits d\'échappement, le snake_case est la norme universelle en base de données.',
          ],
        },
      ],
    },
    {
      id: 'code-refactoring',
      slug: 'enterprise-code-refactoring-and-identifier-standardization',
      category: 'Pratiques d\'Ingénierie',
      readTime: '8 min de lecture',
      updatedDate: 'Septembre 2026',
      title: 'Refactorisation de Code d\'Entreprise : Standardisation Automatisée des Identifiants et Réduction de la Dette Technique',
      summary: 'Guide méthodique pour éliminer la dette technique de nommage dans les monorepos grâce aux codemods AST et pipelines CI.',
      sections: [
        {
          heading: '1. Risques de Régression et Champs Indéfinis',
          paragraphs: [
            'L\'hétérogénéité des noms d\'attributs entre le frontend et le backend provoque des erreurs silencieuses à l\'exécution.',
          ],
        },
        {
          heading: '2. Migration par Arbres Syntaxiques (AST)',
          paragraphs: [
            'L\'outil jscodeshift automatise le renommage sans altérer la logique métier ni les commentaires.',
          ],
        },
      ],
    },
    {
      id: 'distributed-cron',
      slug: 'distributed-cron-scheduling-cluster-locks-and-ha-solutions',
      category: 'Systèmes Distribués',
      readTime: '9 min de lecture',
      updatedDate: 'Septembre 2026',
      title: 'Planification Cron Distribuée : Verrous de Cluster, Idempotence et Haute Disponibilité',
      summary: 'Conception de tâches planifiées hautement disponibles sur Kubernetes avec verrous distribués Redis, ShedLock et traitement idempotent.',
      sections: [
        {
          heading: '1. Risques d\'Exécution en Double sur Kubernetes',
          paragraphs: [
            'Sans verrouillage partagé, tous les pods actifs déclenchent les mêmes tâches périodiques en parallèle.',
          ],
        },
        {
          heading: '2. Synchronisation par Verrous avec ShedLock',
          paragraphs: [
            'ShedLock garantit qu\'une seule instance exécute le traitement à chaque créneau horaire prévu.',
          ],
        },
      ],
    },
    {
      id: 'json-ast-codegen',
      slug: 'deep-dive-into-json-ast-parsing-and-schema-codegen',
      category: 'Systèmes de Types & Compilateurs',
      readTime: '8 min de lecture',
      updatedDate: 'Septembre 2026',
      title: 'Plongée au Cœur de l\'AST JSON et Génération Automatisée d\'Interfaces TypeScript',
      summary: 'Analyse lexicale, construction récursive d\'arbres syntaxiques (AST) et inférence de types d\'unions 100% exécutées dans le navigateur.',
      sections: [
        {
          heading: '1. Confidentialité et Sécurité des Données',
          paragraphs: [
            'Les calculs s\'exécutent exclusivement en local dans le navigateur, garantissant zéro transfert vers des serveurs tiers.',
          ],
        },
        {
          heading: '2. Inférence Automatique des Champs Optionnels',
          paragraphs: [
            'Le compilateur analyse les collections pour apposer automatiquement le modificateur (?) sur les attributs manquants.',
          ],
        },
      ],
    },
  ],
};

// Also read current articlesData and merge
import { ssgArticlesData as existingArticles } from './ssg-articles-data.js';

const combinedArticles = {};
for (const loc of ['en', 'zh', 'es', 'ja', 'de', 'fr']) {
  const current = existingArticles[loc] || [];
  const additions = newArticlesByLocale[loc] || [];
  // deduplicate by id
  const existingIds = new Set(current.map(a => a.id));
  const filteredAdditions = additions.filter(a => !existingIds.has(a.id));
  combinedArticles[loc] = [...current, ...filteredAdditions];
}

// Write to src/lib/articlesData.ts
const tsContent = `/* ==========================================================================
   [Developer Guides & Documentation Data Source]
   - 8 High-Value In-Depth Technical Articles
   - 100% Native Internationalization: en, es, ja, de, fr, zh
   - Includes code snippets, Pro Tips, best practices, and structured sections
   ========================================================================== */

import { Locale } from './i18n';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  codeBlock?: {
    lang: string;
    title: string;
    code: string;
  };
  callout?: {
    type: 'tip' | 'warning' | 'info';
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  category: string;
  readTime: string;
  updatedDate: string;
  title: string;
  summary: string;
  sections: ArticleSection[];
}

export const articlesData: Record<Locale, Article[]> = ${JSON.stringify(combinedArticles, null, 2)};
`;

fs.writeFileSync(path.join(projectRoot, 'src/lib/articlesData.ts'), tsContent, 'utf-8');
console.log('✓ Updated: src/lib/articlesData.ts with 8 comprehensive technical articles');

// Write to scripts/ssg-articles-data.js
const ssgContent = `/* ==========================================================================
   [Developer Guides & Documentation Data Source - SSG ESM]
   - 8 High-Value In-Depth Technical Articles
   - 100% Native Internationalization: en, es, ja, de, fr, zh
   ========================================================================== */

export const ssgArticlesData = ${JSON.stringify(combinedArticles, null, 2)};
`;

fs.writeFileSync(path.join(projectRoot, 'scripts/ssg-articles-data.js'), ssgContent, 'utf-8');
console.log('✓ Updated: scripts/ssg-articles-data.js with 8 comprehensive technical articles');
