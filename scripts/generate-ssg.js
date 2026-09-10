/* ==========================================================================
   [SEO & GEO 静态预渲染与 Sitemap 自动生成脚本]
   - 在 vite build 后自动执行，预生成 6 种主流语言的三套工具静态页面：
     1. 大小写转换器: /, /es/, /ja/, /de/, /fr/, /zh/
     2. Cron 表达式可视化: /cron/, /es/cron/, /ja/cron/, /de/cron/, /fr/cron/, /zh/cron/
     3. JSON 在线处理 & TS 生成: /json/, /es/json/, /ja/json/, /de/json/, /fr/json/, /zh/json/
   - 注入绝对路径 canonical、双向工具级 hreflang、OpenGraph、JSON-LD (SoftwareApplication + FAQPage)
   - 预渲染语义化 HTML 骨架（含 H1、功能特征、规范对照表与 FAQ 问答），彻底解决爬虫白屏痛点！
   ========================================================================== */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const BASE_DOMAIN = 'https://devtoolai.xyz';

const baseHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('Base index.html not found in dist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

const locales = [
  {
    code: 'en',
    lang: 'en',
    ogLocale: 'en_US',
    case: {
      title: 'Letter Case & Text Converter - Free Online Developer Utility',
      desc: 'Free, instant online letter case and text format converter. Convert UPPERCASE, lowercase, Title Case, camelCase, snake_case with privacy-first client-side speed.',
      keywords: 'case converter, uppercase, lowercase, title case, camelCase, snake_case, text formatter, online developer tool',
      appName: 'Letter Case & Text Converter',
    },
    cron: {
      title: 'Cron Expression Visualizer & Timeline Simulator - Free Online Tool',
      desc: 'Free, instant Cron expression visualizer for Linux 5-field, Spring 6-field, and Quartz crontabs. Human-readable translation and upcoming execution timestamps.',
      keywords: 'cron visualizer, crontab guru, spring cron generator, cron parser, cron schedule simulator, quartz cron',
      appName: 'Cron Expression Visualizer',
    },
    json: {
      title: 'JSON Formatter, Validator & TypeScript Interface Generator',
      desc: 'Free, privacy-first online JSON formatter, minifier, escape/unescape tool, and instant TypeScript interface generator with zero data upload.',
      keywords: 'json formatter, json validator, json to typescript, json prettifier, json minify, json escape, online dev tool',
      appName: 'JSON Formatter & TypeScript Generator',
    },
  },
  {
    code: 'es',
    lang: 'es',
    ogLocale: 'es_ES',
    case: {
      title: 'Convertidor de Mayúsculas y Minúsculas - Herramienta Online Gratis',
      desc: 'Herramienta gratuita para cambiar mayúsculas y minúsculas online. Convierta a MAYÚSCULAS, minúsculas, Title Case, camelCase, snake_case en tiempo real.',
      keywords: 'convertidor mayusculas minusculas, cambiar mayusculas a minusculas, camelCase, snake_case, formato de texto',
      appName: 'Convertidor de Mayúsculas y Minúsculas',
    },
    cron: {
      title: 'Visualizador de Expresiones Cron - Simulador de Próximas Ejecuciones',
      desc: 'Herramienta gratuita para visualizar y traducir expresiones cron de Linux, Spring y Quartz a lenguaje natural.',
      keywords: 'visualizador cron, expresiones cron, spring cron, crontab generador, simular cron, quartz cron',
      appName: 'Visualizador de Expresiones Cron',
    },
    json: {
      title: 'Formateador JSON, Validador y Generador TypeScript Online',
      desc: 'Formatee, comprima y convierta JSON a interfaces TypeScript en su navegador de forma rápida y 100% segura.',
      keywords: 'formateador json, validar json, json a typescript, minificar json, escapar json',
      appName: 'Formateador JSON y Generador TypeScript',
    },
  },
  {
    code: 'ja',
    lang: 'ja',
    ogLocale: 'ja_JP',
    case: {
      title: '英字大文字・小文字変換ツール - 完全無料オンラインテキスト整形',
      desc: '大文字・小文字の即時相互変換、camelCase、snake_case、タイトル形式への整形がブラウザ内で完結する無料オンラインツール。',
      keywords: '大文字 小文字 変換, キャメルケース 変換, スネークケース, テキスト整形, 英字変換',
      appName: '英字大文字・小文字変換ツール',
    },
    cron: {
      title: 'Cron 式ビジュアライザー＆実行時刻シミュレーター - 無料ツール',
      desc: 'Linux 5桁、Spring 6桁、Quartz の Cron 式を日本語で分かりやすく解説し、次回以降の実行予定時刻をシミュレーションします。',
      keywords: 'cron 式 変換, crontab 見方, spring cron ジェネレーター, cron スケジュール シミュレーター',
      appName: 'Cron 式ビジュアライザー',
    },
    json: {
      title: 'JSON 整形・構文チェック・TypeScript 型定義生成 - 無料オンライン',
      desc: 'JSON フォーマッター、圧縮、Unicode 復元、TypeScript 型定義自動生成。100% ブラウザ完結で外部送信ゼロ。',
      keywords: 'json 整形, json バリデータ, json typescript 変換, json 圧縮, json エスケープ',
      appName: 'JSON 整形・TypeScript 生成',
    },
  },
  {
    code: 'de',
    lang: 'de',
    ogLocale: 'de_DE',
    case: {
      title: 'Groß- und Kleinschreibung Konverter - Kostenloses Online-Tool',
      desc: 'Kostenloser Online-Konverter für Groß- und Kleinschreibung. Wandeln Sie Text blitzschnell in GROSSBUCHSTABEN, camelCase und snake_case um.',
      keywords: 'groß kleinschreibung konverter, text in großbuchstaben umwandeln, camelCase, snake_case, text formatierer',
      appName: 'Groß- und Kleinschreibung Konverter',
    },
    cron: {
      title: 'Cron-Ausdruck Visualisierer & Zeitplan-Simulator - Kostenloses Tool',
      desc: 'Kostenloses Tool zur Visualisierung von Cron-Ausdrücken für Linux, Spring Boot und Quartz. Verständliche Klartext-Erklärung.',
      keywords: 'cron ausdruck visualisierer, crontab generator, spring boot cron, cron zeitplan',
      appName: 'Cron-Ausdruck Visualisierer',
    },
    json: {
      title: 'JSON Formatierer, Validator & TypeScript Generator - Kostenlos',
      desc: 'JSON formatieren, komprimieren, maskieren und in TypeScript-Interfaces umwandeln. 100% lokal im Browser.',
      keywords: 'json formatierer, json validator, json in typescript, json minifizieren, dev tools',
      appName: 'JSON Formatierer & TypeScript Generator',
    },
  },
  {
    code: 'fr',
    lang: 'fr',
    ogLocale: 'fr_FR',
    case: {
      title: 'Convertisseur de Casse & Majuscules - Outil Gratuit en Ligne',
      desc: 'Convertisseur de texte et de casse gratuit. Transformez instantanément en MAJUSCULES, minuscules, Title Case, camelCase et snake_case.',
      keywords: 'convertisseur majuscule minuscule, changer majuscule en minuscule, camelCase, snake_case, formater texte',
      appName: 'Convertisseur de Casse & Majuscules',
    },
    cron: {
      title: 'Visualiseur d’Expressions Cron & Simulateur d’Exécution',
      desc: 'Outil gratuit pour traduire les expressions cron Linux, Spring et Quartz en langage clair et afficher les prochaines exécutions.',
      keywords: 'visualiseur cron, cron expression, spring cron, crontab générateur',
      appName: 'Visualiseur d’Expressions Cron',
    },
    json: {
      title: 'Formateur JSON, Validateur & Générateur TypeScript Gratuit',
      desc: 'Formatez, compressez et convertissez votre JSON en interfaces TypeScript en un clic. 100% local et sécurisé.',
      keywords: 'formateur json, validateur json, json vers typescript, minifier json, échapper json',
      appName: 'Formateur JSON & Générateur TypeScript',
    },
  },
  {
    code: 'zh',
    lang: 'zh-CN',
    ogLocale: 'zh_CN',
    case: {
      title: '英文字母大小写转换器 - 免费在线代码变量与文本格式化工具',
      desc: '免费在线英文字母大小写转换器。支持全大写、全小写、首字母大写、驼峰转换、下划线转换、中横线、清除空格与特殊符号，本地秒级计算。',
      keywords: '英文字母大小写转换, 大小写转换器, 驼峰转换, 文本格式化, 下划线转驼峰, 在线工具',
      appName: '英文字母大小写转换器',
    },
    cron: {
      title: 'Cron 表达式可视化解析与未来时间模拟器 - 支持 Linux & Spring 6位 & Quartz',
      desc: '免费在线 Cron 表达式解析器，支持标准 Linux 5 位、Spring 6 位与 Quartz 7 位表达式中文直译，实时模拟接下来 7 次触发时间。',
      keywords: 'cron 表达式解析, cron 在线解析, crontab 执行时间, spring cron 生成器, quartz cron 表达式',
      appName: 'Cron 表达式可视化解析器',
    },
    json: {
      title: 'JSON 在线解析格式化、语法校验与 TS 接口生成器 - 纯本地极速隐私',
      desc: '免费在线 JSON 格式化工具。支持 2/4 空格美化、单行压缩、字符串转义/去除转义、Unicode 中文互转与一键生成 TypeScript Interface。',
      keywords: 'json格式化, json在线解析, json校验, json转typescript, json转义, json压缩, json unicode转换',
      appName: 'JSON 格式化与 TS 生成器',
    },
  },
];

function buildHreflangTags(target) {
  const getTargetUrl = (localeCode) => {
    let sub = '';
    if (target === 'cron') sub = 'cron/';
    else if (target === 'json') sub = 'json/';
    else if (['about', 'privacy', 'terms', 'contact'].includes(target)) sub = `${target}/`;
    if (localeCode === 'en') return `${BASE_DOMAIN}/${sub}`;
    return `${BASE_DOMAIN}/${localeCode}/${sub}`;
  };

  return `
    <link rel="alternate" hreflang="x-default" href="${getTargetUrl('en')}" />
    <link rel="alternate" hreflang="en" href="${getTargetUrl('en')}" />
    <link rel="alternate" hreflang="es" href="${getTargetUrl('es')}" />
    <link rel="alternate" hreflang="ja" href="${getTargetUrl('ja')}" />
    <link rel="alternate" hreflang="de" href="${getTargetUrl('de')}" />
    <link rel="alternate" hreflang="fr" href="${getTargetUrl('fr')}" />
    <link rel="alternate" hreflang="zh" href="${getTargetUrl('zh')}" />`;
}

function buildArticleHreflangTags(slug) {
  const getUrl = (localeCode) => {
    if (localeCode === 'en') return `${BASE_DOMAIN}/articles/${slug}/`;
    return `${BASE_DOMAIN}/${localeCode}/articles/${slug}/`;
  };

  return `
    <link rel="alternate" hreflang="x-default" href="${getUrl('en')}" />
    <link rel="alternate" hreflang="en" href="${getUrl('en')}" />
    <link rel="alternate" hreflang="es" href="${getUrl('es')}" />
    <link rel="alternate" hreflang="ja" href="${getUrl('ja')}" />
    <link rel="alternate" hreflang="de" href="${getUrl('de')}" />
    <link rel="alternate" hreflang="fr" href="${getUrl('fr')}" />
    <link rel="alternate" hreflang="zh" href="${getUrl('zh')}" />`;
}

import { 
  ssgCheatsheetByLocale, 
  ssgGuidesByLocale, 
  ssgMetaByLocale,
  ssgHowToByLocale,
  ssgUseCasesByLocale,
  ssgFaqByLocale
} from './ssg-data.js';
import { ssgComplianceData } from './ssg-compliance-data.js';
import { ssgArticlesData } from './ssg-articles-data.js';
import { geoLabelsByLocale, geoTakeawaysData } from './geo-takeaways-data.js';

function buildFaqSchema(localeCode = 'en') {
  const faq = ssgFaqByLocale[localeCode] || ssgFaqByLocale.en;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };
  return `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
}

// 为技术长文生成深度 TechArticle 与 BreadcrumbList 结构化 Schema (面向 Google AI Overviews & GEO)
function buildArticleJsonLdSchema(article, canonicalUrl, locale) {
  const homeUrl = locale.code === 'en' ? `${BASE_DOMAIN}/` : `${BASE_DOMAIN}/${locale.code}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${BASE_DOMAIN}/#website`,
          "name": "DevText Toolkit",
          "url": BASE_DOMAIN
        },
        "headline": article.title,
        "description": article.summary,
        "inLanguage": locale.lang,
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2026-09-01T08:00:00+00:00",
        "dateModified": "2026-09-10T08:00:00+00:00",
        "articleSection": article.category,
        "author": {
          "@type": "Organization",
          "name": "DevText Engineering Lab",
          "url": BASE_DOMAIN
        },
        "publisher": {
          "@type": "Organization",
          "name": "DevText Toolkit",
          "url": BASE_DOMAIN,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_DOMAIN}/favicon.svg`
          }
        },
        "keywords": [
          article.category,
          "code architecture",
          "developer guide",
          "devtext"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": homeUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Guides",
            "item": `${homeUrl}#guides`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };
  return `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
}

const adLabelsByLocale = {
  en: 'Advertisement',
  zh: '赞助展示',
  es: 'Publicidad',
  ja: '広告',
  de: 'Anzeige',
  fr: 'Publicité',
};

function buildStaticAdSenseBanner(localeCode = 'en') {
  const adLabel = adLabelsByLocale[localeCode] || 'Advertisement';
  return `
      <div class="adsense-container" style="margin: 2rem auto; max-width: 896px; text-align: center; overflow: hidden; min-height: 90px;">
        <span style="display: block; font-size: 0.7rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${adLabel}</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-2337968729641235"
             data-ad-slot="auto"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
  `;
}

// 生成语义化预渲染 HTML 骨架 (为爬虫与 AdSense 审核注入数千字高价值发布商内容与代码规范表格)
function buildSemanticPrerenderHtml(title, desc, tool, localeCode = 'en') {
  const cheatsheet = ssgCheatsheetByLocale[localeCode] || ssgCheatsheetByLocale.en;
  const guides = ssgGuidesByLocale[localeCode] || ssgGuidesByLocale.en;
  const meta = ssgMetaByLocale[localeCode] || ssgMetaByLocale.en;
  const howTo = ssgHowToByLocale[localeCode] || ssgHowToByLocale.en;
  const useCases = ssgUseCasesByLocale[localeCode] || ssgUseCasesByLocale.en;
  const faq = ssgFaqByLocale[localeCode] || ssgFaqByLocale.en;

  const tableRowsHtml = cheatsheet.rows.map(r => `
    <tr style="border-bottom: 1px solid rgba(0,0,0,0.06);">
      <td style="padding: 0.75rem 1rem; font-family: monospace; font-weight: 700; color: #1d1d1f;">${r.name}</td>
      <td style="padding: 0.75rem 1rem; font-family: monospace; color: #0071e3; background: rgba(0,113,227,0.04);">${r.example}</td>
      <td style="padding: 0.75rem 1rem; color: #424245; font-size: 0.85rem;">${r.usage}</td>
    </tr>
  `).join('');

  const articlesHtml = guides.map(g => `
    <article style="background: #ffffff; border-radius: 1.25rem; border: 1px solid rgba(0,0,0,0.08); padding: 1.75rem; margin-bottom: 2rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span style="font-size: 0.75rem; font-weight: 600; color: #0071e3; background: rgba(0,113,227,0.08); padding: 0.25rem 0.6rem; border-radius: 9999px;">${g.category}</span>
        <span style="font-size: 0.75rem; color: #86868b;">⏱️ ${g.readTime}</span>
      </div>
      <h3 style="font-size: 1.35rem; font-weight: 700; color: #1d1d1f; margin: 0 0 1rem 0; line-height: 1.4;">${g.title}</h3>
      <p style="font-size: 0.95rem; color: #333336; line-height: 1.6; margin-bottom: 0.75rem;">${g.p1}</p>
      <p style="font-size: 0.95rem; color: #333336; line-height: 1.6; margin-bottom: 1rem;">${g.p2}</p>
      
      <div style="background: #18181a; border-radius: 0.75rem; overflow: hidden; margin: 1rem 0;">
        <div style="padding: 0.5rem 1rem; background: #121214; color: #86868b; font-size: 0.75rem; font-family: monospace; border-bottom: 1px solid rgba(255,255,255,0.08);">
          ● ● ● &nbsp; ${g.codeTitle}
        </div>
        <pre style="margin: 0; padding: 1rem; color: #e5e5ea; font-family: monospace; font-size: 0.82rem; overflow-x: auto; line-height: 1.5;"><code>${g.code}</code></pre>
      </div>

      <div style="background: rgba(0,113,227,0.05); border-left: 4px solid #0071e3; padding: 0.75rem 1rem; border-radius: 0 0.5rem 0.5rem 0; font-size: 0.85rem; color: #0071e3; margin-top: 1rem; font-weight: 500;">
        💡 ${g.tip}
      </div>
    </article>
  `).join('');

  return `
    <div style="max-width: 1024px; margin: 0 auto; padding: 2rem 1rem; font-family: system-ui, -apple-system, sans-serif; color: #1D1D1F;">
      <header style="margin-bottom: 2rem;">
        <h1 style="font-size: 2rem; font-weight: 800; color: #1D1D1F; margin-bottom: 0.75rem; line-height: 1.25;">${title}</h1>
        <p style="font-size: 1.05rem; color: #86868B; line-height: 1.5;">${desc}</p>
      </header>

      <main style="background: #ffffff; border-radius: 1.5rem; padding: 1.5rem; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 2rem;">
        <p style="font-size: 0.9rem; color: #0071E3; font-weight: 600; margin-bottom: 0.5rem;">${meta.privacySafety}</p>
        <p style="font-size: 0.85rem; color: #86868B;">${meta.privacySubtitle}</p>
      </main>

      ${buildStaticAdSenseBanner(localeCode)}

      <section id="how-to" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1D1D1F; margin-bottom: 0.5rem;">${howTo.title}</h2>
        <p style="font-size: 0.95rem; color: #86868B; margin-bottom: 1.5rem;">${howTo.subtitle}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${howTo.steps.map(s => `
            <div style="background: #ffffff; border-radius: 1rem; border: 1px solid rgba(0,0,0,0.08); padding: 1.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
              <div style="font-size: 0.8rem; font-weight: 700; color: #0071e3; margin-bottom: 0.5rem; font-family: monospace;">STEP ${s.step}</div>
              <h3 style="font-size: 1.05rem; font-weight: 600; color: #1d1d1f; margin: 0 0 0.5rem 0;">${s.title}</h3>
              <p style="font-size: 0.88rem; color: #515154; line-height: 1.5; margin: 0;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="use-cases" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1D1D1F; margin-bottom: 0.5rem;">${useCases.title}</h2>
        <p style="font-size: 0.95rem; color: #86868B; margin-bottom: 1.5rem;">${useCases.subtitle}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${useCases.cases.map(c => `
            <div style="background: #ffffff; border-radius: 1rem; border: 1px solid rgba(0,0,0,0.08); padding: 1.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
              <div style="font-size: 0.75rem; font-weight: 600; color: #34c759; margin-bottom: 0.5rem;">${c.tag}</div>
              <h3 style="font-size: 1.05rem; font-weight: 600; color: #1d1d1f; margin: 0 0 0.75rem 0;">${c.title}</h3>
              <p style="font-size: 0.85rem; color: #6e6e73; line-height: 1.5; margin-bottom: 0.75rem;"><strong>Problem:</strong> ${c.problem}</p>
              <p style="font-size: 0.85rem; color: #1d1d1f; line-height: 1.5; margin-bottom: 0.75rem;"><strong>Solution:</strong> ${c.solution}</p>
              <div style="background: #f5f5f7; border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-family: monospace; font-size: 0.8rem; color: #0071e3;">
                ${c.example}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="cheatsheet" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1D1D1F; margin-bottom: 0.5rem;">${cheatsheet.title}</h2>
        <p style="font-size: 0.95rem; color: #86868B; margin-bottom: 1.25rem;">${cheatsheet.subtitle}</p>
        <div style="overflow-x: auto; background: #ffffff; border-radius: 1rem; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
            <thead>
              <tr style="background: rgba(0,0,0,0.03); border-bottom: 1px solid rgba(0,0,0,0.08);">
                <th style="padding: 0.75rem 1rem; font-weight: 600; color: #1D1D1F;">${cheatsheet.thStyle}</th>
                <th style="padding: 0.75rem 1rem; font-weight: 600; color: #1D1D1F;">${cheatsheet.thExample}</th>
                <th style="padding: 0.75rem 1rem; font-weight: 600; color: #1D1D1F;">${cheatsheet.thUsage}</th>
              </tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </section>

      <section id="guides" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #1D1D1F; margin-bottom: 0.5rem;">${meta.guidesSectionTitle}</h2>
        <p style="font-size: 0.95rem; color: #86868B; margin-bottom: 1.75rem;">${meta.guidesSectionSubtitle}</p>
        <div style="display: flex; flex-direction: column;">
          ${articlesHtml}
        </div>
      </section>

      <section id="faq" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1D1D1F; margin-bottom: 0.5rem;">${faq.title}</h2>
        <p style="font-size: 0.95rem; color: #86868B; margin-bottom: 1.5rem;">${faq.subtitle}</p>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${faq.items.map((f, idx) => `
            <div style="background: #ffffff; border-radius: 1rem; border: 1px solid rgba(0,0,0,0.08); padding: 1.25rem 1.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
              <h3 style="font-size: 1rem; font-weight: 600; color: #1d1d1f; margin: 0 0 0.5rem 0;">
                <span style="color: #0071e3; font-family: monospace;">Q${idx + 1}. </span>${f.question}
              </h3>
              <p style="font-size: 0.9rem; color: #424245; line-height: 1.6; margin: 0;">${f.answer}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.08); font-size: 0.8rem; color: #86868B; text-align: center;">
        <p style="margin-bottom: 0.75rem;">${meta.footerNotice}</p>
        <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.5rem;">
          <a href="${localeCode === 'en' ? '/about/' : `/${localeCode}/about/`}" style="color: #86868B; text-decoration: underline;">${complianceNavByLocale[localeCode]?.about || complianceNavByLocale.en.about}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/privacy/' : `/${localeCode}/privacy/`}" style="color: #86868B; text-decoration: underline;">${complianceNavByLocale[localeCode]?.privacy || complianceNavByLocale.en.privacy}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/terms/' : `/${localeCode}/terms/`}" style="color: #86868B; text-decoration: underline;">${complianceNavByLocale[localeCode]?.terms || complianceNavByLocale.en.terms}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/contact/' : `/${localeCode}/contact/`}" style="color: #86868B; text-decoration: underline;">${complianceNavByLocale[localeCode]?.contact || complianceNavByLocale.en.contact}</a>
        </div>
      </footer>
    </div>
  `;
}

const complianceNavByLocale = {
  en: { about: 'About Us', privacy: 'Privacy Policy', terms: 'Terms of Service', contact: 'Contact Us', home: 'Home', back: 'Back to Developer Utilities', officialEmail: 'Official Contact Email' },
  zh: { about: '关于我们', privacy: '隐私政策', terms: '服务条款', contact: '联系我们', home: '首页', back: '返回开发者工具箱', officialEmail: '官方联系邮箱' },
  es: { about: 'Sobre Nosotros', privacy: 'Política de Privacidad', terms: 'Términos de Servicio', contact: 'Contacto', home: 'Inicio', back: 'Volver a Herramientas', officialEmail: 'Correo Oficial de Contacto' },
  ja: { about: '会社・開発者概要', privacy: 'プライバシーポリシー', terms: '利用規約', contact: 'お問い合わせ', home: 'ホーム', back: 'ツール一覧に戻る', officialEmail: '公式連絡先メール' },
  de: { about: 'Über Uns', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', contact: 'Kontakt', home: 'Startseite', back: 'Zurück zu den Tools', officialEmail: 'Offizielle E-Mail' },
  fr: { about: 'À Propos', privacy: 'Politique de Confidentialité', terms: 'Conditions d\'Utilisation', contact: 'Contact', home: 'Accueil', back: 'Retour aux outils', officialEmail: 'Email Officiel de Contact' },
};

// 为爬虫与 AdSense 审核预渲染完整合规页面 (关于我们、隐私政策、服务条款、联系我们)
function buildCompliancePrerenderHtml(pageType, localeCode = 'en') {
  const pageData = ssgComplianceData[localeCode]?.[pageType] || ssgComplianceData.en[pageType];
  const ui = complianceNavByLocale[localeCode] || complianceNavByLocale.en;
  const homeHref = localeCode === 'en' ? '/' : `/${localeCode}/`;

  const sectionsHtml = pageData.sections.map(sec => `
    <section style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 700; color: #1d1d1f; margin-bottom: 0.75rem;">${sec.title}</h2>
      ${sec.paragraphs.map(p => `<p style="font-size: 0.95rem; color: #333336; line-height: 1.65; margin-bottom: 0.75rem;">${p}</p>`).join('')}
    </section>
  `).join('');

  let contactBoxHtml = '';
  if (pageType === 'contact' && pageData.contactEmail) {
    contactBoxHtml = `
      <div style="margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.08);">
        <div style="background: #f5f5f7; border-radius: 1rem; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 600; color: #86868b; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">${ui.officialEmail}</span>
            <a href="mailto:${pageData.contactEmail}" style="font-size: 1.1rem; font-family: monospace; font-weight: 700; color: #0071e3; text-decoration: none;">${pageData.contactEmail}</a>
          </div>
          <a href="mailto:${pageData.contactEmail}" style="padding: 0.6rem 1.2rem; border-radius: 9999px; background: #0071e3; color: #ffffff; text-decoration: none; font-size: 0.85rem; font-weight: 600;">${ui.officialEmail} →</a>
        </div>
      </div>
    `;
  }

  return `
    <div style="max-width: 896px; margin: 0 auto; padding: 2rem 1rem; font-family: system-ui, -apple-system, sans-serif; color: #1d1d1f;">
      <nav style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(0,0,0,0.08); font-size: 0.85rem; color: #86868b;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <a href="${homeHref}" style="color: #86868b; text-decoration: none;">${ui.home}</a>
          <span>/</span>
          <span style="color: #1d1d1f; font-weight: 500;">${pageData.title}</span>
        </div>
        <a href="${homeHref}" style="display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.4rem 0.9rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; background: #ffffff; border: 1px solid rgba(0,0,0,0.12); color: #1d1d1f; text-decoration: none;">
          ← ${ui.back}
        </a>
      </nav>

      <article style="background: #ffffff; border-radius: 1.5rem; padding: 2.25rem; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
        <header style="margin-bottom: 2rem;">
          <span style="display: inline-block; font-size: 0.75rem; font-weight: 600; color: #0071e3; background: rgba(0,113,227,0.08); padding: 0.25rem 0.6rem; border-radius: 9999px; margin-bottom: 0.75rem;">
            🛡️ ${pageData.badge}
          </span>
          <h1 style="font-size: 2.25rem; font-weight: 800; color: #1d1d1f; margin: 0 0 0.5rem 0; line-height: 1.25;">${pageData.title}</h1>
          <p style="font-size: 0.85rem; color: #86868b; margin: 0;">${pageData.lastUpdated}</p>
        </header>

        <div style="color: #333336; line-height: 1.6;">
          ${sectionsHtml}
        </div>

        ${contactBoxHtml}
      </article>

      <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.08); font-size: 0.8rem; color: #86868b; text-align: center;">
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="${localeCode === 'en' ? '/about/' : `/${localeCode}/about/`}" style="color: #86868b; text-decoration: underline;">${ui.about}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/privacy/' : `/${localeCode}/privacy/`}" style="color: #86868b; text-decoration: underline;">${ui.privacy}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/terms/' : `/${localeCode}/terms/`}" style="color: #86868b; text-decoration: underline;">${ui.terms}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/contact/' : `/${localeCode}/contact/`}" style="color: #86868b; text-decoration: underline;">${ui.contact}</a>
        </div>
      </footer>
    </div>
  `;
}

// 为爬虫与 AdSense 审核预渲染独立深度技术长文页面
function buildArticlePrerenderHtml(article, allArticles, localeCode = 'en') {
  const uiLabels = {
    en: { home: 'Home', guides: 'Technical Guides', author: 'DevText Engineering Lab', verified: '✓ Verified Technical Specification', back: 'Back to Developer Utilities', tryTool: 'Launch Related Developer Tool', moreGuides: 'More In-Depth Technical Guides' },
    zh: { home: '首页', guides: '技术专栏', author: 'DevText 工程架构实验室', verified: '✓ 生产级技术规范认证', back: '返回开发者工具箱', tryTool: '立即使用配套开发工具', moreGuides: '更多技术指南与深度长文' },
    es: { home: 'Inicio', guides: 'Guías Técnicas', author: 'Equipo de Ingeniería DevText', verified: '✓ Especificación Técnica Verificada', back: 'Volver a Herramientas', tryTool: 'Probar Herramienta Relacionada', moreGuides: 'Más Guías Técnicas' },
    ja: { home: 'ホーム', guides: '技術ガイド', author: 'DevText エンジニアリングチーム', verified: '✓ 実務検証済み技術仕様', back: 'ツール一覧に戻る', tryTool: '関連開発ツールを試す', moreGuides: 'その他の技術ガイド' },
    de: { home: 'Startseite', guides: 'Leitfäden', author: 'DevText Engineering-Team', verified: '✓ Verifizierte technische Spezifikation', back: 'Zurück zu den Tools', tryTool: 'Zugehöriges Entwickler-Tool testen', moreGuides: 'Weitere technische Leitfäden' },
    fr: { home: 'Accueil', guides: 'Guides Techniques', author: 'Équipe d\'Ingénierie DevText', verified: '✓ Spécification technique vérifiée', back: 'Retour aux outils', tryTool: 'Tester l\'outil développeur associé', moreGuides: 'Autres guides techniques' },
  };

  const ui = uiLabels[localeCode] || uiLabels.en;
  const comp = complianceNavByLocale[localeCode] || complianceNavByLocale.en;
  const homeHref = localeCode === 'en' ? '/' : `/${localeCode}/`;

  let toolHref = homeHref;
  if (article.id.includes('cron') || article.slug.includes('cron')) {
    toolHref = localeCode === 'en' ? '/cron/' : `/${localeCode}/cron/`;
  } else if (article.id.includes('json') || article.slug.includes('json')) {
    toolHref = localeCode === 'en' ? '/json/' : `/${localeCode}/json/`;
  }

  const geoLabel = geoLabelsByLocale[localeCode] || geoLabelsByLocale.en;
  const takeaways = geoTakeawaysData[article.id]?.[localeCode] || geoTakeawaysData[article.id]?.en || [];
  let takeawaysHtml = '';
  if (takeaways.length > 0) {
    takeawaysHtml = `
      <aside aria-label="Key Takeaways" style="margin-bottom: 2.5rem; padding: 1.5rem; background: rgba(0,113,227,0.04); border-radius: 1rem; border: 1px solid rgba(0,113,227,0.2);">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span style="font-size: 1.1rem;">⚡</span>
          <div>
            <h3 style="font-size: 1rem; font-weight: 700; color: #1d1d1f; margin: 0;">${geoLabel.title}</h3>
            <p style="font-size: 0.8rem; color: #86868b; margin: 0.15rem 0 0 0;">${geoLabel.subtitle}</p>
          </div>
        </div>
        <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.92rem; color: #333336; line-height: 1.65;">
          ${takeaways.map(t => `<li style="margin-bottom: 0.4rem;">${t}</li>`).join('')}
        </ul>
      </aside>
    `;
  }

  const sectionsHtml = article.sections.map(sec => {
    let calloutHtml = '';
    if (sec.callout) {
      calloutHtml = `
        <div style="background: rgba(0,113,227,0.05); border-left: 4px solid #0071e3; border-radius: 0 0.75rem 0.75rem 0; padding: 1rem 1.25rem; margin: 1.25rem 0;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #0071e3; margin: 0 0 0.25rem 0;">💡 ${sec.callout.title}</h4>
          <p style="font-size: 0.9rem; color: #333336; margin: 0; line-height: 1.6;">${sec.callout.text}</p>
        </div>
      `;
    }

    let codeHtml = '';
    if (sec.codeBlock) {
      codeHtml = `
        <div style="background: #18181a; border-radius: 0.75rem; overflow: hidden; margin: 1.25rem 0; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
          <div style="padding: 0.5rem 1rem; background: #121214; color: #86868b; font-size: 0.75rem; font-family: monospace; border-bottom: 1px solid rgba(255,255,255,0.08);">
            ● ● ● &nbsp; ${sec.codeBlock.title} (${sec.codeBlock.lang})
          </div>
          <pre style="margin: 0; padding: 1rem; color: #e5e5ea; font-family: monospace; font-size: 0.82rem; overflow-x: auto; line-height: 1.55;"><code>${sec.codeBlock.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      `;
    }

    return `
      <section style="margin-bottom: 2.25rem;">
        <h2 style="font-size: 1.4rem; font-weight: 700; color: #1d1d1f; margin-bottom: 0.75rem;">${sec.heading}</h2>
        ${sec.paragraphs.map(p => `<p style="font-size: 0.98rem; color: #333336; line-height: 1.7; margin-bottom: 0.75rem;">${p}</p>`).join('')}
        ${calloutHtml}
        ${codeHtml}
      </section>
    `;
  }).join('');

  const otherArticles = allArticles.filter(a => a.id !== article.id);
  const recommendedHtml = otherArticles.slice(0, 2).map(o => {
    const oHref = localeCode === 'en' ? `/articles/${o.slug}/` : `/${localeCode}/articles/${o.slug}/`;
    return `
      <a href="${oHref}" style="display: block; background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 1rem; padding: 1.25rem; text-decoration: none; color: inherit;">
        <span style="font-size: 0.75rem; font-weight: 600; color: #0071e3; display: block; margin-bottom: 0.25rem;">${o.category}</span>
        <h4 style="font-size: 1rem; font-weight: 700; color: #1d1d1f; margin: 0 0 0.5rem 0;">${o.title}</h4>
        <p style="font-size: 0.85rem; color: #86868b; margin: 0; line-height: 1.5;">${o.summary}</p>
      </a>
    `;
  }).join('');

  return `
    <div style="max-width: 896px; margin: 0 auto; padding: 2rem 1rem; font-family: system-ui, -apple-system, sans-serif; color: #1d1d1f;">
      <nav style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(0,0,0,0.08); font-size: 0.85rem; color: #86868b;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <a href="${homeHref}" style="color: #86868b; text-decoration: none;">${ui.home}</a>
          <span>/</span>
          <span>${ui.guides}</span>
          <span>/</span>
          <span style="color: #1d1d1f; font-weight: 500;">${article.title}</span>
        </div>
        <a href="${homeHref}" style="display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.4rem 0.9rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; background: #ffffff; border: 1px solid rgba(0,0,0,0.12); color: #1d1d1f; text-decoration: none;">
          ← ${ui.back}
        </a>
      </nav>

      <article style="background: #ffffff; border-radius: 1.5rem; padding: 2.25rem; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
        <header style="margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.06);">
          <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 1rem;">
            <span style="font-size: 0.75rem; font-weight: 600; color: #0071e3; background: rgba(0,113,227,0.08); padding: 0.25rem 0.6rem; border-radius: 9999px;">
              ${article.category}
            </span>
            <span style="font-size: 0.75rem; color: #86868b;">⏱️ ${article.readTime}</span>
            <span style="font-size: 0.75rem; color: #86868b;">• ${article.updatedDate}</span>
          </div>
          <h1 style="font-size: 2.25rem; font-weight: 800; color: #1d1d1f; margin: 0 0 1rem 0; line-height: 1.25;">${article.title}</h1>
          <p style="font-size: 1.05rem; color: #6e6e73; line-height: 1.6; margin: 0;">${article.summary}</p>
          <div style="margin-top: 1rem; font-size: 0.8rem; color: #34c759; font-weight: 600;">${ui.verified}</div>
        </header>

        ${takeawaysHtml}

        <div>
          ${sectionsHtml}
        </div>

        <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(0,113,227,0.04); border-radius: 1rem; border: 1px solid rgba(0,113,227,0.15); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #0071e3; text-transform: uppercase;">⚡ Interactive Developer Utility</span>
            <p style="font-size: 0.9rem; color: #1d1d1f; font-weight: 600; margin: 0.25rem 0 0 0;">Test expressions or convert styles live in your browser.</p>
          </div>
          <a href="${toolHref}" style="display: inline-block; padding: 0.6rem 1.2rem; background: #0071e3; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 0.8rem; font-weight: 600;">${ui.tryTool} →</a>
        </div>
      </article>

      ${buildStaticAdSenseBanner(localeCode)}

      <section style="margin-top: 3rem;">
        <h3 style="font-size: 1.2rem; font-weight: 700; color: #1d1d1f; margin-bottom: 1rem;">${ui.moreGuides}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          ${recommendedHtml}
        </div>
      </section>

      <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.08); font-size: 0.8rem; color: #86868b; text-align: center;">
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="${localeCode === 'en' ? '/about/' : `/${localeCode}/about/`}" style="color: #86868b; text-decoration: underline;">${comp.about}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/privacy/' : `/${localeCode}/privacy/`}" style="color: #86868b; text-decoration: underline;">${comp.privacy}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/terms/' : `/${localeCode}/terms/`}" style="color: #86868b; text-decoration: underline;">${comp.terms}</a>
          <span>•</span>
          <a href="${localeCode === 'en' ? '/contact/' : `/${localeCode}/contact/`}" style="color: #86868b; text-decoration: underline;">${comp.contact}</a>
        </div>
      </footer>
    </div>
  `;
}

// 1. 生成大小写转换多语言页面
for (const locale of locales) {
  const targetDir = locale.code === 'en' ? distDir : path.join(distDir, locale.code);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalPath = locale.code === 'en' ? '/' : `/${locale.code}/`;
  const canonicalUrl = `${BASE_DOMAIN}${canonicalPath}`;

  let localizedHtml = baseHtml
    .replace('<html lang="en">', `<html lang="${locale.lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${locale.case.title} - DevText</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${locale.case.desc}" />`)
    .replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${locale.case.keywords}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<!-- Multi-language SEO Hreflang Tags[\s\S]*?<link rel="canonical"/, `<!-- Multi-language SEO Hreflang Tags -->${buildHreflangTags('case')}\n    <link rel="canonical"`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${locale.case.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${locale.case.desc}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="${locale.ogLocale}" />`)
    .replace('data-locale="en"', `data-locale="${locale.code}"`)
    .replace('</head>', `${buildFaqSchema(locale.code)}\n  </head>`)
    .replace(/"name": "Letter Case & Text Converter"/g, `"name": "${locale.case.appName}"`)
    .replace(/"description": "Instant online letter case and code naming convention converter."/g, `"description": "${locale.case.desc.replace(/"/g, '\\"')}"`)
    .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildSemanticPrerenderHtml(locale.case.title, locale.case.desc, 'case', locale.code)}</div>`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), localizedHtml, 'utf-8');
  console.log(`✓ Generated: dist/${locale.code === 'en' ? '' : locale.code + '/'}index.html`);
}

// 2. 生成 Cron 表达式可视化多语言页面
for (const locale of locales) {
  const targetDir = locale.code === 'en' ? path.join(distDir, 'cron') : path.join(distDir, locale.code, 'cron');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalPath = locale.code === 'en' ? '/cron/' : `/${locale.code}/cron/`;
  const canonicalUrl = `${BASE_DOMAIN}${canonicalPath}`;

  let localizedHtml = baseHtml
    .replace('<html lang="en">', `<html lang="${locale.lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${locale.cron.title} - DevText</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${locale.cron.desc}" />`)
    .replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${locale.cron.keywords}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<!-- Multi-language SEO Hreflang Tags[\s\S]*?<link rel="canonical"/, `<!-- Multi-language SEO Hreflang Tags -->${buildHreflangTags('cron')}\n    <link rel="canonical"`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${locale.cron.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${locale.cron.desc}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="${locale.ogLocale}" />`)
    .replace('data-locale="en"', `data-locale="${locale.code}"`)
    .replace('</head>', `${buildFaqSchema(locale.code)}\n  </head>`)
    .replace(/"name": "Letter Case & Text Converter"/g, `"name": "${locale.cron.appName}"`)
    .replace(/"description": "Instant online letter case and code naming convention converter."/g, `"description": "${locale.cron.desc.replace(/"/g, '\\"')}"`)
    .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildSemanticPrerenderHtml(locale.cron.title, locale.cron.desc, 'cron', locale.code)}</div>`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), localizedHtml, 'utf-8');
  console.log(`✓ Generated: dist/${locale.code === 'en' ? 'cron/' : locale.code + '/cron/'}index.html`);
}

// 3. 生成 JSON 在线处理与 TS 生成多语言页面
for (const locale of locales) {
  const targetDir = locale.code === 'en' ? path.join(distDir, 'json') : path.join(distDir, locale.code, 'json');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalPath = locale.code === 'en' ? '/json/' : `/${locale.code}/json/`;
  const canonicalUrl = `${BASE_DOMAIN}${canonicalPath}`;

  let localizedHtml = baseHtml
    .replace('<html lang="en">', `<html lang="${locale.lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${locale.json.title} - DevText</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${locale.json.desc}" />`)
    .replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${locale.json.keywords}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<!-- Multi-language SEO Hreflang Tags[\s\S]*?<link rel="canonical"/, `<!-- Multi-language SEO Hreflang Tags -->${buildHreflangTags('json')}\n    <link rel="canonical"`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${locale.json.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${locale.json.desc}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="${locale.ogLocale}" />`)
    .replace('data-locale="en"', `data-locale="${locale.code}"`)
    .replace('</head>', `${buildFaqSchema(locale.code)}\n  </head>`)
    .replace(/"name": "Letter Case & Text Converter"/g, `"name": "${locale.json.appName}"`)
    .replace(/"description": "Instant online letter case and code naming convention converter."/g, `"description": "${locale.json.desc.replace(/"/g, '\\"')}"`)
    .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildSemanticPrerenderHtml(locale.json.title, locale.json.desc, 'json', locale.code)}</div>`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), localizedHtml, 'utf-8');
  console.log(`✓ Generated: dist/${locale.code === 'en' ? 'json/' : locale.code + '/json/'}index.html`);
}

// 4. 生成四大合规页面 (About, Privacy, Terms, Contact) 24 个多语言 SSG 静态页面
const compliancePages = ['about', 'privacy', 'terms', 'contact'];
for (const pageType of compliancePages) {
  for (const locale of locales) {
    const targetDir = locale.code === 'en'
      ? path.join(distDir, pageType)
      : path.join(distDir, locale.code, pageType);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const canonicalPath = locale.code === 'en' ? `/${pageType}/` : `/${locale.code}/${pageType}/`;
    const canonicalUrl = `${BASE_DOMAIN}${canonicalPath}`;
    const pageData = ssgComplianceData[locale.code]?.[pageType] || ssgComplianceData.en[pageType];
    const pageDesc = pageData.sections[0]?.paragraphs[0]?.slice(0, 160) || pageData.title;

    let localizedHtml = baseHtml
      .replace('<html lang="en">', `<html lang="${locale.lang}">`)
      .replace(/<title>.*?<\/title>/, `<title>${pageData.title} - DevText</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${pageDesc.replace(/"/g, '&quot;')}" />`)
      .replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="devtext, ${pageType}, developer utilities, privacy, terms, contact" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
      .replace(/<!-- Multi-language SEO Hreflang Tags[\s\S]*?<link rel="canonical"/, `<!-- Multi-language SEO Hreflang Tags -->${buildHreflangTags(pageType)}\n    <link rel="canonical"`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${pageData.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${pageDesc.replace(/"/g, '&quot;')}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
      .replace(/<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="${locale.ogLocale}" />`)
      .replace('data-locale="en"', `data-locale="${locale.code}"`)
      .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildCompliancePrerenderHtml(pageType, locale.code)}</div>`);

    fs.writeFileSync(path.join(targetDir, 'index.html'), localizedHtml, 'utf-8');
    console.log(`✓ Generated: dist/${locale.code === 'en' ? pageType + '/' : locale.code + '/' + pageType + '/'}index.html`);
  }
}

// 5. 生成四大技术专栏长文 24 个多语言 SSG 静态页面 (4 篇深度技术指南 × 6 种语言)
for (const baseArt of ssgArticlesData.en) {
  const slug = baseArt.slug;
  for (const locale of locales) {
    const targetDir = locale.code === 'en'
      ? path.join(distDir, 'articles', slug)
      : path.join(distDir, locale.code, 'articles', slug);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const canonicalPath = locale.code === 'en' ? `/articles/${slug}/` : `/${locale.code}/articles/${slug}/`;
    const canonicalUrl = `${BASE_DOMAIN}${canonicalPath}`;
    const currentArts = ssgArticlesData[locale.code] || ssgArticlesData.en;
    const article = currentArts.find(a => a.slug === slug || a.id === baseArt.id) || baseArt;
    const articleDesc = article.summary || article.title;

    let localizedHtml = baseHtml
      .replace('<html lang="en">', `<html lang="${locale.lang}">`)
      .replace(/<title>.*?<\/title>/, `<title>${article.title} - DevText</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${articleDesc.replace(/"/g, '&quot;')}" />`)
      .replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${article.category}, technical guide, developer documentation, devtext" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
      .replace(/<!-- Multi-language SEO Hreflang Tags[\s\S]*?<link rel="canonical"/, `<!-- Multi-language SEO Hreflang Tags -->${buildArticleHreflangTags(slug)}\n    <link rel="canonical"`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${article.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${articleDesc.replace(/"/g, '&quot;')}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
      .replace(/<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="${locale.ogLocale}" />`)
      .replace('data-locale="en"', `data-locale="${locale.code}"`)
      .replace(/<!-- JSON-LD Schema for Google & AI Engines[\s\S]*?<\/script>/, `<!-- JSON-LD Schema for Google & AI Engines (TechArticle & BreadcrumbList GEO) -->\n${buildArticleJsonLdSchema(article, canonicalUrl, locale)}`)
      .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildArticlePrerenderHtml(article, currentArts, locale.code)}</div>`);

    fs.writeFileSync(path.join(targetDir, 'index.html'), localizedHtml, 'utf-8');
    console.log(`✓ Generated: dist/${locale.code === 'en' ? 'articles/' + slug + '/' : locale.code + '/articles/' + slug + '/'}index.html`);
  }
}

// 6. 生成包含 3 套工具 + 4 大合规页 + 4 篇技术专栏共 66 个多语言 URL 的标准 Google Sitemap.xml
const buildSitemapUrlBlock = (loc, itemType) => {
  const getItemUrl = (code) => {
    if (itemType === 'case') {
      return code === 'en' ? `${BASE_DOMAIN}/` : `${BASE_DOMAIN}/${code}/`;
    }
    if (['cron', 'json'].includes(itemType)) {
      return code === 'en' ? `${BASE_DOMAIN}/${itemType}/` : `${BASE_DOMAIN}/${code}/${itemType}/`;
    }
    return code === 'en' ? `${BASE_DOMAIN}/${itemType}/` : `${BASE_DOMAIN}/${code}/${itemType}/`;
  };

  const isTool = ['case', 'cron', 'json'].includes(itemType);
  const priority = isTool ? (loc === 'en' ? '1.0' : '0.9') : (loc === 'en' ? '0.8' : '0.7');
  const changefreq = isTool ? 'weekly' : 'monthly';

  return `  <url>
    <loc>${getItemUrl(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="${getItemUrl('en')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${getItemUrl('en')}" />
    <xhtml:link rel="alternate" hreflang="es" href="${getItemUrl('es')}" />
    <xhtml:link rel="alternate" hreflang="ja" href="${getItemUrl('ja')}" />
    <xhtml:link rel="alternate" hreflang="de" href="${getItemUrl('de')}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${getItemUrl('fr')}" />
    <xhtml:link rel="alternate" hreflang="zh" href="${getItemUrl('zh')}" />
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

const buildArticleSitemapUrlBlock = (loc, slug) => {
  const getArticleUrl = (code) => {
    return code === 'en' ? `${BASE_DOMAIN}/articles/${slug}/` : `${BASE_DOMAIN}/${code}/articles/${slug}/`;
  };
  const priority = loc === 'en' ? '0.85' : '0.75';

  return `  <url>
    <loc>${getArticleUrl(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="${getArticleUrl('en')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${getArticleUrl('en')}" />
    <xhtml:link rel="alternate" hreflang="es" href="${getArticleUrl('es')}" />
    <xhtml:link rel="alternate" hreflang="ja" href="${getArticleUrl('ja')}" />
    <xhtml:link rel="alternate" hreflang="de" href="${getArticleUrl('de')}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${getArticleUrl('fr')}" />
    <xhtml:link rel="alternate" hreflang="zh" href="${getArticleUrl('zh')}" />
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

const sitemapBlocks = [];
for (const item of ['case', 'cron', 'json', 'about', 'privacy', 'terms', 'contact']) {
  for (const loc of ['en', 'es', 'ja', 'de', 'fr', 'zh']) {
    sitemapBlocks.push(buildSitemapUrlBlock(loc, item));
  }
}
for (const art of ssgArticlesData.en) {
  for (const loc of ['en', 'es', 'ja', 'de', 'fr', 'zh']) {
    sitemapBlocks.push(buildArticleSitemapUrlBlock(loc, art.slug));
  }
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapBlocks.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf-8');
console.log('✓ Generated: dist/sitemap.xml (90 Fully Mirrored Localized URLs)');

// 7. 生成 robots.txt (包含 Google, AdSense 与主流 AI 搜索爬虫白名单)
const robotsContent = `User-agent: Googlebot
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: AdsBot-Google
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: *
Allow: /

Sitemap: ${BASE_DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent, 'utf-8');
console.log('✓ Generated: dist/robots.txt (Explicit Google, AdSense & AI Crawler Whitelist)');

// 8. 复制并分发 llms.txt 与 llms-full.txt (面向 LLM / GEO 标准)
const publicDir = path.resolve(__dirname, '../public');
if (fs.existsSync(path.join(publicDir, 'llms.txt'))) {
  fs.copyFileSync(path.join(publicDir, 'llms.txt'), path.join(distDir, 'llms.txt'));
  console.log('✓ Deployed: dist/llms.txt (AI Search & GEO Index Standard)');
}
if (fs.existsSync(path.join(publicDir, 'llms-full.txt'))) {
  fs.copyFileSync(path.join(publicDir, 'llms-full.txt'), path.join(distDir, 'llms-full.txt'));
  console.log('✓ Deployed: dist/llms-full.txt (AI Search Full Knowledge Base)');
}

console.log('🎉 3-Tool Suite, 4-Page Compliance & 8-Article Tech Guides Multi-Language SSG + GEO build completed successfully!');
