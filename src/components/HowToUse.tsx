import React from 'react';
import { howToData } from '../lib/featuresData';

interface HowToUseProps {
  locale: string;
}

export const HowToUse: React.FC<HowToUseProps> = ({ locale }) => {
  const data = howToData[locale] || howToData.en;

  const stepIcons = [
    // Step 1: Input / File icon
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    // Step 2: Format / Options icon
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    // Step 3: Copy / Checkmark icon
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
      </svg>
    ),
  ];

  return (
    <section id="how-to" className="mb-14 scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#0071E3]/20 dark:text-[#2997FF] mb-3">
          <span>⚡</span>
          <span>{data.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.steps.map((step, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF]">
                {step.step}
              </span>
              <div className="p-2 rounded-xl bg-[#0071E3]/5 text-[#0071E3] dark:bg-[#0071E3]/15 dark:text-[#2997FF] group-hover:scale-110 transition-transform">
                {stepIcons[idx]}
              </div>
            </div>

            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
