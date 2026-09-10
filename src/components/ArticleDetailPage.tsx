import React, { useState } from 'react';
import { Locale, ToolType } from '../lib/i18n';
import { Article } from '../lib/articlesData';
import { Clock, ArrowLeft, Check, Copy, Lightbulb, AlertTriangle, Info, Sparkles, BookOpen } from 'lucide-react';

interface ArticleDetailPageProps {
  article: Article;
  allArticles: Article[];
  locale: Locale;
  onBackToTools: () => void;
  onSelectArticle: (slug: string) => void;
  onOpenTool: (tool: ToolType) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  allArticles,
  locale,
  onBackToTools,
  onSelectArticle,
  onOpenTool,
}) => {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const getLabels = (loc: string) => {
    switch (loc) {
      case 'zh':
        return {
          home: '首页',
          guides: '技术专栏',
          author: 'DevText 工程架构实验室',
          verified: '✓ 生产级技术规范认证',
          backToTools: '返回开发者工具箱',
          tryTool: '立即使用配套开发工具',
          copyCode: '复制代码',
          copied: '✓ 已复制到剪切板',
          moreGuides: '更多技术指南与深度长文',
        };
      case 'es':
        return {
          home: 'Inicio',
          guides: 'Guías Técnicas',
          author: 'Equipo de Ingeniería DevText',
          verified: '✓ Especificación Técnica Verificada',
          backToTools: 'Volver a Herramientas',
          tryTool: 'Probar Herramienta Relacionada',
          copyCode: 'Copiar código',
          copied: '✓ Copiado al portapapeles',
          moreGuides: 'Más Guías Técnicas',
        };
      case 'ja':
        return {
          home: 'ホーム',
          guides: '技術ガイド',
          author: 'DevText エンジニアリングチーム',
          verified: '✓ 実務検証済み技術仕様',
          backToTools: 'ツール一覧に戻る',
          tryTool: '関連開発ツールを試す',
          copyCode: 'コードをコピー',
          copied: '✓ コピー完了',
          moreGuides: 'その他の技術ガイド',
        };
      case 'de':
        return {
          home: 'Startseite',
          guides: 'Leitfäden',
          author: 'DevText Engineering-Team',
          verified: '✓ Verifizierte technische Spezifikation',
          backToTools: 'Zurück zu den Tools',
          tryTool: 'Zugehöriges Entwickler-Tool testen',
          copyCode: 'Code kopieren',
          copied: '✓ In die Zwischenablage kopiert',
          moreGuides: 'Weitere technische Leitfäden',
        };
      case 'fr':
        return {
          home: 'Accueil',
          guides: 'Guides Techniques',
          author: 'Équipe d\'Ingénierie DevText',
          verified: '✓ Spécification technique vérifiée',
          backToTools: 'Retour aux outils',
          tryTool: 'Tester l\'outil développeur associé',
          copyCode: 'Copier le code',
          copied: '✓ Copié dans le presse-papiers',
          moreGuides: 'Autres guides techniques',
        };
      default:
        return {
          home: 'Home',
          guides: 'Technical Guides',
          author: 'DevText Engineering Lab',
          verified: '✓ Verified Technical Specification',
          backToTools: 'Back to Developer Utilities',
          tryTool: 'Launch Related Developer Tool',
          copyCode: 'Copy Code',
          copied: '✓ Copied to clipboard',
          moreGuides: 'More In-Depth Technical Guides',
        };
    }
  };

  const ui = getLabels(locale);
  const homeHref = locale === 'en' ? '/' : `/${locale}/`;

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 1800);
  };

  let targetTool: ToolType = 'case';
  if (article.id.includes('cron') || article.slug.includes('cron')) targetTool = 'cron';
  if (article.id.includes('json') || article.slug.includes('json')) targetTool = 'json';

  const otherArticles = allArticles.filter(a => a.id !== article.id);

  return (
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 px-4 sm:px-6">
      {/* 顶部面包屑与返回按钮 */}
      <nav className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#86868B] overflow-x-auto">
          <a
            href={homeHref}
            onClick={(e) => { e.preventDefault(); onBackToTools(); }}
            className="hover:text-[#0071E3] transition-colors whitespace-nowrap"
          >
            {ui.home}
          </a>
          <span>/</span>
          <span className="text-[#86868B] whitespace-nowrap">{ui.guides}</span>
          <span>/</span>
          <span className="text-[#1D1D1F] dark:text-[#F5F5F7] font-medium truncate max-w-[200px] sm:max-w-md">
            {article.title}
          </span>
        </div>

        <a
          href={homeHref}
          onClick={(e) => { e.preventDefault(); onBackToTools(); }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] shadow-sm transition-all whitespace-nowrap cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{ui.backToTools}</span>
        </a>
      </nav>

      {/* 主文章卡片 */}
      <article className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
        {/* Header */}
        <header className="mb-10 pb-8 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#0071E3]/20 dark:text-[#2997FF]">
              <BookOpen className="w-3 h-3" />
              <span>{article.category}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-black/[0.04] dark:bg-white/[0.06] text-[#86868B]">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </span>
            <span className="text-xs text-[#86868B]">
              {article.updatedDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed mb-6 font-normal">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#86868B] pt-4 border-t border-black/[0.04] dark:border-white/[0.04] gap-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0071E3] to-[#47A1FF] flex items-center justify-center text-white text-[10px] font-bold">
                DT
              </div>
              <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">{ui.author}</span>
            </div>
            <span className="text-[#34C759] font-medium flex items-center gap-1">
              {ui.verified}
            </span>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-10 text-[#333336] dark:text-[#D1D1D6]">
          {article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90">
                  {p}
                </p>
              ))}

              {/* Callout */}
              {section.callout && (
                <div
                  className={`p-4 sm:p-5 rounded-2xl border flex items-start space-x-3.5 my-5 ${
                    section.callout.type === 'tip'
                      ? 'bg-[#0071E3]/5 border-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]'
                      : section.callout.type === 'warning'
                      ? 'bg-[#FF9500]/5 border-[#FF9500]/20 text-[#FF9500]'
                      : 'bg-black/[0.03] border-black/10 dark:bg-white/[0.04] dark:border-white/10 text-[#86868B]'
                  }`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {section.callout.type === 'tip' && <Lightbulb className="w-5 h-5 text-[#0071E3]" />}
                    {section.callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-[#FF9500]" />}
                    {section.callout.type === 'info' && <Info className="w-5 h-5 text-[#86868B]" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1 text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {section.callout.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                      {section.callout.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Mac 风格代码块 */}
              {section.codeBlock && (
                <div className="my-6 rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-[#1E1E20] shadow-xl">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#18181A] border-b border-white/[0.08]">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                      <span className="ml-2 font-mono text-xs text-white/50">{section.codeBlock.title}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-[11px] font-mono uppercase text-white/40 font-semibold">
                        {section.codeBlock.lang}
                      </span>
                      <button
                        onClick={() => handleCopyCode(section.codeBlock!.code, `code-${sIdx}`)}
                        className="text-white/60 hover:text-white transition-colors cursor-pointer"
                        title="Copy code"
                      >
                        {copiedCodeId === `code-${sIdx}` ? (
                          <Check className="w-4 h-4 text-[#28CD41]" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <pre className="p-4 font-mono text-xs sm:text-sm text-[#E6E6E6] overflow-x-auto leading-relaxed">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 关联工具悬浮行动卡片 (Call To Action) */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0071E3]/10 to-[#0071E3]/5 border border-[#0071E3]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0071E3] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Developer Utility</span>
            </div>
            <p className="text-sm text-[#1D1D1F] dark:text-[#F5F5F7] font-medium">
              Ready to convert naming styles or test your expressions live in-browser?
            </p>
          </div>
          <button
            onClick={() => onOpenTool(targetTool)}
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            {ui.tryTool} →
          </button>
        </div>
      </article>

      {/* 底部推荐阅读 */}
      {otherArticles.length > 0 && (
        <section className="mt-14">
          <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-5">
            {ui.moreGuides}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherArticles.slice(0, 2).map((other) => {
              const otherHref = locale === 'en' ? `/articles/${other.slug}/` : `/${locale}/articles/${other.slug}/`;
              return (
                <a
                  key={other.id}
                  href={otherHref}
                  onClick={(e) => { e.preventDefault(); onSelectArticle(other.slug); }}
                  className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/50 transition-all block group cursor-pointer"
                >
                  <span className="text-xs text-[#0071E3] font-semibold block mb-1.5">
                    {other.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] transition-colors line-clamp-2 mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#86868B] line-clamp-2">
                    {other.summary}
                  </p>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
