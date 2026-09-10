import React, { useState } from 'react';
import { Locale, translations } from '../lib/i18n';
import { articlesData, Article } from '../lib/articlesData';
import { BookOpen, Clock, ArrowRight, ArrowLeft, Check, Copy, Sparkles, Lightbulb, AlertTriangle, Info, X } from 'lucide-react';

interface GuidesSectionProps {
  locale: Locale;
  activeArticleId?: string | null;
  onSelectArticle: (articleId: string | null) => void;
}

export function GuidesSection({ locale, activeArticleId, onSelectArticle }: GuidesSectionProps) {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const t = translations[locale] || translations.en;
  const nav = t.nav as any;
  const articles: Article[] = articlesData[locale] || articlesData.en;

  const currentArticle = articles.find((a) => a.id === activeArticleId) || null;

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 1800);
  };

  // 如果处于文章详情阅读模式
  if (currentArticle) {
    return (
      <article id="article-reader" className="w-full max-w-4xl mx-auto my-12 px-4 animate-in fade-in duration-300">
        {/* 面包屑导航与返回按钮 */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <button
            onClick={() => onSelectArticle(null)}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#0071E3] dark:text-[#2997FF] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{nav.backToGuides || 'Back to Guides'}</span>
          </button>

          <div className="flex items-center space-x-2 text-xs text-[#86868B]">
            <span className="px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {currentArticle.category}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentArticle.readTime}</span>
            </span>
          </div>
        </div>

        {/* 文章标题与主副标题 */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4 leading-tight">
            {currentArticle.title}
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed font-normal">
            {currentArticle.summary}
          </p>
          <div className="mt-4 flex items-center space-x-3 text-xs text-[#86868B]">
            <span>Last Updated: {currentArticle.updatedDate}</span>
            <span>•</span>
            <span className="text-[#34C759] font-medium">✓ Verified Technical Specification</span>
          </div>
        </header>

        {/* 正文章节渲染 */}
        <div className="space-y-10">
          {currentArticle.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90 leading-relaxed">
                  {p}
                </p>
              ))}

              {/* 引用与提示信息卡片 */}
              {section.callout && (
                <div
                  className={`p-4 rounded-2xl border flex items-start space-x-3 my-4 ${
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
                    <p className="text-xs md:text-sm text-[#1D1D1F]/80 dark:text-[#F5F5F7]/80 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                </div>
              )}

              {/* 优雅 Mac 风格代码块 */}
              {section.codeBlock && (
                <div className="my-6 rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-[#1E1E20] shadow-xl">
                  {/* 代码窗口头部 */}
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
                        className="text-white/60 hover:text-white transition-colors"
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

                  {/* 代码高亮主体 */}
                  <pre className="p-4 font-mono text-xs md:text-sm text-[#E6E6E6] overflow-x-auto leading-relaxed">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 底部返回与导航 */}
        <div className="mt-14 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onSelectArticle(null)}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#0071E3] text-white text-sm font-semibold hover:bg-[#0077ED] transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{nav.backToGuides || 'Back to All Guides'}</span>
          </button>

          <a
            href="#tools"
            className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
          >
            Back to Developer Utilities ↑
          </a>
        </div>
      </article>
    );
  }

  // 默认模式：展示 4 篇精选指南的 Bento Grid 卡片
  return (
    <section id="guides" className="w-full max-w-5xl mx-auto my-14 px-4">
      {/* 模块头部 */}
      <div className="mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#34C759]/10 text-[#34C759] text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{nav.guidesTab || 'Knowledge Base'}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          {nav.featuredGuidesTitle || 'In-Depth Developer Guides'}
        </h2>
        <p className="text-sm text-[#86868B] mt-1.5 max-w-2xl">
          {nav.featuredGuidesSubtitle || 'Authoritative engineering specifications, clean code standards, and system architecture practices.'}
        </p>
      </div>

      {/* 4 篇指南卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((article) => {
          const articleHref = locale === 'en' ? `/articles/${article.slug}/` : `/${locale}/articles/${article.slug}/`;
          return (
            <a
              key={article.id}
              href={articleHref}
              onClick={(e) => {
                e.preventDefault();
                onSelectArticle(article.slug);
              }}
              className="group cursor-pointer bg-white dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#0071E3]/50 hover:shadow-xl flex flex-col justify-between block no-underline"
            >
              <div>
                {/* 分类标签与阅读时长 */}
                <div className="flex items-center justify-between mb-3 text-xs text-[#86868B]">
                  <span className="px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] font-medium text-[#0071E3] dark:text-[#2997FF]">
                    {article.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* 标题与摘要 */}
                <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-xs md:text-sm text-[#86868B] leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              {/* 查看按钮 */}
              <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-[#0071E3] dark:text-[#2997FF]">
                <span>{nav.readGuide || 'Read In-Depth Guide'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
