import React, { useState } from 'react';
import { faqData } from '../lib/featuresData';

interface FaqSectionProps {
  locale: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ locale }) => {
  const data = faqData[locale] || faqData.en;
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // First two opened by default

  const toggleIndex = (idx: number) => {
    setOpenIndexes(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="mb-14 scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#AF52DE]/10 text-[#AF52DE] dark:bg-[#AF52DE]/20 dark:text-[#BF5AF2] mb-3">
          <span>💬</span>
          <span>{data.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {data.items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm sm:text-base text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center gap-2.5">
                  <span className="text-[#0071E3] dark:text-[#2997FF] font-mono text-xs">Q{idx + 1}.</span>
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#0071E3]' : ''
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#424245] dark:text-[#A1A1A6] leading-relaxed border-t border-black/[0.04] dark:border-white/[0.04]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
