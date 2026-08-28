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

function buildHreflangTags(tool) {
  const getToolUrl = (localeCode) => {
    let sub = '';
    if (tool === 'cron') sub = 'cron/';
    if (tool === 'json') sub = 'json/';
    if (localeCode === 'en') return `${BASE_DOMAIN}/${sub}`;
    return `${BASE_DOMAIN}/${localeCode}/${sub}`;
  };

  return `
    <link rel="alternate" hreflang="x-default" href="${getToolUrl('en')}" />
    <link rel="alternate" hreflang="en" href="${getToolUrl('en')}" />
    <link rel="alternate" hreflang="es" href="${getToolUrl('es')}" />
    <link rel="alternate" hreflang="ja" href="${getToolUrl('ja')}" />
    <link rel="alternate" hreflang="de" href="${getToolUrl('de')}" />
    <link rel="alternate" hreflang="fr" href="${getToolUrl('fr')}" />
    <link rel="alternate" hreflang="zh" href="${getToolUrl('zh')}" />`;
}

// 生成语义化预渲染 HTML 骨架 (确保爬虫与 AI 抓取器即使禁用 JS 也能读到完整正文与 H1)
function buildSemanticPrerenderHtml(title, desc, tool) {
  return `
    <div style="max-width: 1024px; margin: 0 auto; padding: 2rem 1rem; font-family: system-ui, -apple-system, sans-serif;">
      <header style="margin-bottom: 2rem;">
        <h1 style="font-size: 1.75rem; font-weight: 700; color: #1D1D1F; margin-bottom: 0.5rem;">${title}</h1>
        <p style="font-size: 0.95rem; color: #86868B; line-height: 1.5;">${desc}</p>
      </header>
      <main style="background: #ffffff; border-radius: 1.5rem; padding: 1.5rem; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <p style="font-size: 0.9rem; color: #0071E3; font-weight: 600;">⚡ 100% Client-Side In-Browser Engine · Zero Data Leaves Your Device</p>
      </main>
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
    .replace(/"name": "Letter Case & Text Converter"/g, `"name": "${locale.case.appName}"`)
    .replace(/"description": "Instant online letter case and code naming convention converter."/g, `"description": "${locale.case.desc.replace(/"/g, '\\"')}"`)
    .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildSemanticPrerenderHtml(locale.case.title, locale.case.desc, 'case')}</div>`);

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
    .replace(/"name": "Letter Case & Text Converter"/g, `"name": "${locale.cron.appName}"`)
    .replace(/"description": "Instant online letter case and code naming convention converter."/g, `"description": "${locale.cron.desc.replace(/"/g, '\\"')}"`)
    .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildSemanticPrerenderHtml(locale.cron.title, locale.cron.desc, 'cron')}</div>`);

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
    .replace(/"name": "Letter Case & Text Converter"/g, `"name": "${locale.json.appName}"`)
    .replace(/"description": "Instant online letter case and code naming convention converter."/g, `"description": "${locale.json.desc.replace(/"/g, '\\"')}"`)
    .replace(/<div id="root".*?><\/div>/, `<div id="root" data-locale="${locale.code}">${buildSemanticPrerenderHtml(locale.json.title, locale.json.desc, 'json')}</div>`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), localizedHtml, 'utf-8');
  console.log(`✓ Generated: dist/${locale.code === 'en' ? 'json/' : locale.code + '/json/'}index.html`);
}

// 4. 生成包含三大工具 18 个多语言 URL 的标准 Google Sitemap.xml (包含绝对路径与 xhtml alternates)
const buildSitemapUrlBlock = (loc, tool) => {
  const getToolUrl = (code) => {
    let sub = '';
    if (tool === 'cron') sub = 'cron/';
    if (tool === 'json') sub = 'json/';
    if (code === 'en') return `${BASE_DOMAIN}/${sub}`;
    return `${BASE_DOMAIN}/${code}/${sub}`;
  };

  return `  <url>
    <loc>${getToolUrl(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="${getToolUrl('en')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${getToolUrl('en')}" />
    <xhtml:link rel="alternate" hreflang="es" href="${getToolUrl('es')}" />
    <xhtml:link rel="alternate" hreflang="ja" href="${getToolUrl('ja')}" />
    <xhtml:link rel="alternate" hreflang="de" href="${getToolUrl('de')}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${getToolUrl('fr')}" />
    <xhtml:link rel="alternate" hreflang="zh" href="${getToolUrl('zh')}" />
    <changefreq>weekly</changefreq>
    <priority>${loc === 'en' ? '1.0' : '0.9'}</priority>
  </url>`;
};

const sitemapBlocks = [];
for (const tool of ['case', 'cron', 'json']) {
  for (const loc of ['en', 'es', 'ja', 'de', 'fr', 'zh']) {
    sitemapBlocks.push(buildSitemapUrlBlock(loc, tool));
  }
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapBlocks.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf-8');
console.log('✓ Generated: dist/sitemap.xml (18 Fully Mirrored Localized URLs)');

// 5. 生成 robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${BASE_DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent, 'utf-8');
console.log('✓ Generated: dist/robots.txt');

console.log('🎉 3-Tool Suite & Multi-Language SSG build completed successfully!');
