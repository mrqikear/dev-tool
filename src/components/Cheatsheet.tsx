import React, { useState } from 'react';
import { Locale, ToolType, translations } from '../lib/i18n';
import { Code2, Clock, FileJson, ArrowRight, Sparkles, Check, Copy } from 'lucide-react';

interface CheatsheetProps {
  locale: Locale;
  onTryExample: (sampleText: string, targetTool: ToolType) => void;
}

export function Cheatsheet({ locale, onTryExample }: CheatsheetProps) {
  const [activeTab, setActiveTab] = useState<'naming' | 'cron' | 'json'>('naming');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const t = translations[locale] || translations.en;
  const nav = t.nav as any;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  // 1. Naming Conventions Cheatsheet
  const namingItems = [
    {
      id: 'n1',
      name: 'camelCase',
      example: 'userAccountProfileData',
      desc: locale === 'zh' ? 'JavaScript / TypeScript 变量、对象属性与函数方法' :
            locale === 'ja' ? 'JavaScript / TypeScript の変数・プロパティ・関数' :
            locale === 'es' ? 'Variables, propiedades y funciones en JavaScript / TypeScript' :
            locale === 'de' ? 'Variablen, Eigenschaften und Funktionen in JavaScript/TypeScript' :
            locale === 'fr' ? 'Variables, propriétés et fonctions en JavaScript / TypeScript' :
            'Standard for JavaScript / TypeScript variables, object properties, and functions.',
      badge: 'Frontend & Node.js'
    },
    {
      id: 'n2',
      name: 'PascalCase',
      example: 'UserAccountProfileData',
      desc: locale === 'zh' ? 'React 组件、TypeScript 接口与 C# / Java 类名' :
            locale === 'ja' ? 'React コンポーネント、TypeScript インターフェース、Java / C# のクラス名' :
            locale === 'es' ? 'Componentes React, interfaces TypeScript y clases C# / Java' :
            locale === 'de' ? 'React-Komponenten, TypeScript-Interfaces und C#/Java-Klassen' :
            locale === 'fr' ? 'Composants React, interfaces TypeScript et classes C# / Java' :
            'Required for React components, TypeScript interfaces, and Java / C# classes.',
      badge: 'OOP & Components'
    },
    {
      id: 'n3',
      name: 'snake_case',
      example: 'user_account_profile_data',
      desc: locale === 'zh' ? 'Python 变量与方法、PostgreSQL / MySQL 数据库字段' :
            locale === 'ja' ? 'Python の関数・変数、PostgreSQL / MySQL のテーブルカラム' :
            locale === 'es' ? 'Variables en Python y columnas de bases de datos PostgreSQL / MySQL' :
            locale === 'de' ? 'Python-Variablen und Datenbankspalten in MySQL / PostgreSQL' :
            locale === 'fr' ? 'Variables Python et colonnes de bases de données MySQL / PostgreSQL' :
            'Standard in Python (PEP 8) and relational database columns (Postgres, MySQL).',
      badge: 'Python & SQL'
    },
    {
      id: 'n4',
      name: 'kebab-case',
      example: 'user-account-profile-data',
      desc: locale === 'zh' ? 'Google 官方推荐 URL 路由 Slug、CSS 类名、K8s 资源定义' :
            locale === 'ja' ? 'Google 推奨 URL スラッグ、CSS クラス名、Kubernetes マニフェスト' :
            locale === 'es' ? 'Rutas URL recomendadas por Google, clases CSS y recursos Kubernetes' :
            locale === 'de' ? 'Google SEO-konforme URLs, CSS-Klassennamen und Kubernetes-Ressourcen' :
            locale === 'fr' ? 'URLs recommandées par Google, classes CSS et manifests Kubernetes' :
            'Official Google standard for SEO-friendly URLs, CSS classes, and Kubernetes slugs.',
      badge: 'URLs, CSS & DevOps'
    },
    {
      id: 'n5',
      name: 'CONSTANT_CASE',
      example: 'MAXIMUM_RETRY_THRESHOLD',
      desc: locale === 'zh' ? '全局不可变常量、环境变量配置与 Redux Action 类型' :
            locale === 'ja' ? '不変の定数定義、環境変数、Redux アクションタイプ' :
            locale === 'es' ? 'Constantes inmutables globales y variables de entorno' :
            locale === 'de' ? 'Unveränderliche globale Konstanten und Umgebungsvariablen' :
            locale === 'fr' ? 'Constantes globales immuables et variables d\'environnement' :
            'Global immutable constants, environment configs, and uppercase enums.',
      badge: 'Config & Enums'
    },
    {
      id: 'n6',
      name: 'Title Case',
      example: 'User Account Profile Data',
      desc: locale === 'zh' ? '英文技术文档、博客文章 H1/H2 标题与新闻头条' :
            locale === 'ja' ? '技術ドキュメント、ブログの見出し、英語タイトルの標準表記' :
            locale === 'es' ? 'Títulos de artículos, encabezados H1/H2 y documentación' :
            locale === 'de' ? 'Überschriften in Dokumentationen und Artikeln' :
            locale === 'fr' ? 'Titres d\'articles, en-têtes et documentations techniques' :
            'Standard for formal English article headlines, book titles, and navigation menus.',
      badge: 'Editorial & SEO'
    }
  ];

  // 2. Cron Expression Cheatsheet
  const cronItems = [
    {
      id: 'c1',
      name: locale === 'zh' ? '每 15 分钟触发一次' : locale === 'ja' ? '15分おきに実行' : locale === 'es' ? 'Cada 15 minutos' : locale === 'de' ? 'Alle 15 Minuten' : locale === 'fr' ? 'Toutes les 15 minutes' : 'Every 15 minutes',
      example: '*/15 * * * *',
      desc: locale === 'zh' ? '常用于消息轮询、健康心跳探测与短周期队列清理' :
            locale === 'ja' ? 'ヘルスチェックやキューの定期ポーリングに最適' :
            locale === 'es' ? 'Ideal para sondeos de salud y colas de tareas cortas' :
            locale === 'de' ? 'Häufig für Healthchecks und kurze Queue-Bereinigungen' :
            locale === 'fr' ? 'Idéal pour les sondes de santé et le polling de files' :
            'Standard POSIX 5-field syntax for health checks and message queue polling.',
      badge: 'Standard 5-Field'
    },
    {
      id: 'c2',
      name: locale === 'zh' ? '每天午夜 00:00 执行' : locale === 'ja' ? '毎日深夜 00:00 実行' : locale === 'es' ? 'Cada medianoche (00:00)' : locale === 'de' ? 'Täglich um Mitternacht' : locale === 'fr' ? 'Tous les jours à minuit' : 'Every day at midnight',
      example: '0 0 * * *',
      desc: locale === 'zh' ? '日终结算、数据归档、日志滚动切分最常用的表达式' :
            locale === 'ja' ? '日次データ集計、アクセスログのローテーションに汎用' :
            locale === 'es' ? 'Cierre diario de cuentas y rotación de registros del sistema' :
            locale === 'de' ? 'Tägliche Backups, Abrechnungen und Log-Rotation' :
            locale === 'fr' ? 'Clôture quotidienne, archivage et rotation des journaux' :
            'Classic midnight execution for ledger settlements and log rotations.',
      badge: 'Daily Batch'
    },
    {
      id: 'c3',
      name: locale === 'zh' ? '每个工作日中午 12:00 (Spring)' : locale === 'ja' ? '平日の正午 12:00 (Spring)' : locale === 'es' ? 'Días laborables a las 12:00 (Spring)' : locale === 'de' ? 'Werktags um 12:00 (Spring)' : locale === 'fr' ? 'Jours ouvrés à 12:00 (Spring)' : 'Every weekday at 12:00 (Spring)',
      example: '0 0 12 ? * MON-FRI',
      desc: locale === 'zh' ? 'Spring 6位语法，? 符号排除了日与周的冲突，仅周一至周五触发' :
            locale === 'ja' ? 'Spring 6桁表記。? 記号で日と曜日の競合を解消し、月曜〜金曜のみ動作' :
            locale === 'es' ? 'Sintaxis Spring de 6 campos. El signo ? evita conflictos de calendario' :
            locale === 'de' ? 'Spring 6-Felder-Syntax mit ? zur Vermeidung von Kalenderkonflikten' :
            locale === 'fr' ? 'Syntaxe Spring à 6 champs avec ? pour éviter les conflits calendrier' :
            'Spring 6-field schedule with ? symbol to resolve day-of-week conflicts.',
      badge: 'Spring 6-Field'
    },
    {
      id: 'c4',
      name: locale === 'zh' ? '每月 1 号凌晨 02:00' : locale === 'ja' ? '毎月1日の深夜 02:00' : locale === 'es' ? 'Día 1 de cada mes a las 02:00' : locale === 'de' ? 'Am 1. jedes Monats um 02:00' : locale === 'fr' ? 'Le 1er de chaque mois à 02:00' : 'First day of every month at 02:00',
      example: '0 2 1 * *',
      desc: locale === 'zh' ? '月度财务对账单生成、租户月账单出账与统计报表汇总' :
            locale === 'ja' ? '月次請求書発行、月間レポート集計に必須のスケジュール' :
            locale === 'es' ? 'Generación de facturación mensual y estados financieros' :
            locale === 'de' ? 'Monatliche Abrechnungszyklen und Gesamtstatistiken' :
            locale === 'fr' ? 'Facturation mensuelle et génération des états financiers' :
            'Monthly invoicing, tenant billing, and analytics snapshot generation.',
      badge: 'Monthly Report'
    }
  ];

  // 3. JSON & TypeScript Mapping Cheatsheet
  const jsonItems = [
    {
      id: 'j1',
      name: locale === 'zh' ? '用户实体与 Snowflake ID 契约' : locale === 'ja' ? 'ユーザーエンティティと 64bit ID' : locale === 'es' ? 'Entidad Usuario e ID Snowflake' : locale === 'de' ? 'Benutzer-Entity & 64-Bit-ID' : locale === 'fr' ? 'Entité Utilisateur & ID Snowflake' : 'User Entity & Snowflake ID',
      example: '{\n  "userId": "9007199254740993",\n  "username": "alex_developer",\n  "isActive": true,\n  "role": "admin",\n  "createdAt": "2026-09-10T08:00:00Z"\n}',
      desc: locale === 'zh' ? '64 位 ID 强制采用字符串传输，防止前端 JavaScript 精度损坏' :
            locale === 'ja' ? 'JavaScript の 64 ビット整数精度損失を防ぐため、ID を文字列型で定義' :
            locale === 'es' ? 'Transmisión segura de enteros de 64 bits como cadenas de texto' :
            locale === 'de' ? 'Übertragung von 64-Bit-IDs als String zur Vermeidung von Präzisionsfehlern' :
            locale === 'fr' ? 'Transmission des identifiants 64 bits en chaînes pour éviter la troncature' :
            'Transmits 64-bit snowflake IDs as strings to prevent JavaScript integer truncation.',
      badge: 'Type Safety'
    },
    {
      id: 'j2',
      name: locale === 'zh' ? '复杂嵌套列表与分页响应' : locale === 'ja' ? 'ネストされた配列とページネーション' : locale === 'es' ? 'Lista Anidada y Paginación' : locale === 'de' ? 'Verschachtelte Liste & Paginierung' : locale === 'fr' ? 'Liste Imbriquée & Pagination' : 'Paginated API Response Contract',
      example: '{\n  "code": 200,\n  "message": "success",\n  "data": {\n    "page": 1,\n    "pageSize": 20,\n    "items": [\n      {"id": 101, "sku": "TOOL-DEV-01", "stock": 45}\n    ]\n  }\n}',
      desc: locale === 'zh' ? '标准企业微服务分页响应模型，便于一键生成规范的泛型接口' :
            locale === 'ja' ? '企業向けマイクロサービスの標準ページネーション形式' :
            locale === 'es' ? 'Modelo estándar de paginación para APIs REST empresariales' :
            locale === 'de' ? 'Standardisiertes Paginierungsmodell für Microservices' :
            locale === 'fr' ? 'Modèle standard de pagination pour microservices' :
            'Industry standard wrapper for paginated REST API endpoints.',
      badge: 'API Standard'
    }
  ];

  return (
    <section id="cheatsheet" className="w-full max-w-5xl mx-auto my-12 px-4">
      {/* 头部标题与简介 */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0071E3]/10 text-[#0071E3] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{nav.cheatsheetTab || 'Cheatsheet'}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            {nav.cheatsheetTitle || 'Developer Syntax & Naming Cheatsheet'}
          </h2>
          <p className="text-sm text-[#86868B] mt-1 max-w-2xl">
            {nav.cheatsheetSubtitle || 'Interactive reference matrix for code conventions, crontab patterns, and JSON data structures.'}
          </p>
        </div>

        {/* 切换 Tab 按钮 */}
        <div className="flex p-1 bg-black/[0.05] dark:bg-white/[0.08] rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('naming')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'naming'
                ? 'bg-white dark:bg-[#1D1D1F] text-[#1D1D1F] dark:text-white shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Case Naming</span>
          </button>

          <button
            onClick={() => setActiveTab('cron')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'cron'
                ? 'bg-white dark:bg-[#1D1D1F] text-[#1D1D1F] dark:text-white shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Cron Schedule</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'json'
                ? 'bg-white dark:bg-[#1D1D1F] text-[#1D1D1F] dark:text-white shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <FileJson className="w-3.5 h-3.5" />
            <span>JSON & Types</span>
          </button>
        </div>
      </div>

      {/* 列表内容卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab === 'naming' &&
          namingItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] rounded-2xl p-4 transition-all hover:border-[#0071E3]/40 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#1D1D1F] dark:text-[#F5F5F7] text-base font-mono">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-black/[0.04] dark:bg-white/[0.06] text-[#86868B]">
                    {item.badge}
                  </span>
                </div>
                <div className="bg-black/[0.03] dark:bg-white/[0.04] rounded-lg px-3 py-2 font-mono text-sm text-[#0071E3] dark:text-[#2997FF] break-all mb-2 flex items-center justify-between">
                  <span>{item.example}</span>
                  <button
                    onClick={() => handleCopy(item.example, item.id)}
                    className="ml-2 text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white"
                    title="Copy sample"
                  >
                    {copiedIndex === item.id ? <Check className="w-3.5 h-3.5 text-[#28CD41]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed mb-4">{item.desc}</p>
              </div>

              <button
                onClick={() => onTryExample(item.example, 'case')}
                className="w-full mt-auto py-2 px-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] text-[#1D1D1F] dark:text-[#F5F5F7] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all group"
              >
                <span>{nav.tryExample || 'Try It in Converter'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}

        {activeTab === 'cron' &&
          cronItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] rounded-2xl p-4 transition-all hover:border-[#0071E3]/40 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#1D1D1F] dark:text-[#F5F5F7] text-sm">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#34C759]/10 text-[#34C759]">
                    {item.badge}
                  </span>
                </div>
                <div className="bg-black/[0.03] dark:bg-white/[0.04] rounded-lg px-3 py-2 font-mono text-base font-bold text-[#0071E3] dark:text-[#2997FF] break-all mb-2 flex items-center justify-between">
                  <span>{item.example}</span>
                  <button
                    onClick={() => handleCopy(item.example, item.id)}
                    className="ml-2 text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white"
                    title="Copy cron pattern"
                  >
                    {copiedIndex === item.id ? <Check className="w-3.5 h-3.5 text-[#28CD41]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed mb-4">{item.desc}</p>
              </div>

              <button
                onClick={() => onTryExample(item.example, 'cron')}
                className="w-full mt-auto py-2 px-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] text-[#1D1D1F] dark:text-[#F5F5F7] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all group"
              >
                <span>{nav.tryExample || 'Visualize Timeline'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}

        {activeTab === 'json' &&
          jsonItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] rounded-2xl p-4 transition-all hover:border-[#0071E3]/40 hover:shadow-md flex flex-col justify-between md:col-span-1"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#1D1D1F] dark:text-[#F5F5F7] text-sm">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#AF52DE]/10 text-[#AF52DE]">
                    {item.badge}
                  </span>
                </div>
                <pre className="bg-black/[0.03] dark:bg-white/[0.04] rounded-lg p-3 font-mono text-xs text-[#1D1D1F] dark:text-[#F5F5F7] overflow-x-auto mb-2 relative">
                  <code>{item.example}</code>
                  <button
                    onClick={() => handleCopy(item.example, item.id)}
                    className="absolute top-2 right-2 text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white"
                    title="Copy JSON"
                  >
                    {copiedIndex === item.id ? <Check className="w-3.5 h-3.5 text-[#28CD41]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </pre>
                <p className="text-xs text-[#86868B] leading-relaxed mb-4">{item.desc}</p>
              </div>

              <button
                onClick={() => onTryExample(item.example, 'json')}
                className="w-full mt-auto py-2 px-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] text-[#1D1D1F] dark:text-[#F5F5F7] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all group"
              >
                <span>{nav.tryExample || 'Format & Generate TS'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
