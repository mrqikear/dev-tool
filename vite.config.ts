import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const localeMeta: Record<string, { lang: string; caseTitle: string; cronTitle: string; jsonTitle: string }> = {
  zh: {
    lang: 'zh-CN',
    caseTitle: '英文字母大小写转换器 - 免费在线代码变量与文本格式化工具',
    cronTitle: 'Cron 表达式可视化解析与未来时间模拟器 - 支持 Linux & Spring 6位 & Quartz',
    jsonTitle: 'JSON 在线解析格式化、语法校验与 TS 接口生成器 - 纯本地极速隐私',
  },
  es: {
    lang: 'es',
    caseTitle: 'Convertidor de Mayúsculas y Minúsculas - Herramienta Online Gratis',
    cronTitle: 'Visualizador de Expresiones Cron - Simulador de Próximas Ejecuciones',
    jsonTitle: 'Formateador JSON, Validador y Generador TypeScript Online',
  },
  ja: {
    lang: 'ja',
    caseTitle: '英字大文字・小文字変換ツール - 完全無料オンラインテキスト整形',
    cronTitle: 'Cron 式ビジュアライザー＆実行時刻シミュレーター - 無料ツール',
    jsonTitle: 'JSON 整形・構文チェック・TypeScript 型定義生成 - 無料オンライン',
  },
  de: {
    lang: 'de',
    caseTitle: 'Groß- und Kleinschreibung Konverter - Kostenloses Online-Tool',
    cronTitle: 'Cron-Ausdruck Visualisierer & Zeitplan-Simulator - Kostenloses Tool',
    jsonTitle: 'JSON Formatierer, Validator & TypeScript Generator - Kostenlos',
  },
  fr: {
    lang: 'fr',
    caseTitle: 'Convertisseur de Casse & Majuscules - Outil Gratuit en Ligne',
    cronTitle: 'Visualiseur d’Expressions Cron & Simulateur d’Exécution',
    jsonTitle: 'Formateur JSON, Validateur & Générateur TypeScript Gratuit',
  },
  en: {
    lang: 'en',
    caseTitle: 'Letter Case & Text Converter - Free Online Developer Utility',
    cronTitle: 'Cron Expression Visualizer & Timeline Simulator - Free Online Tool',
    jsonTitle: 'JSON Formatter, Validator & TypeScript Interface Generator',
  },
};

function localizedDevPlugin(): Plugin {
  return {
    name: 'localized-dev-server',
    transformIndexHtml(html, ctx) {
      const url = ctx.path || ctx.originalUrl || '/';
      const cleanPath = url.replace(/^\/|\/$/g, '');
      const segments = cleanPath.split('/').filter(Boolean);

      let localeCode = 'en';
      let tool = 'case';

      if (['zh', 'es', 'ja', 'de', 'fr'].includes(segments[0])) {
        localeCode = segments[0];
        if (segments[1] === 'cron') tool = 'cron';
        if (segments[1] === 'json') tool = 'json';
      } else {
        if (segments[0] === 'cron') tool = 'cron';
        if (segments[0] === 'json') tool = 'json';
      }

      const meta = localeMeta[localeCode] || localeMeta.en;
      const title = tool === 'cron' ? meta.cronTitle : tool === 'json' ? meta.jsonTitle : meta.caseTitle;
      const targetCanonical = `https://devtoolai.xyz/${cleanPath ? cleanPath + '/' : ''}`;

      return html
        .replace('<html lang="en">', `<html lang="${meta.lang}">`)
        .replace(/<title>.*?<\/title>/, `<title>${title} - DevText</title>`)
        .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${targetCanonical}" />`)
        .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${targetCanonical}" />`)
        .replace('data-locale="en"', `data-locale="${localeCode}"`);
    },
  };
}

export default defineConfig({
  plugins: [react(), localizedDevPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});
