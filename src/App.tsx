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
import { Cheatsheet } from './components/Cheatsheet';
import { GuidesSection } from './components/GuidesSection';
import { HowToUse } from './components/HowToUse';
import { UseCases } from './components/UseCases';
import { FaqSection } from './components/FaqSection';
import { CompliancePage, CompliancePageType } from './components/CompliancePage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { AdSenseBanner } from './components/AdSenseBanner';
import { articlesData } from './lib/articlesData';
import { Globe, Sun, Moon, Sparkles, Clock, Type, Check, ShieldCheck, Zap, FileCode, BookOpen } from 'lucide-react';

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

  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/articles/')) {
        const parts = path.split('/articles/');
        if (parts[1]) return parts[1].replace(/\/$/, '');
      }
    }
    return null;
  });

  const [currentPage, setCurrentPage] = useState<'tools' | CompliancePageType | 'article'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/articles/')) return 'article';
      if (path.includes('/about')) return 'about';
      if (path.includes('/privacy')) return 'privacy';
      if (path.includes('/terms')) return 'terms';
      if (path.includes('/contact')) return 'contact';
    }
    return 'tools';
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
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [geoSuggestLocale, setGeoSuggestLocale] = useState<Locale | null>(null);

  // [GEO & 用户体验优化] - 浏览器语言与地理偏好智能识别（无侵入式顶栏提示）
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const dismissed = localStorage.getItem('devtext_dismissed_geo_prompt');
      if (dismissed) return;

      const path = window.location.pathname.toLowerCase();
      const currentLocInPath = (['zh', 'es', 'ja', 'de', 'fr'] as Locale[]).find(l => path.startsWith(`/${l}/`) || path === `/${l}`);
      if (currentLocInPath) return;

      const browserLang = (navigator.language || (navigator as any).languages?.[0] || '').toLowerCase();
      let detected: Locale | null = null;
      if (browserLang.startsWith('zh')) detected = 'zh';
      else if (browserLang.startsWith('es')) detected = 'es';
      else if (browserLang.startsWith('ja')) detected = 'ja';
      else if (browserLang.startsWith('de')) detected = 'de';
      else if (browserLang.startsWith('fr')) detected = 'fr';

      if (detected && detected !== locale) {
        setGeoSuggestLocale(detected);
      }
    } catch {
      // safe fallback
    }
  }, [locale]);

  const t = translations[locale] || translations.en;

  // 路由同步切换函数
  const updateRoute = (newTool: ToolType, newLocale: Locale) => {
    setCurrentPage('tools');
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

  const navigateToCompliance = (page: CompliancePageType, targetLocale: Locale = locale) => {
    setCurrentPage(page);
    setLocale(targetLocale);
    if (typeof window !== 'undefined') {
      const targetPath = targetLocale === 'en' ? `/${page}/` : `/${targetLocale}/${page}/`;
      window.history.pushState({}, '', targetPath);
      const titleMap: Record<CompliancePageType, string> = {
        about: t.nav.aboutUs,
        privacy: t.nav.privacyPolicy,
        terms: t.nav.termsOfService,
        contact: t.nav.contactUs,
      };
      document.title = `${titleMap[page]} - DevText`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToArticle = (slug: string, targetLocale: Locale = locale) => {
    setCurrentPage('article');
    setActiveArticleSlug(slug);
    setLocale(targetLocale);
    if (typeof window !== 'undefined') {
      const targetPath = targetLocale === 'en' ? `/articles/${slug}/` : `/${targetLocale}/articles/${slug}/`;
      window.history.pushState({}, '', targetPath);
      const articles = articlesData[targetLocale] || articlesData.en;
      const art = articles.find(a => a.slug === slug || a.id === slug);
      if (art) {
        document.title = `${art.title} - DevText`;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToTools = (targetTool: ToolType = 'case', targetLocale: Locale = locale) => {
    setCurrentPage('tools');
    setActiveArticleSlug(null);
    updateRoute(targetTool, targetLocale);
  };

  // 全局锚点平滑跨页面跳转导航函数 (解决无论在合规页、文章页还是工具子页均可点击直接跳转定位)
  const navigateToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const basePath = locale === 'en' ? '' : `/${locale}`;
    const targetPath = `${basePath}/#${sectionId}`;

    if (currentPage !== 'tools') {
      setCurrentPage('tools');
      setActiveArticleSlug(null);
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', targetPath);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', targetPath);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // 页面首屏加载时检查 URL hash 并自动平滑滚动
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.replace(/^#/, '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 180);
    }
  }, []);

  // 监听暗黑模式
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 浏览器前进/后退 popstate 事件监听
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/articles/')) {
        setCurrentPage('article');
        const parts = path.split('/articles/');
        if (parts[1]) setActiveArticleSlug(parts[1].replace(/\/$/, ''));
      } else if (path.includes('/about')) {
        setCurrentPage('about');
        setActiveArticleSlug(null);
      } else if (path.includes('/privacy')) {
        setCurrentPage('privacy');
        setActiveArticleSlug(null);
      } else if (path.includes('/terms')) {
        setCurrentPage('terms');
        setActiveArticleSlug(null);
      } else if (path.includes('/contact')) {
        setCurrentPage('contact');
        setActiveArticleSlug(null);
      } else {
        setCurrentPage('tools');
        setActiveArticleSlug(null);
        if (path.includes('/cron')) setActiveTool('cron');
        else if (path.includes('/json')) setActiveTool('json');
        else setActiveTool('case');
      }

      const pathClean = window.location.pathname.replace(/^\/|\/$/g, '');
      const firstSegment = pathClean.split('/')[0];
      if (firstSegment && translations[firstSegment as Locale]) {
        setLocale(firstSegment as Locale);
      } else {
        setLocale('en');
      }

      if (window.location.hash) {
        const targetId = window.location.hash.replace(/^#/, '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      if (currentPage === 'article' && activeArticleSlug) {
        const articles = articlesData[locale] || articlesData.en;
        const currentArt = articles.find(a => a.slug === activeArticleSlug || a.id === activeArticleSlug);
        if (currentArt) pageTitle = currentArt.title;
      } else if (currentPage === 'about') pageTitle = t.nav.aboutUs;
      else if (currentPage === 'privacy') pageTitle = t.nav.privacyPolicy;
      else if (currentPage === 'terms') pageTitle = t.nav.termsOfService;
      else if (currentPage === 'contact') pageTitle = t.nav.contactUs;
      else if (activeTool === 'cron') pageTitle = t.cron.title;
      else if (activeTool === 'json') pageTitle = t.json.title;
      document.title = `${pageTitle} - DevText`;
    }
  }, [locale, activeTool, currentPage, activeArticleSlug, t]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleTryExample = (sampleText: string, targetTool: ToolType) => {
    updateRoute(targetTool, locale);
    navigator.clipboard.writeText(sampleText);
    showToast(locale === 'zh' ? '已复制示例并切换至对应工具！' : 'Copied sample & switched tool!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const geoBannerTexts: Record<Locale, { prompt: string; action: string; dismiss: string }> = {
    zh: { prompt: '检测到您的系统语言偏好为中文，是否切换至中文界面？', action: '立即切换', dismiss: '保持' },
    es: { prompt: 'Detectamos que su idioma preferido es el Español. ¿Desea cambiar de idioma?', action: 'Cambiar', dismiss: 'Mantener' },
    ja: { prompt: 'ブラウザの言語設定（日本語）が検出されました。日本語版に切り替えますか？', action: '切り替える', dismiss: '閉じる' },
    de: { prompt: 'Wir haben Deutsch als Ihre bevorzugte Sprache erkannt. Möchten Sie wechseln?', action: 'Wechseln', dismiss: 'Beibehalten' },
    fr: { prompt: 'Votre langue de navigation préférée est le Français. Souhaitez-vous basculer ?', action: 'Basculer', dismiss: 'Conserver' },
    en: { prompt: 'Switch to English interface?', action: 'Switch', dismiss: 'Dismiss' },
  };

  const handleSwitchGeoLocale = (targetLoc: Locale) => {
    try { localStorage.setItem('devtext_dismissed_geo_prompt', 'true'); } catch {}
    setGeoSuggestLocale(null);
    if (currentPage === 'article' && activeArticleSlug) {
      navigateToArticle(activeArticleSlug, targetLoc);
    } else if (currentPage !== 'tools') {
      navigateToCompliance(currentPage as CompliancePageType, targetLoc);
    } else {
      updateRoute(activeTool, targetLoc);
    }
  };

  const handleDismissGeoBanner = () => {
    try { localStorage.setItem('devtext_dismissed_geo_prompt', 'true'); } catch {}
    setGeoSuggestLocale(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] font-sans antialiased transition-colors duration-200 flex flex-col">
      {/* [GEO & 地理语言智能提示横幅] */}
      {geoSuggestLocale && geoBannerTexts[geoSuggestLocale] && (
        <div className="bg-[#0071E3] text-white px-4 py-2 text-xs sm:text-sm font-medium flex items-center justify-between shadow-sm z-50">
          <div className="max-w-5xl mx-auto w-full flex items-center justify-between gap-3 flex-wrap">
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 flex-shrink-0 animate-pulse" />
              <span>{geoBannerTexts[geoSuggestLocale].prompt}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSwitchGeoLocale(geoSuggestLocale)}
                className="px-3 py-1 bg-white text-[#0071E3] rounded-full font-bold text-xs hover:bg-white/90 shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                {geoBannerTexts[geoSuggestLocale].action}
              </button>
              <button
                onClick={handleDismissGeoBanner}
                className="px-2 py-1 text-white/80 hover:text-white text-xs cursor-pointer"
              >
                ✕ {geoBannerTexts[geoSuggestLocale].dismiss}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 顶部 Apple 风格磨砂导航栏 */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-[#161617]/80 border-b border-black/[0.08] dark:border-white/[0.12] transition-colors">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo 与主站名称 */}
          <div
            onClick={() => navigateToTools('case', locale)}
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
                activeTool === 'case' && currentPage === 'tools'
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
                activeTool === 'cron' && currentPage === 'tools'
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
                activeTool === 'json' && currentPage === 'tools'
                  ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{t.nav.jsonProcessor}</span>
            </button>

            <div className="h-4 w-px bg-black/10 dark:bg-white/10 mx-1" />
            <a
              href={locale === 'en' ? '/#how-to' : `/${locale}/#how-to`}
              onClick={(e) => navigateToSection('how-to', e)}
              className="whitespace-nowrap px-2.5 py-1 text-xs font-semibold text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors rounded-full cursor-pointer"
            >
              {t.nav.howToTab}
            </a>
            <a
              href={locale === 'en' ? '/#use-cases' : `/${locale}/#use-cases`}
              onClick={(e) => navigateToSection('use-cases', e)}
              className="whitespace-nowrap px-2.5 py-1 text-xs font-semibold text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors rounded-full cursor-pointer"
            >
              {t.nav.useCasesTab}
            </a>
            <a
              href={locale === 'en' ? '/#cheatsheet' : `/${locale}/#cheatsheet`}
              onClick={(e) => navigateToSection('cheatsheet', e)}
              className="whitespace-nowrap px-2.5 py-1 text-xs font-semibold text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors rounded-full cursor-pointer"
            >
              {t.nav.cheatsheetTab}
            </a>
            <a
              href={locale === 'en' ? '/#guides' : `/${locale}/#guides`}
              onClick={(e) => navigateToSection('guides', e)}
              className="whitespace-nowrap px-2.5 py-1 text-xs font-semibold text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors rounded-full cursor-pointer"
            >
              {t.nav.guidesTab}
            </a>
            <a
              href={locale === 'en' ? '/#faq' : `/${locale}/#faq`}
              onClick={(e) => navigateToSection('faq', e)}
              className="whitespace-nowrap px-2.5 py-1 text-xs font-semibold text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors rounded-full cursor-pointer"
            >
              {t.nav.faqTab}
            </a>
          </nav>

          {/* 右侧：多语言选择 + 深色模式切换 */}
          <div className="flex items-center space-x-2.5">
            {/* 多语言选择器 */}
            <div className="relative flex items-center">
              <Globe className="w-4 h-4 text-[#86868B] absolute left-3 pointer-events-none" />
              <select
                value={locale}
                onChange={(e) => {
                  const newLoc = e.target.value as Locale;
                  if (currentPage === 'article' && activeArticleSlug) {
                    navigateToArticle(activeArticleSlug, newLoc);
                  } else if (currentPage !== 'tools') {
                    navigateToCompliance(currentPage as CompliancePageType, newLoc);
                  } else {
                    updateRoute(activeTool, newLoc);
                  }
                }}
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
          <a
            href={locale === 'en' ? '/#how-to' : `/${locale}/#how-to`}
            onClick={(e) => navigateToSection('how-to', e)}
            className="whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full text-[#86868B] bg-black/[0.04] dark:bg-white/[0.06] cursor-pointer"
          >
            ⚡ {t.nav.howToTab}
          </a>
          <a
            href={locale === 'en' ? '/#use-cases' : `/${locale}/#use-cases`}
            onClick={(e) => navigateToSection('use-cases', e)}
            className="whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full text-[#86868B] bg-black/[0.04] dark:bg-white/[0.06] cursor-pointer"
          >
            🎯 {t.nav.useCasesTab}
          </a>
          <a
            href={locale === 'en' ? '/#cheatsheet' : `/${locale}/#cheatsheet`}
            onClick={(e) => navigateToSection('cheatsheet', e)}
            className="whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full text-[#86868B] bg-black/[0.04] dark:bg-white/[0.06] cursor-pointer"
          >
            💡 {t.nav.cheatsheetTab}
          </a>
          <a
            href={locale === 'en' ? '/#guides' : `/${locale}/#guides`}
            onClick={(e) => navigateToSection('guides', e)}
            className="whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full text-[#86868B] bg-black/[0.04] dark:bg-white/[0.06] cursor-pointer"
          >
            📚 {t.nav.guidesTab}
          </a>
          <a
            href={locale === 'en' ? '/#faq' : `/${locale}/#faq`}
            onClick={(e) => navigateToSection('faq', e)}
            className="whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full text-[#86868B] bg-black/[0.04] dark:bg-white/[0.06] cursor-pointer"
          >
            💬 {t.nav.faqTab}
          </a>
        </div>
      </header>

      {/* 主工作区 */}
      <main className={`flex-1 w-full mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6 transition-all duration-300 ${
        activeTool === 'json' && currentPage === 'tools' ? 'max-w-7xl 2xl:max-w-[1720px]' : 'max-w-5xl'
      }`}>
        {currentPage === 'article' ? (
          (() => {
            const articles = articlesData[locale] || articlesData.en;
            const currentArt = articles.find(a => a.slug === activeArticleSlug || a.id === activeArticleSlug) || articles[0];
            return (
              <ArticleDetailPage
                article={currentArt}
                allArticles={articles}
                locale={locale}
                onBackToTools={() => navigateToTools(activeTool, locale)}
                onSelectArticle={(slug) => navigateToArticle(slug, locale)}
                onOpenTool={(tool) => navigateToTools(tool, locale)}
              />
            );
          })()
        ) : currentPage !== 'tools' ? (
          <CompliancePage
            page={currentPage}
            locale={locale}
            onBackToTools={() => navigateToTools('case', locale)}
          />
        ) : (
          <>
            {/* 工具组件渲染 */}
            <div id="tools">
              {activeTool === 'case' && (
                <CaseConverter locale={locale} showToast={showToast} />
              )}
              {activeTool === 'cron' && (
                <CronVisualizer locale={locale} showToast={showToast} />
              )}
              {activeTool === 'json' && (
                <JsonProcessor locale={locale} showToast={showToast} />
              )}
            </div>

            {/* [SEO & GEO 优化点 4] - 底部关联工具互链卡片 (Cross-Tool Hub Linking) */}
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

            {/* AdSense In-Body Ad Unit (Required by Google AdSense Verification Policy) */}
            <AdSenseBanner locale={locale} />

            {/* 1. 深度操作指南 (How-To 3-step 指南) */}
            <HowToUse locale={locale} />

            {/* 2. 真实使用场景与案例分析 (Use Cases) */}
            <UseCases
              locale={locale}
              onTryExample={(sampleText) => {
                updateRoute('case', locale);
                navigator.clipboard.writeText(sampleText);
                showToast(locale === 'zh' ? `已复制示例 [${sampleText}] 并切换至工具！` : `Copied [${sampleText}] & switched to tool!`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. 交互式开发语法与命名速查手册 */}
            <Cheatsheet locale={locale} onTryExample={handleTryExample} />

            {/* 4. 深度技术指南专区 (高价值发布商内容) */}
            <GuidesSection
              locale={locale}
              onSelectArticle={(slug) => {
                if (slug) {
                  navigateToArticle(slug, locale);
                }
              }}
            />

            {/* 5. 常见问题解答 (FAQ 折叠面板) */}
            <FaqSection locale={locale} />
          </>
        )}
      </main>

      {/* 底部 Apple 极简页脚 */}
      <footer className="border-t border-black/[0.08] dark:border-white/[0.12] bg-white/50 dark:bg-[#161617]/50 py-8 transition-colors mt-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#86868B] gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">{t.nav.footerTitle}</span>
            <span>—</span>
            <span>{t.nav.footerSubtitle}</span>
          </div>
          <div className="flex items-center space-x-3 text-xs flex-wrap gap-y-2">
            <a
              href={locale === 'en' ? '/#how-to' : `/${locale}/#how-to`}
              onClick={(e) => navigateToSection('how-to', e)}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              {t.nav.howToTab}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/#use-cases' : `/${locale}/#use-cases`}
              onClick={(e) => navigateToSection('use-cases', e)}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              {t.nav.useCasesTab}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/#cheatsheet' : `/${locale}/#cheatsheet`}
              onClick={(e) => navigateToSection('cheatsheet', e)}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              {t.nav.cheatsheetTab}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/#guides' : `/${locale}/#guides`}
              onClick={(e) => navigateToSection('guides', e)}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              {t.nav.guidesTab}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/#faq' : `/${locale}/#faq`}
              onClick={(e) => navigateToSection('faq', e)}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              {t.nav.faqTab}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/about/' : `/${locale}/about/`}
              onClick={(e) => { e.preventDefault(); navigateToCompliance('about'); }}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors"
            >
              {t.nav.aboutUs}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/privacy/' : `/${locale}/privacy/`}
              onClick={(e) => { e.preventDefault(); navigateToCompliance('privacy'); }}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors"
            >
              {t.nav.privacyPolicy}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/terms/' : `/${locale}/terms/`}
              onClick={(e) => { e.preventDefault(); navigateToCompliance('terms'); }}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors"
            >
              {t.nav.termsOfService}
            </a>
            <span>•</span>
            <a
              href={locale === 'en' ? '/contact/' : `/${locale}/contact/`}
              onClick={(e) => { e.preventDefault(); navigateToCompliance('contact'); }}
              className="hover:underline text-[#86868B] hover:text-[#0071E3] transition-colors"
            >
              {t.nav.contactUs}
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
