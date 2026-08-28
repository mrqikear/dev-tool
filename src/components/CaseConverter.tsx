import React, { useState, useRef } from 'react';
import { Locale, translations } from '../lib/i18n';
import * as C from '../lib/converters';
import {
  Copy,
  Scissors,
  Trash2,
  HelpCircle,
  Table,
  Type,
  CheckCircle2,
} from 'lucide-react';

interface CaseConverterProps {
  locale: Locale;
  showToast: (msg: string) => void;
}

export const CaseConverter: React.FC<CaseConverterProps> = ({
  locale,
  showToast,
}) => {
  const t = translations[locale]?.case || translations.en.case;

  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [autoCopy, setAutoCopy] = useState<boolean>(false);
  const [showNewBox, setShowNewBox] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 转换处理总入口
  const handleTransform = (fn: (str: string) => string) => {
    if (!inputText) return;
    const res = fn(inputText);
    if (showNewBox) {
      setOutputText(res);
    } else {
      setInputText(res);
    }

    if (autoCopy) {
      navigator.clipboard.writeText(res);
      showToast(t.copySuccess);
    }
  };

  // 手动复制
  const handleCopy = () => {
    const textToCopy = showNewBox && outputText ? outputText : inputText;
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    showToast(t.copySuccess);
  };

  // 手动剪切
  const handleCut = () => {
    if (!inputText) return;
    navigator.clipboard.writeText(inputText);
    setInputText('');
    setOutputText('');
    showToast(t.cutSuccess);
  };

  // 清空输入
  const handleClear = () => {
    setInputText('');
    setOutputText('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="space-y-6">
      {/* 顶部标题与安全角标 (包含专属 H1 标题) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] p-4 rounded-3xl shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center font-bold">
              <Type className="w-4 h-4" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
              {t.title}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#86868B] pl-10">
            {t.tips}
          </p>
        </div>

        <div className="flex items-center space-x-2 pl-10 sm:pl-0">
          <span className="whitespace-nowrap inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#28CD41]/10 text-[#28CD41]">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            {t.badge}
          </span>
        </div>
      </div>

      {/* 选项栏 */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] px-5 py-3 rounded-2xl shadow-sm">
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
          {/* 自动复制单选 */}
          <div className="flex items-center space-x-2">
            <span className="text-[#86868B]">{t.options.autoCopy}</span>
            <label className="inline-flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="autoCopy"
                checked={autoCopy === true}
                onChange={() => setAutoCopy(true)}
                className="text-[#0071E3] focus:ring-[#0071E3] w-4 h-4"
              />
              <span>{t.options.yes}</span>
            </label>
            <label className="inline-flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="autoCopy"
                checked={autoCopy === false}
                onChange={() => setAutoCopy(false)}
                className="text-[#0071E3] focus:ring-[#0071E3] w-4 h-4"
              />
              <span>{t.options.no}</span>
            </label>
          </div>

          <div className="hidden sm:block w-px h-4 bg-black/10 dark:bg-white/10" />

          {/* 新窗口显示结果单选 */}
          <div className="flex items-center space-x-2">
            <span className="text-[#86868B]">{t.options.showNewBox}</span>
            <label className="inline-flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="showNewBox"
                checked={showNewBox === true}
                onChange={() => setShowNewBox(true)}
                className="text-[#0071E3] focus:ring-[#0071E3] w-4 h-4"
              />
              <span>{t.options.yes}</span>
            </label>
            <label className="inline-flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="showNewBox"
                checked={showNewBox === false}
                onChange={() => setShowNewBox(false)}
                className="text-[#0071E3] focus:ring-[#0071E3] w-4 h-4"
              />
              <span>{t.options.no}</span>
            </label>
          </div>
        </div>
      </div>

      {/* 文本输入区域 */}
      <div
        className={`grid gap-4 ${
          showNewBox ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {/* 输入框 */}
        <div className="relative bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-5 shadow-sm flex flex-col focus-within:ring-2 focus-within:ring-[#0071E3]/30 transition-all">
          <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.04] dark:border-white/[0.06] mb-2.5 text-xs font-bold tracking-wider text-[#86868B] uppercase">
            <span>{t.inputLabel}</span>
            <span className="font-mono text-xs font-semibold">
              {inputText.length} {t.charsLabel}
            </span>
          </div>
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.placeholder}
            rows={showNewBox ? 9 : 8}
            className="w-full bg-transparent resize-y text-base font-mono leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B]/60 focus:outline-none"
          />
        </div>

        {/* 独立结果展示框 (双栏模式) */}
        {showNewBox && (
          <div className="relative bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-5 shadow-sm flex flex-col focus-within:ring-2 focus-within:ring-[#0071E3]/30 transition-all">
            <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.04] dark:border-white/[0.06] mb-2.5 text-xs font-bold tracking-wider text-[#86868B] uppercase">
              <span>{t.resultLabel}</span>
              <span className="font-mono text-xs font-semibold">
                {outputText.length} {t.charsLabel}
              </span>
            </div>
            <textarea
              readOnly
              value={outputText}
              placeholder={t.resultPlaceholder}
              rows={9}
              className="w-full bg-transparent resize-y text-base font-mono leading-relaxed text-[#0071E3] dark:text-[#2997FF] placeholder-[#86868B]/60 focus:outline-none selection:bg-[#0071E3]/20"
            />
          </div>
        )}
      </div>

      {/* 格式转换操作按钮面板 */}
      <div className="bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-5 shadow-sm space-y-4">
        {/* 第一排：核心大小写转换与剪贴板操作 */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTransform(C.toUpperCase)}
            className="apple-btn-primary"
          >
            {t.buttons.upper}
          </button>
          <button
            onClick={() => handleTransform(C.toLowerCase)}
            className="apple-btn-secondary"
          >
            {t.buttons.lower}
          </button>
          <button
            onClick={() => handleTransform(C.toCapitalizeWords)}
            className="apple-btn-secondary"
          >
            {t.buttons.capitalize}
          </button>
          <button
            onClick={() => handleTransform(C.toLowerFirstWords)}
            className="apple-btn-secondary"
          >
            {t.buttons.lowerFirst}
          </button>
          <button
            onClick={() => handleTransform(C.toSentenceCase)}
            className="apple-btn-secondary"
          >
            {t.buttons.sentence}
          </button>
          <button
            onClick={() => handleTransform(C.toTitleCase)}
            className="apple-btn-secondary"
          >
            {t.buttons.title}
          </button>

          <div className="hidden sm:block w-px h-6 bg-black/[0.08] dark:bg-white/[0.12] mx-1 self-center" />

          {/* 剪贴板动作 */}
          <button
            onClick={handleCopy}
            className="apple-btn-tint flex items-center space-x-1"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{t.buttons.copy}</span>
          </button>
          <button
            onClick={handleCut}
            className="apple-btn-tint flex items-center space-x-1"
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>{t.buttons.cut}</span>
          </button>
          <button
            onClick={handleClear}
            className="apple-btn-danger flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.buttons.clear}</span>
          </button>
        </div>

        {/* 第二排：编程命名转换与代码变量规范 */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-black/[0.04] dark:border-white/[0.06]">
          <button
            onClick={() => handleTransform(C.spaceToSnake)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.spaceToSnake}
          </button>
          <button
            onClick={() => handleTransform(C.snakeToCamel)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.snakeToCamel}
          </button>
          <button
            onClick={() => handleTransform(C.camelToSnake)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.camelToSnake}
          </button>
          <button
            onClick={() => handleTransform(C.camelToSpace)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.camelToSpace}
          </button>
          <button
            onClick={() => handleTransform(C.spaceToKebab)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.spaceToKebab}
          </button>
          <button
            onClick={() => handleTransform(C.snakeToKebab)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.snakeToKebab}
          </button>
          <button
            onClick={() => handleTransform(C.kebabToSnake)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.kebabToSnake}
          </button>
          <button
            onClick={() => handleTransform(C.snakeToSpace)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.snakeToSpace}
          </button>
          <button
            onClick={() => handleTransform(C.snakeToDot)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.snakeToDot}
          </button>
          <button
            onClick={() => handleTransform(C.dotToSnake)}
            className="apple-btn-tint-orange"
          >
            {t.buttons.dotToSnake}
          </button>
        </div>

        {/* 第三排：排版清洗与空白处理 */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-black/[0.04] dark:border-white/[0.06]">
          <button
            onClick={() => handleTransform(C.spaceToNewline)}
            className="apple-btn-secondary"
          >
            {t.buttons.spaceToNewline}
          </button>
          <button
            onClick={() => handleTransform(C.newlineToSpace)}
            className="apple-btn-secondary"
          >
            {t.buttons.newlineToSpace}
          </button>
          <button
            onClick={() => handleTransform(C.stripSymbols)}
            className="apple-btn-secondary"
          >
            {t.buttons.stripSymbols}
          </button>
          <button
            onClick={() => handleTransform(C.stripSpaces)}
            className="apple-btn-secondary"
          >
            {t.buttons.stripSpaces}
          </button>
          <button
            onClick={() => handleTransform(C.removeEmptyLines)}
            className="apple-btn-secondary"
          >
            {t.buttons.stripNewlines}
          </button>
        </div>
      </div>

      {/* [SEO & GEO 优化点] - 命名规范对比表 (100% 动态多语言支持) */}
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
                  <th className="py-3 pr-4 font-semibold">{t.table.thConvention}</th>
                  <th className="py-3 px-4 font-semibold">{t.table.thExample}</th>
                  <th className="py-3 pl-4 font-semibold">{t.table.thUsage}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06] font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">
                {t.table.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-4 font-bold text-[#0071E3]">{row.name}</td>
                    <td className="py-3 px-4 text-[#FF9500]">{row.example}</td>
                    <td className="py-3 pl-4 font-sans text-xs text-[#86868B]">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* [SEO & GEO 优化点 2] - 结构化技术 Q&A 问答对 (GEO 抓取友好) */}
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
