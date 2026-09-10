import React from 'react';
import { useCasesData } from '../lib/featuresData';

interface UseCasesProps {
  locale: string;
  onTryExample?: (text: string, format: string) => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ locale, onTryExample }) => {
  const data = useCasesData[locale] || useCasesData.en;

  const getButtonLabel = (code: string) => {
    switch (code) {
      case 'zh': return '填入此场景测试';
      case 'es': return 'Probar este caso';
      case 'ja': return 'この例で試す';
      case 'de': return 'Beispiel testen';
      case 'fr': return 'Tester cet exemple';
      default: return 'Try this case';
    }
  };

  const getProblemLabel = (code: string) => {
    switch (code) {
      case 'zh': return '痛点挑战';
      case 'es': return 'Problema';
      case 'ja': return '課題';
      case 'de': return 'Problem';
      case 'fr': return 'Problème';
      default: return 'Challenge';
    }
  };

  const getSolutionLabel = (code: string) => {
    switch (code) {
      case 'zh': return '解决方案';
      case 'es': return 'Solución';
      case 'ja': return '解決策';
      case 'de': return 'Lösung';
      case 'fr': return 'Solution';
      default: return 'Solution';
    }
  };

  return (
    <section id="use-cases" className="mb-14 scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#34C759]/10 text-[#34C759] dark:bg-[#34C759]/20 dark:text-[#30D158] mb-3">
          <span>🎯</span>
          <span>{data.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.cases.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#0071E3]/20 dark:text-[#2997FF]">
                  {item.tag}
                </span>
                <span className="text-xs text-[#86868B] font-mono">Case #{idx + 1}</span>
              </div>

              <h3 className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-3 leading-snug">
                {item.title}
              </h3>

              <div className="space-y-3 mb-5">
                <div className="text-xs text-[#86868B] dark:text-[#A1A1A6] bg-[#F5F5F7] dark:bg-[#2C2C2E] p-3 rounded-xl">
                  <strong className="block text-[#FF9500] dark:text-[#FF9F0A] mb-1 font-semibold">
                    ⚠️ {getProblemLabel(locale)}:
                  </strong>
                  {item.problem}
                </div>

                <div className="text-xs text-[#86868B] dark:text-[#A1A1A6] bg-[#0071E3]/5 dark:bg-[#0071E3]/10 p-3 rounded-xl">
                  <strong className="block text-[#0071E3] dark:text-[#2997FF] mb-1 font-semibold">
                    💡 {getSolutionLabel(locale)}:
                  </strong>
                  {item.solution}
                </div>
              </div>

              {/* Code comparison pill */}
              <div className="p-3 rounded-xl bg-[#121214] text-xs font-mono text-white mb-5 space-y-1.5">
                <div className="flex items-center justify-between text-[#86868B] text-[11px]">
                  <span>Input</span>
                  <span className="text-red-400 font-sans">Raw format</span>
                </div>
                <div className="text-gray-300 truncate">{item.inputExample}</div>
                <div className="border-t border-white/10 pt-1.5 flex items-center justify-between text-[#86868B] text-[11px]">
                  <span>Output</span>
                  <span className="text-green-400 font-sans">{item.formatName}</span>
                </div>
                <div className="text-[#30D158] font-bold truncate">{item.outputExample}</div>
              </div>
            </div>

            {onTryExample && (
              <button
                onClick={() => onTryExample(item.inputExample, item.formatName)}
                className="w-full mt-2 py-2 px-3 rounded-xl text-xs font-semibold bg-[#F5F5F7] hover:bg-[#0071E3] text-[#1D1D1F] hover:text-white dark:bg-[#2C2C2E] dark:hover:bg-[#0071E3] dark:text-[#F5F5F7] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>🚀</span>
                <span>{getButtonLabel(locale)}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
