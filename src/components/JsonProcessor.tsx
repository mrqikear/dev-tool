import React, { useState, useMemo } from 'react';
import { Locale, translations } from '../lib/i18n';
import {
  validateJson,
  formatJson,
  minifyJson,
  escapeJson,
  unescapeJson,
  decodeUnicode,
  encodeUnicode,
  jsonToTypeScript,
  highlightJsonHtml,
  SAMPLE_JSON,
} from '../lib/jsonEngine';
import {
  Code,
  Sparkles,
  Copy,
  Check,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle2,
  FileCode,
  Table,
  HelpCircle,
  Maximize2,
  Minimize2,
  Columns,
  Eye,
  Type,
} from 'lucide-react';

interface JsonProcessorProps {
  locale: Locale;
  showToast: (msg: string) => void;
}

type ViewMode = 'split' | 'outputOnly' | 'inputOnly';
type FontSize = '14' | '16' | '18';

export const JsonProcessor: React.FC<JsonProcessorProps> = ({
  locale,
  showToast,
}) => {
  const t = translations[locale]?.json || translations.en.json;

  const [input, setInput] = useState<string>(SAMPLE_JSON);
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [fontSize, setFontSize] = useState<FontSize>('16');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showHighlighted, setShowHighlighted] = useState<boolean>(true);

  // 全屏切换与同步
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
      showToast(t.views.fullscreen + ' ✓');
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
      showToast(t.views.exitFullscreen + ' ✓');
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
        setIsFullscreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  // 实时校验状态
  const validation = useMemo(() => {
    return validateJson(input);
  }, [input]);

  // 行数统计
  const inputLines = useMemo(() => {
    return input ? input.split('\n').length : 0;
  }, [input]);

  const outputLines = useMemo(() => {
    const text = output || input;
    return text ? text.split('\n').length : 0;
  }, [output, input]);

  // 代码语法高亮 HTML
  const highlightedHtml = useMemo(() => {
    const text = output || input;
    return highlightJsonHtml(text);
  }, [output, input]);

  // 字号样式类
  const fontSizeClass = useMemo(() => {
    switch (fontSize) {
      case '14':
        return 'text-sm leading-relaxed';
      case '18':
        return 'text-lg leading-loose';
      case '16':
      default:
        return 'text-base leading-relaxed';
    }
  }, [fontSize]);

  // 处理操作
  const handleFormat = (indent: number) => {
    if (!input.trim()) return;
    try {
      const res = formatJson(input, indent);
      setOutput(res);
      setShowHighlighted(true);
      showToast(indent === 2 ? t.buttons.format2 + ' ✓' : t.buttons.format4 + ' ✓');
    } catch (err: any) {
      showToast('⚠️ ' + (t.errors?.formatError || 'JSON Format Error'));
    }
  };

  const handleMinify = () => {
    if (!input.trim()) return;
    try {
      const res = minifyJson(input);
      setOutput(res);
      setShowHighlighted(false);
      showToast(t.buttons.minify + ' ✓');
    } catch (err: any) {
      showToast('⚠️ ' + (t.errors?.formatError || 'JSON Format Error'));
    }
  };

  const handleEscape = () => {
    if (!input.trim()) return;
    const res = escapeJson(input);
    setOutput(res);
    setShowHighlighted(false);
    showToast(t.buttons.escape + ' ✓');
  };

  const handleUnescape = () => {
    if (!input.trim()) return;
    const res = unescapeJson(input);
    setOutput(res);
    setShowHighlighted(true);
    showToast(t.buttons.unescape + ' ✓');
  };

  const handleUnicodeDecode = () => {
    if (!input.trim()) return;
    const res = decodeUnicode(input);
    setOutput(res);
    showToast(t.buttons.unicodeDecode + ' ✓');
  };

  const handleUnicodeEncode = () => {
    if (!input.trim()) return;
    const res = encodeUnicode(input);
    setOutput(res);
    showToast(t.buttons.unicodeEncode + ' ✓');
  };

  const handleToTypeScript = () => {
    if (!input.trim()) return;
    try {
      const res = jsonToTypeScript(input, 'RootModel');
      setOutput(res);
      showToast(t.buttons.toTypeScript + ' ✓');
    } catch (err: any) {
      showToast('⚠️ ' + (t.errors?.parseError || 'JSON Parse Error'));
    }
  };

  const handleLoadSample = () => {
    setInput(SAMPLE_JSON);
    setOutput('');
    showToast(t.buttons.sample + ' ✓');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    showToast(t.buttons.clear + ' ✓');
  };

  const handleCopyOutput = () => {
    const textToCopy = output || input;
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast(t.buttons.copy + ' ✓');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = output || input;
    if (!content) return;
    const blob = new Blob([content], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = output.includes('export interface') ? 'types.ts' : 'data.json';
    link.click();
    URL.revokeObjectURL(url);
    showToast(t.buttons.download + ' ✓');
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-[9999] bg-[#F5F5F7] dark:bg-[#000000] p-3 sm:p-5 flex flex-col h-screen w-screen overflow-hidden' : ''}`}>
      {/* 顶部标题与安全角标（非全屏模式下显示） */}
      {!isFullscreen && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] p-4 rounded-3xl shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center font-bold">
                <FileCode className="w-4 h-4" />
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
            <span className="whitespace-nowrap inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#28CD41]/10 text-[#28CD41]">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
              {t.badge}
            </span>
          </div>
        </div>
      )}

      {/* 快捷操作工具栏 (Apple SF 风格操作按钮) */}
      <div className={`bg-white/95 dark:bg-[#1C1C1E]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-4 sm:p-5 shadow-sm space-y-3 ${isFullscreen ? 'flex-1 flex flex-col min-h-0 overflow-hidden' : ''}`}>
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          {/* 主力高亮操作按钮 */}
          <button
            onClick={() => handleFormat(2)}
            className="apple-btn apple-btn-primary flex items-center space-x-1.5 text-xs sm:text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.buttons.format2}</span>
          </button>
          <button
            onClick={() => handleFormat(4)}
            className="apple-btn apple-btn-secondary text-xs sm:text-sm"
          >
            {t.buttons.format4}
          </button>
          <button
            onClick={handleMinify}
            className="apple-btn apple-btn-secondary text-xs sm:text-sm"
          >
            {t.buttons.minify}
          </button>
          <button
            onClick={handleToTypeScript}
            className="apple-btn apple-btn-tint-orange font-bold flex items-center space-x-1.5 text-xs sm:text-sm"
          >
            <Code className="w-4 h-4" />
            <span>{t.buttons.toTypeScript}</span>
          </button>

          <div className="hidden md:block w-px h-6 bg-black/[0.08] dark:bg-white/[0.12] mx-1" />

          {/* 转义与编码按钮 */}
          <button
            onClick={handleEscape}
            className="apple-btn apple-btn-secondary text-xs"
          >
            {t.buttons.escape}
          </button>
          <button
            onClick={handleUnescape}
            className="apple-btn apple-btn-secondary text-xs"
          >
            {t.buttons.unescape}
          </button>
          <button
            onClick={handleUnicodeDecode}
            className="apple-btn apple-btn-secondary text-xs"
          >
            {t.buttons.unicodeDecode}
          </button>
          <button
            onClick={handleUnicodeEncode}
            className="apple-btn apple-btn-secondary text-xs"
          >
            {t.buttons.unicodeEncode}
          </button>

          <div className="flex-1" />

          {/* 辅助工具 */}
          <button
            onClick={handleLoadSample}
            className="apple-btn apple-btn-secondary text-xs"
          >
            {t.buttons.sample}
          </button>
          <button
            onClick={handleDownload}
            className="apple-btn apple-btn-secondary text-xs flex items-center space-x-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.buttons.download}</span>
          </button>
          <button
            onClick={handleClear}
            className="apple-btn apple-btn-danger text-xs flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.buttons.clear}</span>
          </button>
        </div>

        {/* 状态栏与视图控制控制器 (Validation + View Mode + Font Zoom + Fullscreen) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex-shrink-0">
          {/* 左侧：语法状态条 */}
          {input.trim() ? (
            <div
              className={`px-3.5 py-1.5 rounded-xl border flex items-center space-x-2.5 transition-all ${
                validation.isValid
                  ? 'bg-[#28CD41]/[0.08] dark:bg-[#28CD41]/[0.15] border-[#28CD41]/30 text-[#1D1D1F] dark:text-[#F5F5F7]'
                  : 'bg-[#FF3B30]/[0.08] dark:bg-[#FF453A]/[0.15] border-[#FF3B30]/30 text-[#D70015] dark:text-[#FF453A]'
              }`}
            >
              {validation.isValid ? (
                <CheckCircle2 className="w-4 h-4 text-[#28CD41] flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-[#FF3B30] flex-shrink-0" />
              )}
              <span className="text-xs font-semibold">
                {validation.isValid
                  ? `${t.validBadge} (${validation.nodeCount} ${t.stats.nodes} · ${validation.byteSize} ${t.stats.size})`
                  : validation.line !== undefined && validation.column !== undefined
                  ? locale === 'zh'
                    ? `${t.invalidBadge} (第 ${validation.line} 行, 第 ${validation.column} 列)`
                    : locale === 'ja'
                    ? `${t.invalidBadge} (${validation.line} 行目, ${validation.column} 列目)`
                    : locale === 'es'
                    ? `${t.invalidBadge} (Línea ${validation.line}, Columna ${validation.column})`
                    : locale === 'de'
                    ? `${t.invalidBadge} (Zeile ${validation.line}, Spalte ${validation.column})`
                    : locale === 'fr'
                    ? `${t.invalidBadge} (Ligne ${validation.line}, Colonne ${validation.column})`
                    : `${t.invalidBadge} (Line ${validation.line}, Column ${validation.column})`
                  : `${t.invalidBadge}`}
              </span>
            </div>
          ) : (
            <div className="text-xs text-[#86868B] px-1">{t.views.ready}</div>
          )}

          {/* 右侧：视觉舒适度控制器 (视图切换 + 字号调节 + 全屏沉浸) */}
          <div className="flex items-center space-x-2.5 self-end md:self-auto flex-wrap">
            {/* 字号调节 */}
            <div className="inline-flex items-center p-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-xl space-x-1">
              <Type className="w-3.5 h-3.5 text-[#86868B] ml-1.5 mr-0.5" />
              <button
                onClick={() => setFontSize('14')}
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all ${
                  fontSize === '14'
                    ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
                title="14px"
              >
                14
              </button>
              <button
                onClick={() => setFontSize('16')}
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all ${
                  fontSize === '16'
                    ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
                title="16px"
              >
                16
              </button>
              <button
                onClick={() => setFontSize('18')}
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all ${
                  fontSize === '18'
                    ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
                title="18px"
              >
                18
              </button>
            </div>

            {/* 视图分屏切换器 */}
            <div className="inline-flex items-center p-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-xl space-x-1">
              <button
                onClick={() => setViewMode('split')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all flex items-center space-x-1 ${
                  viewMode === 'split'
                    ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
                title={t.views.split}
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.views.split}</span>
              </button>
              <button
                onClick={() => setViewMode('outputOnly')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all flex items-center space-x-1 ${
                  viewMode === 'outputOnly'
                    ? 'bg-white dark:bg-[#2C2C2E] text-[#0071E3] dark:text-[#2997FF] shadow-sm'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
                title={t.views.wide}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.views.wide}</span>
              </button>
            </div>

            {/* 全屏沉浸模式按钮 */}
            <button
              onClick={toggleFullscreen}
              className={`p-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${
                isFullscreen
                  ? 'bg-[#0071E3] text-white shadow-md'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
              title={isFullscreen ? t.views.exitFullscreen : t.views.fullscreen}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span className="text-xs font-bold px-1 hidden sm:inline">{t.views.exitFullscreen} (ESC)</span>
                </>
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* 双栏 / 全景 编辑器视图 */}
        <div className={`grid gap-4 ${viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} ${isFullscreen ? 'flex-1 min-h-0' : ''}`}>
          {/* 左栏：输入区域 */}
          {(viewMode === 'split' || viewMode === 'inputOnly') && (
            <div className={`space-y-2 ${isFullscreen ? 'flex flex-col h-full min-h-0' : ''}`}>
              <div className="flex items-center justify-between px-1 flex-shrink-0">
                <label className="text-xs font-bold tracking-wider text-[#86868B] uppercase">
                  {t.inputLabel}
                </label>
                <span className="text-xs font-mono text-[#86868B]">
                  {input.length} chars · {inputLines} lines
                </span>
              </div>
              <div className={`relative ${isFullscreen ? 'flex-1 min-h-0 flex flex-col' : ''}`}>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  rows={isFullscreen ? 30 : 20}
                  spellCheck={false}
                  className={`w-full p-5 font-mono ${fontSizeClass} rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border transition-all focus:outline-none focus:ring-2 shadow-inner ${
                    isFullscreen ? 'h-full min-h-0 flex-1 resize-none' : 'resize-y'
                  } ${
                    validation.isValid || !input.trim()
                      ? 'border-black/[0.08] dark:border-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7] focus:ring-[#0071E3]/40 focus:border-[#0071E3]'
                      : 'border-[#FF3B30]/40 text-[#FF3B30] dark:text-[#FF453A] focus:ring-[#FF3B30]/30 focus:border-[#FF3B30]'
                  }`}
                />
              </div>
            </div>
          )}

          {/* 右栏：处理结果 / 高亮语法输出区域 */}
          {(viewMode === 'split' || viewMode === 'outputOnly') && (
            <div className={`space-y-2 ${isFullscreen ? 'flex flex-col h-full min-h-0' : ''}`}>
              <div className="flex items-center justify-between px-1 flex-shrink-0">
                <label className="text-xs font-bold tracking-wider text-[#86868B] uppercase">
                  {t.outputLabel}
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-[#86868B]">
                    {(output || input).length} chars · {outputLines} lines
                  </span>
                  <button
                    onClick={handleCopyOutput}
                    className="px-3.5 py-1 text-xs font-semibold rounded-lg bg-[#0071E3] hover:bg-[#0077ED] text-white transition-all shadow-sm flex items-center space-x-1 active:scale-95 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#28CD41]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? t.views.copied : t.buttons.copy}</span>
                  </button>
                </div>
              </div>
              <div className={`relative ${isFullscreen ? 'flex-1 min-h-0 flex flex-col' : ''}`}>
                {showHighlighted ? (
                  <div
                    className={`w-full p-5 font-mono ${fontSizeClass} rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.12] overflow-x-auto overflow-y-auto whitespace-pre selection:bg-[#0071E3]/20 shadow-inner ${
                      isFullscreen ? 'h-full min-h-0 flex-1' : 'min-h-[460px] max-h-[600px]'
                    }`}
                    dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                  />
                ) : (
                  <textarea
                    value={output || input}
                    readOnly
                    placeholder={t.outputPlaceholder}
                    rows={isFullscreen ? 30 : 20}
                    spellCheck={false}
                    className={`w-full p-5 font-mono ${fontSizeClass} rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.12] text-[#0071E3] dark:text-[#2997FF] focus:outline-none selection:bg-[#0071E3]/20 shadow-inner ${
                      isFullscreen ? 'h-full min-h-0 flex-1 resize-none' : 'resize-y'
                    }`}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* [SEO & GEO 优化点 3] - JSON 规范与数据类型对照表（非全屏下展示） */}
      {!isFullscreen && t.table && t.table.rows && (
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
                  <th className="py-3 pr-4 font-semibold">{t.table.thType}</th>
                  <th className="py-3 px-4 font-semibold">{t.table.thExample}</th>
                  <th className="py-3 pl-4 font-semibold">{t.table.thDesc}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06] font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">
                {t.table.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-4 font-bold text-[#0071E3]">{row.type}</td>
                    <td className="py-3 px-4 text-[#FF9500]">{row.example}</td>
                    <td className="py-3 pl-4 font-sans text-xs text-[#86868B]">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* [SEO & GEO 优化点 4] - 结构化技术 Q&A 问答对（非全屏下展示） */}
      {!isFullscreen && t.faqs && t.faqs.length > 0 && (
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
