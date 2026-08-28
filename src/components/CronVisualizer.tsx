import React, { useState, useMemo } from 'react';
import { Locale, translations } from '../lib/i18n';
import {
  parseCronExpression,
  getNextRuns,
  CronMode,
  CRON_PRESETS,
  NextRunItem,
} from '../lib/cronParser';
import {
  Clock,
  Zap,
  Check,
  Copy,
  Calendar,
  AlertCircle,
  HelpCircle,
  Table,
  CheckCircle2,
} from 'lucide-react';

interface CronVisualizerProps {
  locale: Locale;
  showToast: (msg: string) => void;
}

export const CronVisualizer: React.FC<CronVisualizerProps> = ({
  locale,
  showToast,
}) => {
  const t = translations[locale]?.cron || translations.en.cron;

  const [mode, setMode] = useState<CronMode>('linux');
  const [expression, setExpression] = useState<string>('0 */12 * * *');
  const [copied, setCopied] = useState<boolean>(false);
  const [calcTrigger, setCalcTrigger] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  // 解析 Cron 表达式
  const explanation = useMemo(() => {
    const res = parseCronExpression(expression, mode, locale);
    return {
      text: res.explanation,
      isValid: res.isValid,
      error: res.error,
      fields: res.fields,
    };
  }, [expression, mode, locale]);

  // 计算未来 7 次触发具体时间戳
  const nextRuns = useMemo<NextRunItem[]>(() => {
    if (!explanation.isValid) return [];
    return getNextRuns(expression, mode, 7, locale);
  }, [expression, mode, calcTrigger, explanation.isValid, locale]);

  const handleCopy = () => {
    if (!expression) return;
    navigator.clipboard.writeText(expression);
    setCopied(true);
    showToast(t.copied);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setCalcTrigger((prev) => prev + 1);
    setTimeout(() => {
      setIsCalculating(false);
      showToast(t.calcBtn + ' ✓');
    }, 200);
  };

  const handleApplyPreset = (expr: string, presetMode: CronMode) => {
    setMode(presetMode);
    setExpression(expr);
    setCalcTrigger((prev) => prev + 1);
    showToast(t.presetApplied);
  };

  return (
    <div className="space-y-6">
      {/* 顶部标题与安全角标 (包含专属 H1 标题) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] p-4 rounded-3xl shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
              {t.title}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#86868B] pl-10">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center space-x-2 pl-10 sm:pl-0">
          <span className="whitespace-nowrap inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            {t.badge}
          </span>
        </div>
      </div>

      {/* 顶部三大模式切换 (Apple Segmented Control) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] p-3 rounded-2xl shadow-sm">
        <div className="inline-flex items-center space-x-1.5 p-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-xl flex-nowrap overflow-x-auto">
          <button
            onClick={() => {
              setMode('linux');
              setExpression('0 */12 * * *');
              setCalcTrigger((prev) => prev + 1);
            }}
            className={`whitespace-nowrap px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'linux'
                ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            🐧 {t.modeLinux}
          </button>
          <button
            onClick={() => {
              setMode('spring');
              setExpression('0 0 18 28-31 * ?');
              setCalcTrigger((prev) => prev + 1);
            }}
            className={`whitespace-nowrap px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'spring'
                ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            🍃 {t.modeSpring}
          </button>
          <button
            onClick={() => {
              setMode('quartz');
              setExpression('0 0 18 L * ?');
              setCalcTrigger((prev) => prev + 1);
            }}
            className={`whitespace-nowrap px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'quartz'
                ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            ⏱️ {t.modeQuartz}
          </button>
        </div>
      </div>

      {/* 主输入与高亮卡片 */}
      <div className="bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-6 shadow-sm space-y-6">
        {/* 输入框与计算按钮区 */}
        <div className="space-y-2">
          <label className="block text-xs font-bold tracking-wider text-[#86868B] uppercase">
            {t.inputLabel}
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder={t.inputPlaceholder}
                className={`w-full text-xl sm:text-2xl font-mono font-bold tracking-wider px-5 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border transition-all focus:outline-none focus:ring-2 ${
                  explanation.isValid
                    ? 'border-black/[0.08] dark:border-white/[0.12] text-[#0071E3] dark:text-[#2997FF] focus:ring-[#0071E3]/40 focus:border-[#0071E3]'
                    : 'border-[#FF3B30]/40 text-[#FF3B30] dark:text-[#FF453A] focus:ring-[#FF3B30]/30 focus:border-[#FF3B30]'
                }`}
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCalculate}
                className="flex-1 sm:flex-initial px-5 py-3 text-sm font-semibold rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white transition-all shadow-[0_2px_8px_rgba(0,113,227,0.3)] flex items-center justify-center space-x-2 cursor-pointer select-none"
              >
                <Zap className={`w-4 h-4 text-white ${isCalculating ? 'animate-bounce' : ''}`} />
                <span className="whitespace-nowrap">{t.calcBtn}</span>
              </button>
              <button
                onClick={handleCopy}
                className="px-4 py-3 text-sm font-semibold rounded-2xl bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7] transition-all active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer select-none"
              >
                {copied ? <Check className="w-4 h-4 text-[#28CD41]" /> : <Copy className="w-4 h-4 text-[#86868B]" />}
                <span className="hidden sm:inline">{t.copyExpr}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 字段可视化分解 (Field Badges) */}
        {explanation.fields.length > 0 && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {explanation.fields.map((field, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center text-center space-y-1"
                >
                  <span className="text-[11px] font-semibold text-[#86868B]">
                    {t.fields[field.id] || field.name}
                  </span>
                  <span className="text-base font-mono font-bold text-[#0071E3] dark:text-[#2997FF] bg-[#0071E3]/10 px-2.5 py-0.5 rounded-lg">
                    {field.raw}
                  </span>
                  <span className="text-[10px] text-[#86868B]/80 truncate w-full">
                    {field.allowed}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 自然语言调度规则解析 (Schedule Summary) */}
        <div
          className={`p-5 rounded-2xl border transition-all flex items-start space-x-3.5 ${
            explanation.isValid
              ? 'bg-[#0071E3]/[0.04] dark:bg-[#0071E3]/[0.08] border-[#0071E3]/20'
              : 'bg-[#FF3B30]/[0.08] dark:bg-[#FF453A]/[0.15] border-[#FF3B30]/30'
          }`}
        >
          <div className="mt-0.5">
            {explanation.isValid ? (
              <Clock className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF]" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#FF3B30] dark:text-[#FF453A]" />
            )}
          </div>
          <div className="space-y-1 flex-1">
            <div
              className={`text-xs font-bold uppercase tracking-wider ${
                explanation.isValid
                  ? 'text-[#0071E3] dark:text-[#2997FF]'
                  : 'text-[#D70015] dark:text-[#FF453A]'
              }`}
            >
              {t.humanExplanation}
            </div>
            <div
              className={`text-base sm:text-lg font-semibold mt-1 leading-snug ${
                explanation.isValid
                  ? 'text-[#1D1D1F] dark:text-[#F5F5F7]'
                  : 'text-[#D70015] dark:text-[#FF453A]'
              }`}
            >
              {explanation.isValid ? `“${explanation.text}”` : (explanation.error || '⚠️ Invalid Cron Expression')}
            </div>
          </div>
        </div>

        {/* [SEO & GEO 优化点 2] - 真实计算的接下来 7 次计划执行时间 (Next 7 Runs) */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#86868B] uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-[#FF9500]" />
            <span>{t.nextRunsTitle}</span>
          </div>

          {nextRuns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {nextRuns.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between hover:border-[#0071E3]/30 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="w-6 h-6 rounded-lg bg-black/[0.05] dark:bg-white/[0.1] text-xs font-mono font-bold flex items-center justify-center text-[#86868B]">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-mono font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {item.formatted}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#28CD41] bg-[#28CD41]/10 px-2 py-0.5 rounded-md whitespace-nowrap">
                    {item.fromNow}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-xs text-[#86868B] text-center">
              {t.emptyRuns}
            </div>
          )}
        </div>

        {/* 常用预设快捷按钮 (Quick Presets) */}
        <div className="space-y-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#86868B] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#FF9500]" />
            <span>{t.quickPresetsTitle}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {CRON_PRESETS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleApplyPreset(preset.expression, preset.mode)}
                className="px-3.5 py-2 text-sm font-medium rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.07] dark:hover:bg-white/[0.1] border border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] transition-all flex items-center space-x-2 active:scale-[0.98] cursor-pointer select-none"
              >
                <span>{preset.label[locale] || preset.label.en}</span>
                <span className="text-xs font-mono font-semibold text-[#86868B] bg-black/[0.05] dark:bg-white/[0.08] px-2 py-0.5 rounded-lg">
                  {preset.expression}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* [SEO & GEO 优化点 3] - 语法规范对照表 (涵盖 Linux / Spring / Quartz) */}
      {t.table && (
        <section className="bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <Table className="w-4 h-4 text-[#0071E3]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {t.table.title}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-black/[0.08] dark:border-white/[0.12] text-[#86868B]">
                  <th className="py-3 pr-4 font-semibold">{t.table.thField}</th>
                  <th className="py-3 px-4 font-semibold">{t.table.thAllowed}</th>
                  <th className="py-3 px-4 font-semibold">{t.table.thSpecial}</th>
                  <th className="py-3 pl-4 font-semibold">{t.table.thExample}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06] font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">
                {(mode === 'spring' || mode === 'quartz') && (
                  <tr>
                    <td className="py-3 pr-4 font-bold text-[#0071E3]">
                      1. {t.fields.sec}
                    </td>
                    <td className="py-3 px-4">0-59</td>
                    <td className="py-3 px-4 text-[#86868B]">* , - /</td>
                    <td className="py-3 pl-4 text-[#FF9500]">0, */30</td>
                  </tr>
                )}
                <tr>
                  <td className="py-3 pr-4 font-bold text-[#0071E3]">
                    {mode === 'linux' ? '1. ' : '2. '}{t.fields.min}
                  </td>
                  <td className="py-3 px-4">0-59</td>
                  <td className="py-3 px-4 text-[#86868B]">* , - /</td>
                  <td className="py-3 pl-4 text-[#FF9500]">0, */5, 15,30</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-[#0071E3]">
                    {mode === 'linux' ? '2. ' : '3. '}{t.fields.hour}
                  </td>
                  <td className="py-3 px-4">0-23</td>
                  <td className="py-3 px-4 text-[#86868B]">* , - /</td>
                  <td className="py-3 pl-4 text-[#FF9500]">0, 9-18, */2</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-[#0071E3]">
                    {mode === 'linux' ? '3. ' : '4. '}{t.fields.dom}
                  </td>
                  <td className="py-3 px-4">1-31</td>
                  <td className="py-3 px-4 text-[#86868B]">* , - / ? L W</td>
                  <td className="py-3 pl-4 text-[#FF9500]">1, 15, L, 15W, 28-31</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-[#0071E3]">
                    {mode === 'linux' ? '4. ' : '5. '}{t.fields.mon}
                  </td>
                  <td className="py-3 px-4">1-12 or JAN-DEC</td>
                  <td className="py-3 px-4 text-[#86868B]">* , - /</td>
                  <td className="py-3 pl-4 text-[#FF9500]">* , 1-6, JAN,JUN</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-[#0071E3]">
                    {mode === 'linux' ? '5. ' : '6. '}{t.fields.dow}
                  </td>
                  <td className="py-3 px-4">{mode === 'quartz' ? '1-7 (1=Sun)' : '0-7 (0/7=Sun)'}</td>
                  <td className="py-3 px-4 text-[#86868B]">* , - / ? L #</td>
                  <td className="py-3 pl-4 text-[#FF9500]">MON-FRI, 5L, 6#3, ?</td>
                </tr>
                {mode === 'quartz' && (
                  <tr>
                    <td className="py-3 pr-4 font-bold text-[#0071E3]">
                      7. {t.fields.year}
                    </td>
                    <td className="py-3 px-4">1970-2099</td>
                    <td className="py-3 px-4 text-[#86868B]">* , - /</td>
                    <td className="py-3 pl-4 text-[#FF9500]">2026, 2026-2030</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* [SEO & GEO 优化点 4] - 结构化技术 Q&A 问答对 (GEO 抓取友好) */}
      {t.faqs && t.faqs.length > 0 && (
        <section className="bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-4 h-4 text-[#28CD41]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {t.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.08] space-y-1.5"
              >
                <div className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center space-x-2">
                  <span className="text-[#0071E3]">Q:</span>
                  <span>{faq.q}</span>
                </div>
                <div className="text-sm text-[#86868B] leading-relaxed pl-5 whitespace-pre-line">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
