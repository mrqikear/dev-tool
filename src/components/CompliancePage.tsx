import React, { useState } from 'react';
import { complianceData } from '../lib/complianceData';

export type CompliancePageType = 'about' | 'privacy' | 'terms' | 'contact';

interface CompliancePageProps {
  page: CompliancePageType;
  locale: string;
  onBackToTools: () => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({
  page,
  locale,
  onBackToTools,
}) => {
  const localeData = complianceData[locale] || complianceData.en;
  const data = localeData[page] || localeData.privacy;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getLabels = (code: string) => {
    switch (code) {
      case 'zh':
        return {
          back: '返回开发者工具箱',
          home: '首页',
          officialEmail: '官方联系邮箱',
          copyEmail: '📋 复制邮箱地址',
          copiedEmail: '✓ 已复制到剪切板',
          openSource: '开源代码与反馈渠道',
          openSourceDesc: 'GitHub 仓库公开 Issue 追踪与极速响应',
          viewGithub: '访问 GitHub 仓库',
        };
      case 'es':
        return {
          back: 'Volver a Herramientas',
          home: 'Inicio',
          officialEmail: 'Correo Oficial de Contacto',
          copyEmail: '📋 Copiar Correo',
          copiedEmail: '✓ Copiado al portapapeles',
          openSource: 'Código Abierto y Soporte',
          openSourceDesc: 'Seguimiento de incidencias en GitHub con soporte rápido',
          viewGithub: 'Ver Repositorio GitHub',
        };
      case 'ja':
        return {
          back: 'ツール一覧に戻る',
          home: 'ホーム',
          officialEmail: '公式連絡先メール',
          copyEmail: '📋 メールアドレスをコピー',
          copiedEmail: '✓ クリップボードにコピー完了',
          openSource: 'オープンソース＆課題管理',
          openSourceDesc: 'GitHub Issue トラッカー＆迅速なフィードバック',
          viewGithub: 'GitHub リポジトリを見る',
        };
      case 'de':
        return {
          back: 'Zurück zu den Tools',
          home: 'Startseite',
          officialEmail: 'Offizielle E-Mail',
          copyEmail: '📋 E-Mail kopieren',
          copiedEmail: '✓ In die Zwischenablage kopiert',
          openSource: 'Open Source & Feedback',
          openSourceDesc: 'GitHub Issue-Tracker & schneller Entwickler-Support',
          viewGithub: 'GitHub-Repository ansehen',
        };
      case 'fr':
        return {
          back: 'Retour aux outils',
          home: 'Accueil',
          officialEmail: 'Email Officiel de Contact',
          copyEmail: '📋 Copier l\'adresse email',
          copiedEmail: '✓ Copié dans le presse-papiers',
          openSource: 'Code Open Source & Support',
          openSourceDesc: 'Suivi des signalements GitHub & réponses rapides',
          viewGithub: 'Voir le dépôt GitHub',
        };
      default:
        return {
          back: 'Back to Developer Utilities',
          home: 'Home',
          officialEmail: 'Official Contact Email',
          copyEmail: '📋 Copy Email Address',
          copiedEmail: '✓ Copied to clipboard',
          openSource: 'Open Source Code & Issues',
          openSourceDesc: 'GitHub Issue Tracker & SLA Fast Response',
          viewGithub: 'View GitHub Repository',
        };
    }
  };

  const ui = getLabels(locale);

  const copyEmail = () => {
    if (data.contactEmail) {
      navigator.clipboard.writeText(data.contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const homeHref = locale === 'en' ? '/' : `/${locale}/`;

  return (
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 px-4 sm:px-6">
      {/* 顶部面包屑与返回按钮 */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#86868B]">
          <a
            href={homeHref}
            onClick={(e) => { e.preventDefault(); onBackToTools(); }}
            className="hover:text-[#0071E3] transition-colors"
          >
            {ui.home}
          </a>
          <span>/</span>
          <span className="text-[#1D1D1F] dark:text-[#F5F5F7] font-medium">
            {data.title}
          </span>
        </div>

        <a
          href={homeHref}
          onClick={(e) => { e.preventDefault(); onBackToTools(); }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] shadow-sm transition-all cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{ui.back}</span>
        </a>
      </div>

      {/* 页面主卡片 */}
      <article className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#0071E3]/20 dark:text-[#2997FF] mb-3">
            <span>🛡️</span>
            <span>{data.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#86868B]">
            {data.lastUpdated}
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8 text-sm sm:text-base text-[#333336] dark:text-[#D1D1D6] leading-relaxed">
          {data.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {sec.title}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Contact 特别卡片 */}
        {page === 'contact' && data.contactEmail && (
          <div className="mt-10 pt-8 border-t border-black/[0.06] dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider block mb-1">
                  {ui.officialEmail}
                </span>
                <span className="text-base font-mono font-bold text-[#0071E3] dark:text-[#2997FF] break-all">
                  {data.contactEmail}
                </span>
              </div>
              <button
                onClick={copyEmail}
                className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-white dark:bg-[#1C1C1E] border border-black/[0.06] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white transition-colors"
              >
                <span>{copiedEmail ? ui.copiedEmail : ui.copyEmail}</span>
              </button>
            </div>

            {data.githubUrl && (
              <div className="p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider block mb-1">
                    {ui.openSource}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] block">
                    {ui.openSourceDesc}
                  </span>
                </div>
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F] hover:opacity-90 transition-opacity"
                >
                  <span>{ui.viewGithub}</span>
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  );
};
