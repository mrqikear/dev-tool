/* ==========================================================================
   [SEO & GEO 核心架构] - Apple 极简设计多工具聚合应用
   - 包含：1. 字母大小写转换器 (Case & Text Converter)
           2. Cron 表达式可视化解析器 (Cron Visualizer)
           3. JSON 在线格式化、语法校验与 TS 生成器 (JSON Processor)
   - 具备：三位一体内部互链、URL 物理路由无刷新同步、GEO 语义化实体布局
   ========================================================================== */

import React, { useState, useEffect } from 'react';
import { Locale, ToolType, languages, translations } from './lib/i18n';
import { CaseConverter } from './components/CaseConverter';
import { CronVisualizer } from './components/CronVisualizer';
import { JsonProcessor } from './components/JsonProcessor';
import { Globe, Sun, Moon, Sparkles, Clock, Type, Check, ShieldCheck, Zap, FileCode } from 'lucide-react';

export function App() {
  /* [SEO & GEO 优化点 1] - 物理路径与语言/工具状态双向绑定
     支持爬虫直达 /json/、/cron/ 或 /zh/json/ 等多级语义化物理 URL */
  const [activeTool, setActiveTool] = useState<ToolType>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/cron')) return 'cron';
      if (path.includes('/json')) return 'json';
    }
    return 'case';
  });

  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const rootAttr = document.getElementById('root')?.getAttribute('data-locale') as Locale;
      if (rootAttr && translations[rootAttr]) return rootAttr;
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      const firstSegment = path.split('/')[0];
      if (firstSegment && translations[firstSegment as Locale]) return firstSegment as Locale;
    }
    return 'en';
  });

  const [isDark, setIsDark] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[locale] || translations.en;

  // 路由同步切换函数
  const updateRoute = (newTool: ToolType, newLocale: Locale) => {
    setActiveTool(newTool);
    setLocale(newLocale);

    if (typeof window !== 'undefined') {
      let targetPath = '/';
      if (newLocale !== 'en') {
        targetPath = `/${newLocale}/`;
      }
      if (newTool === 'cron') {
        targetPath = newLocale === 'en' ? '/cron/' : `/${newLocale}/cron/`;
      } else if (newTool === 'json') {
        targetPath = newLocale === 'en' ? '/json/' : `/${newLocale}/json/`;
      }

      window.history.pushState({}, '', targetPath);

      // [SEO 优化点 2] - 动态更新浏览器 Tab 标题与 SEO Title
      let pageTitle = t.case.title;
      if (newTool === 'cron') pageTitle = t.cron.title;
      if (newTool === 'json') pageTitle = t.json.title;
      document.title = `${pageTitle} - DevText`;
    }
  };

  // 监听暗黑模式
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 首次载入及路由/语言变更时，强制同步 HTML lang 与 Document Title (修复首屏标题英文问题)
  useEffect(() => {
    const langMap: Record<Locale, string> = {
      en: 'en',
      es: 'es',
      ja: 'ja',
      de: 'de',
      fr: 'fr',
      zh: 'zh-CN',
    };
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langMap[locale] || 'en';
      let pageTitle = t.case.title;
      if (activeTool === 'cron') pageTitle = t.cron.title;
      if (activeTool === 'json') pageTitle = t.json.title;
      document.title = `${pageTitle} - DevText`;
    }
  }, [locale, activeTool, t]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] font-sans antialiased transition-colors duration-200 flex flex-col">
      {/* 顶部 Apple 风格磨砂导航栏 */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-[#161617]/80 border-b border-black/[0.08] dark:border-white/[0.12] transition-colors">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo 与主站名称 */}
          <div
            onClick={() => updateRoute('case', locale)}
            className="flex items-center space-x-3 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0071E3] to-[#47A1FF] flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              DevText
            </span>
          </div>

          {/* [SEO & GEO 优化点 3] - 顶部胶囊导航 (Apple Segmented Tool Switcher) */}
          <nav className="hidden sm:flex items-center p-1.5 bg-black/[0.05] dark:bg-white/[0.08] rounded-full border border-black/[0.05] dark:border-white/[0.08] overflow-x-auto flex-nowrap">
            <button
              onClick={() => updateRoute('case', locale)}
              className={`whitespace-nowrap flex items-center space-x-1.5 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all ${
                activeTool === 'case'
                  ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>{t.nav.caseConverter}</span>
            </button>
            <button
              onClick={() => updateRoute('cron', locale)}
              className={`whitespace-nowrap flex items-center space-x-1.5 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all ${
                activeTool === 'cron'
                  ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{t.nav.cronVisualizer}</span>
            </button>
            <button
              onClick={() => updateRoute('json', locale)}
              className={`whitespace-nowrap flex items-center space-x-1.5 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all ${
                activeTool === 'json'
                  ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{t.nav.jsonProcessor}</span>
            </button>
          </nav>

          {/* 右侧：多语言选择 + 深色模式切换 */}
          <div className="flex items-center space-x-2.5">
            {/* 多语言选择器 */}
            <div className="relative flex items-center">
              <Globe className="w-4 h-4 text-[#86868B] absolute left-3 pointer-events-none" />
              <select
                value={locale}
                onChange={(e) => updateRoute(activeTool, e.target.value as Locale)}
                aria-label="Language selection"
                className="pl-8 pr-7 py-2 text-sm font-medium rounded-full bg-black/[0.05] dark:bg-white/[0.1] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/[0.08] dark:hover:bg-white/[0.15] border-none focus:outline-none focus:ring-1 focus:ring-[#0071E3] cursor-pointer appearance-none transition-colors"
              >
                {languages.map((lang) => (
                  <option
                    key={lang.code}
                    value={lang.code}
                    className="bg-white dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7]"
                  >
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 深色模式按钮 */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-black/[0.05] dark:bg-white/[0.1] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/[0.08] dark:hover:bg-white/[0.15] transition-colors cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#FF9500]" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 移动端横向滚动工具栏 */}
        <div className="sm:hidden flex items-center space-x-2 px-4 py-2 bg-black/[0.02] dark:bg-white/[0.04] border-t border-black/[0.04] overflow-x-auto flex-nowrap">
          <button
            onClick={() => updateRoute('case', locale)}
            className={`whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full ${
              activeTool === 'case'
                ? 'bg-[#0071E3] text-white'
                : 'text-[#86868B]'
            }`}
          >
            🔤 {t.nav.caseConverter}
          </button>
          <button
            onClick={() => updateRoute('cron', locale)}
            className={`whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full ${
              activeTool === 'cron'
                ? 'bg-[#0071E3] text-white'
                : 'text-[#86868B]'
            }`}
          >
            ⏱️ {t.nav.cronVisualizer}
          </button>
          <button
            onClick={() => updateRoute('json', locale)}
            className={`whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full ${
              activeTool === 'json'
                ? 'bg-[#0071E3] text-white'
                : 'text-[#86868B]'
            }`}
          >
            ⚡ {t.nav.jsonProcessor}
          </button>
        </div>
      </header>

      {/* 主工作区 */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-6">
        {/* 工具组件渲染 */}
        {activeTool === 'case' && (
          <CaseConverter locale={locale} showToast={showToast} />
        )}
        {activeTool === 'cron' && (
          <CronVisualizer locale={locale} showToast={showToast} />
        )}
        {activeTool === 'json' && (
          <JsonProcessor locale={locale} showToast={showToast} />
        )}

        {/* [SEO & GEO 优化点 4] - 底部关联工具互链卡片 (Cross-Tool Hub Linking)
            向 Google 搜索引擎与 AI 爬虫建立页面之间的紧密上下文拓扑结构 */}
        <div className="p-4 rounded-2xl bg-white/60 dark:bg-[#1C1C1E]/60 border border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3 text-xs text-[#86868B]">
            <span className="flex items-center text-[#28CD41] font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1" />
              {t.nav.clientSafe}
            </span>
            <span>•</span>
            <span className="flex items-center text-[#0071E3] font-semibold">
              <Zap className="w-4 h-4 mr-1" />
              {t.nav.zeroLatency}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs flex-wrap gap-1.5">
            <span className="text-[#86868B]">
              {t.nav.switchTool}
            </span>
            <button
              onClick={() => updateRoute('case', locale)}
              className={`px-3 py-1 font-semibold rounded-lg transition-colors ${
                activeTool === 'case'
                  ? 'bg-black/[0.06] dark:bg-white/[0.1] text-[#1D1D1F] dark:text-[#F5F5F7]'
                  : 'bg-[#0071E3]/10 text-[#0071E3] hover:bg-[#0071E3]/20'
              }`}
            >
              🔤 {t.nav.caseConverter}
            </button>
            <button
              onClick={() => updateRoute('cron', locale)}
              className={`px-3 py-1 font-semibold rounded-lg transition-colors ${
                activeTool === 'cron'
                  ? 'bg-black/[0.06] dark:bg-white/[0.1] text-[#1D1D1F] dark:text-[#F5F5F7]'
                  : 'bg-[#0071E3]/10 text-[#0071E3] hover:bg-[#0071E3]/20'
              }`}
            >
              ⏱️ {t.nav.cronVisualizer}
            </button>
            <button
              onClick={() => updateRoute('json', locale)}
              className={`px-3 py-1 font-semibold rounded-lg transition-colors ${
                activeTool === 'json'
                  ? 'bg-black/[0.06] dark:bg-white/[0.1] text-[#1D1D1F] dark:text-[#F5F5F7]'
                  : 'bg-[#0071E3]/10 text-[#0071E3] hover:bg-[#0071E3]/20'
              }`}
            >
              ⚡ {t.nav.jsonProcessor}
            </button>
          </div>
        </div>
      </main>

      {/* 底部 Apple 极简页脚 */}
      <footer className="border-t border-black/[0.08] dark:border-white/[0.12] bg-white/50 dark:bg-[#161617]/50 py-8 transition-colors mt-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#86868B] gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">{t.nav.footerTitle}</span>
            <span>—</span>
            <span>{t.nav.footerSubtitle}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                updateRoute('case', locale);
              }}
              className="hover:underline"
            >
              {t.nav.caseConverter}
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                updateRoute('cron', locale);
              }}
              className="hover:underline"
            >
              {t.nav.cronVisualizer}
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                updateRoute('json', locale);
              }}
              className="hover:underline"
            >
              {t.nav.jsonProcessor}
            </a>
          </div>
        </div>
      </footer>

      {/* 浮动 Toast 提示 */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#1D1D1F]/90 dark:bg-white/90 text-white dark:text-[#1D1D1F] backdrop-blur-xl shadow-lg text-xs font-medium flex items-center space-x-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-[#28CD41]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
