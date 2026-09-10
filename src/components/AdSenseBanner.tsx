import React, { useEffect, useRef } from 'react';
import { Locale } from '../lib/i18n';

interface AdSenseBannerProps {
  locale: Locale;
  slot?: string;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  locale,
  slot = 'auto',
  className = '',
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || pushedRef.current) return;
    try {
      if (adRef.current && adRef.current.innerHTML === '') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch {
      // Ignored for adblockers or offline preview
    }
  }, []);

  const adLabels: Record<Locale, string> = {
    en: 'Advertisement',
    zh: '赞助展示 / Advertisement',
    es: 'Publicidad',
    ja: 'スポンサーリンク',
    de: 'Anzeige',
    fr: 'Annonce publicitaire',
  };

  return (
    <div className={`w-full my-6 p-3 sm:p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] overflow-hidden ${className}`}>
      <div className="text-[10px] text-[#86868B] uppercase tracking-wider mb-2 font-medium text-center select-none">
        {adLabels[locale] || adLabels.en}
      </div>
      <div className="flex justify-center items-center min-h-[90px]">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-2337968729641235"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};
