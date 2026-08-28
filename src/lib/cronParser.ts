/* ==========================================================================
   [SEO & GEO 算法核心库] - Cron 表达式高精度解析与真实触发时间计算引擎
   - 纯前端客户端计算，0 延迟、0 服务器开销、0 隐私泄露
   - 包含真实 Cron 步进匹配算法与全场景自然语言智能解析 (支持全部特例与多语言)
   ========================================================================== */

import { Locale } from './i18n';

export type CronMode = 'linux' | 'spring' | 'quartz';

export interface NextRunItem {
  formatted: string;
  fromNow: string;
}

// 常用生产级预设模板 (Quick Presets)
export interface CronPreset {
  label: Record<Locale, string>;
  expression: string;
  mode: CronMode;
}

export const CRON_PRESETS: CronPreset[] = [
  // Linux Presets
  {
    label: {
      en: 'Linux: Every 12 hours (:00)',
      zh: 'Linux: 每 12 小时整点执行',
      es: 'Linux: Cada 12 horas en punto',
      ja: 'Linux: 12時間ごと (正時)',
      de: 'Linux: Alle 12 Stunden (:00)',
      fr: 'Linux: Toutes les 12 heures (:00)',
    },
    expression: '0 */12 * * *',
    mode: 'linux',
  },
  {
    label: {
      en: 'Linux: Every 5 minutes',
      zh: 'Linux: 每隔 5 分钟',
      es: 'Linux: Cada 5 minutos',
      ja: 'Linux: 5分ごと',
      de: 'Linux: Alle 5 Minuten',
      fr: 'Linux: Toutes les 5 minutes',
    },
    expression: '*/5 * * * *',
    mode: 'linux',
  },
  {
    label: {
      en: 'Linux: Daily at midnight',
      zh: 'Linux: 每天凌晨 00:00',
      es: 'Linux: Diario a medianoche',
      ja: 'Linux: 毎日深夜 00:00',
      de: 'Linux: Täglich um 00:00',
      fr: 'Linux: Tous les jours à minuit',
    },
    expression: '0 0 * * *',
    mode: 'linux',
  },
  // Spring Presets
  {
    label: {
      en: 'Spring: End of month (28-31) at 18:00',
      zh: 'Spring: 每月末 (28-31日) 18:00',
      es: 'Spring: Fin de mes (28-31) a las 18:00',
      ja: 'Spring: 月末 (28-31日) 18:00',
      de: 'Spring: Monatsende (28-31) um 18:00',
      fr: 'Spring: Fin de mois (28-31) à 18:00',
    },
    expression: '0 0 18 28-31 * ?',
    mode: 'spring',
  },
  {
    label: {
      en: 'Spring: Workdays at 09:00 AM',
      zh: 'Spring: 工作日早晨 09:00',
      es: 'Spring: Días laborales 09:00',
      ja: 'Spring: 平日 午前 09:00',
      de: 'Spring: Werktags um 09:00',
      fr: 'Spring: Jours ouvrés à 09:00',
    },
    expression: '0 0 9 ? * MON-FRI',
    mode: 'spring',
  },
  {
    label: {
      en: 'Spring: Every 30 seconds',
      zh: 'Spring: 每隔 30 秒执行',
      es: 'Spring: Cada 30 segundos',
      ja: 'Spring: 30秒ごと',
      de: 'Spring: Alle 30 Sekunden',
      fr: 'Spring: Toutes les 30 secondes',
    },
    expression: '*/30 * * * * ?',
    mode: 'spring',
  },
  // Quartz Presets
  {
    label: {
      en: 'Quartz: Last day of month at 18:00',
      zh: 'Quartz: 每月最后一天 18:00 (L)',
      es: 'Quartz: Último día del mes a las 18:00',
      ja: 'Quartz: 毎月末日 18:00 (L)',
      de: 'Quartz: Letzter Tag des Monats um 18:00',
      fr: 'Quartz: Dernier jour du mois à 18:00',
    },
    expression: '0 0 18 L * ?',
    mode: 'quartz',
  },
  {
    label: {
      en: 'Quartz: Last Friday of month at 12:00',
      zh: 'Quartz: 每月最后一个周五 12:00 (6L)',
      es: 'Quartz: Último viernes del mes a las 12:00',
      ja: 'Quartz: 毎月最終金曜日 12:00 (6L)',
      de: 'Quartz: Letzter Freitag des Monats um 12:00',
      fr: 'Quartz: Dernier vendredi du mois à 12:00',
    },
    expression: '0 0 12 ? * 6L',
    mode: 'quartz',
  },
  {
    label: {
      en: 'Quartz: Nearest workday to 15th at 12:00',
      zh: 'Quartz: 临近 15 号的工作日 12:00 (15W)',
      es: 'Quartz: Día laborable más cercano al 15 a las 12:00',
      ja: 'Quartz: 15日に最も近い平日 12:00 (15W)',
      de: 'Quartz: Nächster Werktag zum 15. um 12:00',
      fr: 'Quartz: Jour ouvré le plus proche du 15 à 12:00',
    },
    expression: '0 0 12 15W * ?',
    mode: 'quartz',
  },
  {
    label: {
      en: 'Quartz: 3rd Friday of month at 09:00',
      zh: 'Quartz: 每月第 3 个周五 09:00 (6#3)',
      es: 'Quartz: 3er viernes del mes a las 09:00',
      ja: 'Quartz: 毎月第3金曜日 09:00 (6#3)',
      de: 'Quartz: 3. Freitag des Monats um 09:00',
      fr: 'Quartz: 3ème vendredi du mois à 09:00',
    },
    expression: '0 0 9 ? * 6#3',
    mode: 'quartz',
  },
];

export interface CronFieldInfo {
  id: 'sec' | 'min' | 'hour' | 'dom' | 'mon' | 'dow' | 'year';
  name: string;
  raw: string;
  meaning: string;
  allowed: string;
}

export interface ParsedCron {
  isValid: boolean;
  error?: string;
  explanation: string;
  fields: CronFieldInfo[];
}

function getOrdinal(n: number, locale: Locale): string {
  if (locale === 'zh') return `第 ${n} 个`;
  if (locale === 'ja') return `第${n}`;
  if (locale === 'es') return `${n}º`;
  if (locale === 'fr') return `${n}e`;
  if (locale === 'de') return `${n}.`;
  // en
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function getWeekdayName(dow: string | number, locale: Locale, isQuartz: boolean = false): string {
  const d = String(dow).toUpperCase();
  const dayIndex = isQuartz
    ? { '1': 'SUN', '2': 'MON', '3': 'TUE', '4': 'WED', '5': 'THU', '6': 'FRI', '7': 'SAT' }[d] || d
    : { '0': 'SUN', '1': 'MON', '2': 'TUE', '3': 'WED', '4': 'THU', '5': 'FRI', '6': 'SAT', '7': 'SUN' }[d] || d;

  const names: Record<string, Record<Locale, string>> = {
    SUN: { zh: '周日', en: 'Sunday', es: 'domingo', ja: '日曜日', de: 'Sonntag', fr: 'dimanche' },
    MON: { zh: '周一', en: 'Monday', es: 'lunes', ja: '月曜日', de: 'Montag', fr: 'lundi' },
    TUE: { zh: '周二', en: 'Tuesday', es: 'martes', ja: '火曜日', de: 'Dienstag', fr: 'mardi' },
    WED: { zh: '周三', en: 'Wednesday', es: 'miércoles', ja: '水曜日', de: 'Mittwoch', fr: 'mercredi' },
    THU: { zh: '周四', en: 'Thursday', es: 'jueves', ja: '木曜日', de: 'Donnerstag', fr: 'jeudi' },
    FRI: { zh: '周五', en: 'Friday', es: 'viernes', ja: '金曜日', de: 'Freitag', fr: 'vendredi' },
    SAT: { zh: '周六', en: 'Saturday', es: 'sábado', ja: '土曜日', de: 'Samstag', fr: 'samedi' },
  };

  return names[dayIndex]?.[locale] || dayIndex;
}

function getCronErrorMessage(type: 'empty' | 'linuxCount' | 'springCount' | 'quartzCount' | 'minRange' | 'hourRange', count: number, locale: Locale): string {
  const map: Record<string, Record<Locale, string>> = {
    empty: {
      zh: '请输入 Cron 表达式',
      en: 'Please enter a Cron expression',
      es: 'Por favor, introduzca una expresión Cron',
      ja: 'Cron 式を入力してください',
      de: 'Bitte geben Sie einen Cron-Ausdruck ein',
      fr: 'Veuillez saisir une expression Cron',
    },
    linuxCount: {
      zh: `Linux 规范要求 5 个字段 (当前为 ${count} 个)`,
      en: `Linux Cron requires exactly 5 fields (got ${count})`,
      es: `Linux Cron requiere exactamente 5 campos (se obtuvieron ${count})`,
      ja: `Linux Cron は5つのフィールドが必要です (現在: ${count})`,
      de: `Linux Cron erfordert genau 5 Felder (aktuell ${count})`,
      fr: `Linux Cron requiert exactement 5 champs (${count} reçus)`,
    },
    springCount: {
      zh: `Spring 规范要求 6 个字段 (当前为 ${count} 个)`,
      en: `Spring Cron requires exactly 6 fields (got ${count})`,
      es: `Spring Cron requiere exactamente 6 campos (se obtuvieron ${count})`,
      ja: `Spring Cron は6つのフィールドが必要です (現在: ${count})`,
      de: `Spring Cron erfordert genau 6 Felder (aktuell ${count})`,
      fr: `Spring Cron requiert exactement 6 champs (${count} reçus)`,
    },
    quartzCount: {
      zh: `Quartz 规范要求 6 或 7 个字段 (当前为 ${count} 个)`,
      en: `Quartz Cron requires 6 or 7 fields (got ${count})`,
      es: `Quartz Cron requiere 6 o 7 campos (se obtuvieron ${count})`,
      ja: `Quartz Cron は6または7つのフィールドが必要です (現在: ${count})`,
      de: `Quartz Cron erfordert 6 oder 7 Felder (aktuell ${count})`,
      fr: `Quartz Cron requiert 6 ou 7 champs (${count} reçus)`,
    },
    minRange: {
      zh: '分钟字段超出范围 (0-59)',
      en: 'Minute field out of range (0-59)',
      es: 'Campo de minutos fuera de rango (0-59)',
      ja: '分フィールドの値が範囲外です (0-59)',
      de: 'Minutenfeld außerhalb des Bereichs (0-59)',
      fr: 'Champ des minutes hors limites (0-59)',
    },
    hourRange: {
      zh: '小时字段超出范围 (0-23)',
      en: 'Hour field out of range (0-23)',
      es: 'Campo de horas fuera de rango (0-23)',
      ja: '時フィールドの値が範囲外です (0-23)',
      de: 'Stundenfeld außerhalb des Bereichs (0-23)',
      fr: 'Champ des heures hors limites (0-23)',
    },
  };
  return map[type]?.[locale] || map[type]?.en || 'Invalid Cron Syntax';
}

/**
 * 解析 Cron 表达式并输出结构化说明
 */
export function parseCronExpression(
  expression: string,
  mode: CronMode = 'linux',
  locale: Locale = 'zh'
): ParsedCron {
  const trimmed = expression.trim();
  if (!trimmed) {
    return {
      isValid: false,
      error: getCronErrorMessage('empty', 0, locale),
      explanation: '',
      fields: [],
    };
  }

  const parts = trimmed.split(/\s+/);
  const isQuartz = mode === 'quartz';
  const isSpring = mode === 'spring';

  if (mode === 'linux' && parts.length !== 5) {
    return {
      isValid: false,
      error: getCronErrorMessage('linuxCount', parts.length, locale),
      explanation: '',
      fields: [],
    };
  }
  if (isSpring && parts.length !== 6) {
    return {
      isValid: false,
      error: getCronErrorMessage('springCount', parts.length, locale),
      explanation: '',
      fields: [],
    };
  }
  if (isQuartz && (parts.length < 6 || parts.length > 7)) {
    return {
      isValid: false,
      error: getCronErrorMessage('quartzCount', parts.length, locale),
      explanation: '',
      fields: [],
    };
  }

  try {
    let sec = '0';
    let min = '*';
    let hour = '*';
    let dom = '*';
    let mon = '*';
    let dow = '*';
    let year: string | undefined = undefined;

    if (mode === 'linux') {
      [min, hour, dom, mon, dow] = parts;
    } else if (isSpring) {
      [sec, min, hour, dom, mon, dow] = parts;
    } else {
      [sec, min, hour, dom, mon, dow] = parts;
      if (parts[6]) year = parts[6];
    }

    // 简单范围校验
    if (min !== '*' && !/^[0-9\-\,\/\*\?]+$/.test(min)) {
      const parsedMin = parseInt(min, 10);
      if (!isNaN(parsedMin) && (parsedMin < 0 || parsedMin > 59)) {
        return {
          isValid: false,
          error: getCronErrorMessage('minRange', 0, locale),
          explanation: '',
          fields: [],
        };
      }
    }
    if (hour !== '*' && !/^[0-9\-\,\/\*\?]+$/.test(hour)) {
      const parsedHour = parseInt(hour, 10);
      if (!isNaN(parsedHour) && (parsedHour < 0 || parsedHour > 23)) {
        return {
          isValid: false,
          error: getCronErrorMessage('hourRange', 0, locale),
          explanation: '',
          fields: [],
        };
      }
    }

    const fields: CronFieldInfo[] = [];

    if (mode !== 'linux') {
      fields.push({
        id: 'sec',
        name: 'Seconds',
        raw: sec,
        meaning: formatFieldMeaning(sec, 'sec', locale),
        allowed: '0-59 (* , - /)',
      });
    }

    fields.push({
      id: 'min',
      name: 'Minutes',
      raw: min,
      meaning: formatFieldMeaning(min, 'min', locale),
      allowed: '0-59 (* , - /)',
    });

    fields.push({
      id: 'hour',
      name: 'Hours',
      raw: hour,
      meaning: formatFieldMeaning(hour, 'hour', locale),
      allowed: '0-23 (* , - /)',
    });

    fields.push({
      id: 'dom',
      name: 'Day of Month',
      raw: dom,
      meaning: formatFieldMeaning(dom, 'dom', locale),
      allowed: isQuartz ? '1-31 (* , - / ? L W)' : '1-31 (* , - / ?)',
    });

    fields.push({
      id: 'mon',
      name: 'Month',
      raw: mon,
      meaning: formatFieldMeaning(mon, 'mon', locale),
      allowed: '1-12 or JAN-DEC (* , - /)',
    });

    fields.push({
      id: 'dow',
      name: 'Day of Week',
      raw: dow,
      meaning: formatFieldMeaning(dow, 'dow', locale, isQuartz),
      allowed: isQuartz ? '1-7 (1=Sun) or SUN-SAT (* , - / ? L #)' : '0-7 (0/7=Sun) or SUN-SAT (* , - / ?)',
    });

    if (year !== undefined) {
      fields.push({
        id: 'year',
        name: 'Year',
        raw: year,
        meaning: formatFieldMeaning(year, 'year', locale),
        allowed: '1970-2099 (* , - /)',
      });
    }

    const explanation = generateHumanSummary({
      sec,
      min,
      hour,
      dom,
      mon,
      dow,
      year,
      mode,
      locale,
    });

    return {
      isValid: true,
      explanation,
      fields,
    };
  } catch (err: any) {
    return {
      isValid: false,
      error: err.message || (locale === 'zh' ? 'Cron 语法不正确' : 'Invalid Cron Syntax'),
      explanation: '',
      fields: [],
    };
  }
}

function formatFieldMeaning(
  raw: string,
  type: 'sec' | 'min' | 'hour' | 'dom' | 'mon' | 'dow' | 'year',
  locale: Locale,
  isQuartz: boolean = false
): string {
  if (raw === '*') return locale === 'zh' ? '每单位' : 'Every unit';
  if (raw === '?') return locale === 'zh' ? '不指定 / 忽略' : 'No specific value';
  return raw;
}

function padZero(n: string | number): string {
  return String(n).padStart(2, '0');
}

function generateHumanSummary(params: {
  sec: string;
  min: string;
  hour: string;
  dom: string;
  mon: string;
  dow: string;
  year?: string;
  mode: CronMode;
  locale: Locale;
}): string {
  const { sec, min, hour, dom, mon, dow, year, mode, locale } = params;
  const isQuartz = mode === 'quartz';
  // 准确判断工作日 (Linux/Spring 1-5 或 MON-FRI; Quartz 2-6 或 MON-FRI)
  const isWorkdayDow = dow.toUpperCase() === 'MON-FRI' || (!isQuartz && dow === '1-5') || (isQuartz && dow === '2-6');

  // 1. 每隔 X 秒
  if (sec.startsWith('*/') && min === '*' && hour === '*') {
    const step = sec.slice(2);
    const map: Record<Locale, string> = {
      zh: `每隔 ${step} 秒执行一次。`,
      en: `Every ${step} seconds.`,
      es: `Cada ${step} segundos.`,
      ja: `${step} 秒ごとに実行します。`,
      de: `Alle ${step} Sekunden.`,
      fr: `Toutes les ${step} secondes.`,
    };
    return map[locale] || map.en;
  }

  // 2. 每隔 X 分钟
  if (min.startsWith('*/') && hour === '*' && dom === '*' && mon === '*' && (dow === '*' || dow === '?')) {
    const step = min.slice(2);
    const map: Record<Locale, string> = {
      zh: `每隔 ${step} 分钟执行一次。`,
      en: `Every ${step} minutes.`,
      es: `Cada ${step} minutos.`,
      ja: `${step} 分ごとに実行します。`,
      de: `Alle ${step} Minuten.`,
      fr: `Toutes les ${step} minutes.`,
    };
    return map[locale] || map.en;
  }

  // 3. 每隔 X 小时整点 (:00)
  if (min === '0' && hour.startsWith('*/') && dom === '*' && mon === '*' && (dow === '*' || dow === '?')) {
    const step = hour.slice(2);
    const map: Record<Locale, string> = {
      zh: `每隔 ${step} 小时整点 (:00) 执行一次。`,
      en: `Every ${step} hours on the hour (:00).`,
      es: `Cada ${step} horas en punto (:00).`,
      ja: `${step} 時間ごとの正時 (:00) に実行します。`,
      de: `Alle ${step} Stunden zur vollen Stunde (:00).`,
      fr: `Toutes les ${step} heures à la minute 00 (:00).`,
    };
    return map[locale] || map.en;
  }

  // 4. 工作日特定时间 (Mon-Fri at HH:MM:SS) - 修复括号优先级 Bug!
  if (isWorkdayDow && (dom === '?' || dom === '*')) {
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `每周一至周五 (工作日) ${timeStr} 执行一次。`,
      en: `Every workday (Mon-Fri) at ${timeStr}.`,
      es: `Cada día laborable (lun-vie) a las ${timeStr}.`,
      ja: `毎週月〜金曜日 (平日) ${timeStr} に実行します。`,
      de: `Jeden Werktag (Mo-Fr) um ${timeStr}.`,
      fr: `Tous les jours ouvrés (lun-ven) à ${timeStr}.`,
    };
    return map[locale] || map.en;
  }

  // 5. 每月最后一天 (L)
  if (dom.toUpperCase() === 'L') {
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `每月最后一天 ${timeStr} 执行一次 (L)。`,
      en: `On the last day of every month at ${timeStr} (L).`,
      es: `El último día de cada mes a las ${timeStr} (L).`,
      ja: `毎月末日 ${timeStr} に実行します (L)。`,
      de: `Am letzten Tag jedes Monats um ${timeStr} (L).`,
      fr: `Le dernier jour de chaque mois à ${timeStr} (L).`,
    };
    return map[locale] || map.en;
  }

  // 6. 每月最后一个指定星期几 (e.g. 6L = last Friday in Quartz)
  if (dow.toUpperCase().endsWith('L') && dow.length > 1) {
    const targetDow = dow.slice(0, -1);
    const dowName = getWeekdayName(targetDow, locale, isQuartz);
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `每月最后一个${dowName} ${timeStr} 执行一次 (${dow})。`,
      en: `On the last ${dowName} of every month at ${timeStr} (${dow}).`,
      es: `El último ${dowName} de cada mes a las ${timeStr} (${dow}).`,
      ja: `毎月最終${dowName} ${timeStr} に実行します (${dow})。`,
      de: `Am letzten ${dowName} jedes Monats um ${timeStr} (${dow}).`,
      fr: `Le dernier ${dowName} de chaque mois à ${timeStr} (${dow}).`,
    };
    return map[locale] || map.en;
  }

  // 7. 每月第 N 个指定星期几 (e.g. 6#3 in Quartz)
  if (dow.includes('#')) {
    const [targetDow, nthStr] = dow.split('#');
    const nth = parseInt(nthStr, 10) || 1;
    const dowName = getWeekdayName(targetDow, locale, isQuartz);
    const nthDesc = getOrdinal(nth, locale);
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `每月${nthDesc}${dowName} ${timeStr} 执行一次 (${dow})。`,
      en: `On the ${nthDesc} ${dowName} of every month at ${timeStr} (${dow}).`,
      es: `El ${nthDesc} ${dowName} de cada mes a las ${timeStr} (${dow}).`,
      ja: `毎月${nthDesc}${dowName} ${timeStr} に実行します (${dow})。`,
      de: `Am ${nthDesc} ${dowName} jedes Monats um ${timeStr} (${dow}).`,
      fr: `Le ${nthDesc} ${dowName} de chaque mois à ${timeStr} (${dow}).`,
    };
    return map[locale] || map.en;
  }

  // 8. 临近某日的工作日 (e.g. 15W)
  if (dom.toUpperCase().endsWith('W')) {
    const targetDay = dom.slice(0, -1);
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `最接近每月 ${targetDay} 号的工作日 ${timeStr} 执行一次 (${dom})。`,
      en: `On the nearest weekday to the ${targetDay}th of every month at ${timeStr} (${dom}).`,
      es: `El día laborable más cercano al día ${targetDay} de cada mes a las ${timeStr} (${dom}).`,
      ja: `毎月${targetDay}日に最も近い平日 ${timeStr} に执行します (${dom})。`,
      de: `Am nächsten Werktag zum ${targetDay}. des Monats um ${timeStr} (${dom}).`,
      fr: `Le jour ouvré le plus proche du ${targetDay} du mois à ${timeStr} (${dom}).`,
    };
    return map[locale] || map.en;
  }

  // 9. 每月末区间 (28-31)
  if (dom === '28-31') {
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `每月末 (28-31日) ${timeStr} 执行一次。`,
      en: `On the 28th-31st (end of month) at ${timeStr}.`,
      es: `A fin de mes (días 28-31) a las ${timeStr}.`,
      ja: `毎月末 (28-31日) ${timeStr} に実行します。`,
      de: `Am Monatsende (28.-31.) um ${timeStr}.`,
      fr: `En fin de mois (28-31) à ${timeStr}.`,
    };
    return map[locale] || map.en;
  }

  // 10. 每天具体固定时间 (Daily at HH:MM(:SS))
  if (dom === '*' && mon === '*' && (dow === '*' || dow === '?') && !hour.includes('/') && !hour.includes('-') && !hour.includes(',')) {
    const timeStr = mode === 'linux' ? `${padZero(hour)}:${padZero(min)}` : `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
    const map: Record<Locale, string> = {
      zh: `每天 ${timeStr} 执行一次。`,
      en: `Every day at ${timeStr}.`,
      es: `Todos los días a las ${timeStr}.`,
      ja: `毎日 ${timeStr} に実行します。`,
      de: `Täglich um ${timeStr}.`,
      fr: `Tous les jours à ${timeStr}.`,
    };
    return map[locale] || map.en;
  }

  // 11. 时间段范围 (e.g. 9-18 every hour)
  if (hour.includes('-') && min === '0' && dom === '*' && mon === '*' && (dow === '*' || dow === '?')) {
    const [startH, endH] = hour.split('-');
    const map: Record<Locale, string> = {
      zh: `每天 ${padZero(startH)}:00 至 ${padZero(endH)}:00 每小时整点执行一次。`,
      en: `Every hour between ${padZero(startH)}:00 and ${padZero(endH)}:00 daily.`,
      es: `Cada hora entre las ${padZero(startH)}:00 y las ${padZero(endH)}:00 todos los días.`,
      ja: `毎日 ${padZero(startH)}:00 から ${padZero(endH)}:00 まで毎正時に実行します。`,
      de: `Täglich zu jeder vollen Stunde von ${padZero(startH)}:00 bis ${padZero(endH)}:00.`,
      fr: `Toutes les heures entre ${padZero(startH)}:00 et ${padZero(endH)}:00 chaque jour.`,
    };
    return map[locale] || map.en;
  }

  // 通用兜底完整语义化说明
  if (mode === 'linux') {
    const map: Record<Locale, string> = {
      zh: `Linux Crontab 调度：分[${min}]，时[${hour}]，日[${dom}]，月[${mon}]，周[${dow}]。`,
      en: `Linux Cron schedule: minute [${min}], hour [${hour}], day of month [${dom}], month [${mon}], weekday [${dow}].`,
      es: `Horario Linux Cron: minuto [${min}], hora [${hour}], día del mes [${dom}], mes [${mon}], día de semana [${dow}].`,
      ja: `Linux Cron スケジュール: 分[${min}] 時[${hour}] 日[${dom}] 月[${mon}] 曜日[${dow}]。`,
      de: `Linux Cron Zeitplan: Minute [${min}], Stunde [${hour}], Tag [${dom}], Monat [${mon}], Wochentag [${dow}].`,
      fr: `Planification Linux Cron : minute [${min}], heure [${hour}], jour du mois [${dom}], mois [${mon}], jour de semaine [${dow}].`,
    };
    return map[locale] || map.en;
  }

  if (mode === 'spring') {
    const map: Record<Locale, string> = {
      zh: `Spring 调度：秒[${sec}]，分[${min}]，时[${hour}]，日[${dom}]，月[${mon}]，周[${dow}]。`,
      en: `Spring Cron schedule: second [${sec}], minute [${min}], hour [${hour}], day [${dom}], month [${mon}], weekday [${dow}].`,
      es: `Horario Spring Cron: segundo [${sec}], minuto [${min}], hora [${hour}], día [${dom}], mes [${mon}], semana [${dow}].`,
      ja: `Spring Cron スケジュール: 秒[${sec}] 分[${min}] 時[${hour}] 日[${dom}] 月[${mon}] 曜日[${dow}]。`,
      de: `Spring Cron Zeitplan: Sekunde [${sec}], Minute [${min}], Stunde [${hour}], Tag [${dom}], Monat [${mon}], Wochentag [${dow}].`,
      fr: `Planification Spring Cron : seconde [${sec}], minute [${min}], heure [${hour}], jour [${dom}], mois [${mon}], jour [${dow}].`,
    };
    return map[locale] || map.en;
  }

  // Quartz
  const map: Record<Locale, string> = {
    zh: `Quartz 调度：秒[${sec}]，分[${min}]，时[${hour}]，日[${dom}]，月[${mon}]，周[${dow}]${year ? `，年[${year}]` : ''}。`,
    en: `Quartz Cron schedule: second [${sec}], minute [${min}], hour [${hour}], day [${dom}], month [${mon}], weekday [${dow}]${year ? `, year [${year}]` : ''}.`,
    es: `Horario Quartz Cron: segundo [${sec}], minuto [${min}], hora [${hour}], día [${dom}], mes [${mon}], semana [${dow}]${year ? `, año [${year}]` : ''}.`,
    ja: `Quartz Cron スケジュール: 秒[${sec}] 分[${min}] 時[${hour}] 日[${dom}] 月[${mon}] 曜日[${dow}]${year ? ` 年[${year}]` : ''}。`,
    de: `Quartz Cron Zeitplan: Sekunde [${sec}], Minute [${min}], Stunde [${hour}], Tag [${dom}], Monat [${mon}], Wochentag [${dow}]${year ? `, Jahr [${year}]` : ''}.`,
    fr: `Planification Quartz Cron : seconde [${sec}], minute [${min}], heure [${hour}], jour [${dom}], mois [${mon}], jour [${dow}]${year ? `, année [${year}]` : ''}.`,
  };
  return map[locale] || map.en;
}

// 辅助：判断某月天数
function getDaysInMonth(year: number, month1to12: number): number {
  return new Date(year, month1to12, 0).getDate();
}

// 辅助：匹配数值型字段
function matchNumberField(val: number, expr: string, minVal: number, maxVal: number): boolean {
  if (expr === '*' || expr === '?') return true;
  const items = expr.split(',');
  for (const item of items) {
    if (item.includes('/')) {
      const [startStr, stepStr] = item.split('/');
      const step = parseInt(stepStr, 10);
      if (isNaN(step) || step <= 0) continue;
      const start = startStr === '*' ? minVal : parseInt(startStr, 10);
      if (val >= start && (val - start) % step === 0) return true;
    } else if (item.includes('-')) {
      const [lowStr, highStr] = item.split('-');
      const low = parseInt(lowStr, 10);
      const high = parseInt(highStr, 10);
      if (!isNaN(low) && !isNaN(high) && val >= low && val <= high) return true;
    } else {
      if (parseInt(item, 10) === val) return true;
    }
  }
  return false;
}

// 辅助：月份名称转数字
function parseMonth(monExpr: string): string {
  const map: Record<string, string> = {
    JAN: '1', FEB: '2', MAR: '3', APR: '4', MAY: '5', JUN: '6',
    JUL: '7', AUG: '8', SEP: '9', OCT: '10', NOV: '11', DEC: '12',
  };
  let res = monExpr.toUpperCase();
  for (const [k, v] of Object.entries(map)) {
    res = res.replace(new RegExp(k, 'g'), v);
  }
  return res;
}

// 辅助：星期名称转数字
function parseDayOfWeek(dowExpr: string, isQuartz: boolean): string {
  const map: Record<string, string> = isQuartz
    ? { SUN: '1', MON: '2', TUE: '3', WED: '4', THU: '5', FRI: '6', SAT: '7' }
    : { SUN: '0', MON: '1', TUE: '2', WED: '3', THU: '4', FRI: '5', SAT: '6' };
  let res = dowExpr.toUpperCase();
  for (const [k, v] of Object.entries(map)) {
    res = res.replace(new RegExp(k, 'g'), v);
  }
  return res;
}

// 辅助：判断 DOM 是否符合
function matchDom(date: Date, domExpr: string): boolean {
  if (domExpr === '*' || domExpr === '?') return true;
  const dom = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const totalDays = getDaysInMonth(year, month);

  if (domExpr.toUpperCase() === 'L') {
    return dom === totalDays;
  }
  if (domExpr.toUpperCase().endsWith('W')) {
    const targetDay = parseInt(domExpr, 10) || 1;
    let closestDate = new Date(year, month - 1, targetDay);
    const dayOfWeek = closestDate.getDay();
    if (dayOfWeek === 6) {
      closestDate = targetDay === 1 ? new Date(year, month - 1, 3) : new Date(year, month - 1, targetDay - 1);
    } else if (dayOfWeek === 0) {
      closestDate = targetDay === totalDays ? new Date(year, month - 1, targetDay - 2) : new Date(year, month - 1, targetDay + 1);
    }
    return dom === closestDate.getDate();
  }

  return matchNumberField(dom, domExpr, 1, 31);
}

// 辅助：判断 DOW 是否符合
function matchDow(date: Date, dowExpr: string, isQuartz: boolean): boolean {
  if (dowExpr === '*' || dowExpr === '?') return true;
  const jsDay = date.getDay();
  const currentDow = isQuartz ? (jsDay === 0 ? 1 : jsDay + 1) : jsDay;
  const totalDays = getDaysInMonth(date.getFullYear(), date.getMonth() + 1);
  const dom = date.getDate();

  const parsed = parseDayOfWeek(dowExpr, isQuartz);

  if (parsed.toUpperCase().endsWith('L')) {
    const targetDow = parseInt(parsed, 10);
    return currentDow === targetDow && dom + 7 > totalDays;
  }

  if (parsed.includes('#')) {
    const [dowStr, nthStr] = parsed.split('#');
    const targetDow = parseInt(dowStr, 10);
    const nth = parseInt(nthStr, 10);
    const currentNth = Math.ceil(dom / 7);
    return currentDow === targetDow && currentNth === nth;
  }

  const items = parsed.split(',');
  for (const item of items) {
    if (item.includes('-')) {
      const [lowStr, highStr] = item.split('-');
      const low = parseInt(lowStr, 10);
      const high = parseInt(highStr, 10);
      if (currentDow >= low && currentDow <= high) return true;
      if (!isQuartz && (high === 7 && currentDow === 0)) return true;
    } else {
      const num = parseInt(item, 10);
      if (currentDow === num) return true;
      if (!isQuartz && num === 7 && currentDow === 0) return true;
    }
  }
  return false;
}

function formatFromNow(diffMs: number, locale: Locale): string {
  const diffSec = Math.max(1, Math.round(diffMs / 1000));
  const diffMin = Math.round(diffMs / 60000);
  const diffHours = Math.round(diffMs / 3600000);
  const diffDays = Math.round(diffMs / 86400000);

  if (diffSec < 60) {
    switch (locale) {
      case 'zh': return `${diffSec} 秒后`;
      case 'ja': return `${diffSec} 秒後`;
      case 'es': return `en ${diffSec}s`;
      case 'de': return `in ${diffSec} Sek.`;
      case 'fr': return `dans ${diffSec} s`;
      case 'en':
      default: return `in ${diffSec}s`;
    }
  }

  if (diffMin < 60) {
    switch (locale) {
      case 'zh': return `${diffMin} 分钟后`;
      case 'ja': return `${diffMin} 分後`;
      case 'es': return `en ${diffMin} ${diffMin === 1 ? 'minuto' : 'minutos'}`;
      case 'de': return `in ${diffMin} ${diffMin === 1 ? 'Minute' : 'Minuten'}`;
      case 'fr': return `dans ${diffMin} ${diffMin === 1 ? 'minute' : 'minutes'}`;
      case 'en':
      default: return `in ${diffMin} ${diffMin === 1 ? 'min' : 'mins'}`;
    }
  }

  if (diffHours < 24) {
    switch (locale) {
      case 'zh': return `${diffHours} 小时后`;
      case 'ja': return `${diffHours} 時間後`;
      case 'es': return `en ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
      case 'de': return `in ${diffHours} ${diffHours === 1 ? 'Stunde' : 'Stunden'}`;
      case 'fr': return `dans ${diffHours} ${diffHours === 1 ? 'heure' : 'heures'}`;
      case 'en':
      default: return `in ${diffHours} ${diffHours === 1 ? 'hour' : 'hours'}`;
    }
  }

  switch (locale) {
    case 'zh': return `${diffDays} 天后`;
    case 'ja': return `${diffDays} 日後`;
    case 'es': return `en ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    case 'de': return `in ${diffDays} ${diffDays === 1 ? 'Tag' : 'Tagen'}`;
    case 'fr': return `dans ${diffDays} ${diffDays === 1 ? 'jour' : 'jours'}`;
    case 'en':
    default: return `in ${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
  }
}

/* [SEO & GEO 优化点 2] - 真实 Cron 时间步进计算引擎 (Real Upcoming Scheduled Runs) */
export function getNextRuns(
  expression: string,
  mode: CronMode,
  count: number = 7,
  locale: Locale = 'en'
): NextRunItem[] {
  const results: NextRunItem[] = [];
  const parts = expression.trim().split(/\s+/);
  const isQuartz = mode === 'quartz';

  let secExpr = '0';
  let minExpr = '*';
  let hourExpr = '*';
  let domExpr = '*';
  let monExpr = '*';
  let dowExpr = '*';
  let yearExpr = '*';

  if (mode === 'linux') {
    if (parts.length !== 5) return results;
    [minExpr, hourExpr, domExpr, monExpr, dowExpr] = parts;
  } else if (mode === 'spring') {
    if (parts.length !== 6) return results;
    [secExpr, minExpr, hourExpr, domExpr, monExpr, dowExpr] = parts;
  } else {
    if (parts.length < 6 || parts.length > 7) return results;
    [secExpr, minExpr, hourExpr, domExpr, monExpr, dowExpr] = parts;
    if (parts[6]) yearExpr = parts[6];
  }

  monExpr = parseMonth(monExpr);

  const now = new Date();
  const cur = new Date(now.getTime() + 1000);
  if (mode === 'linux') {
    cur.setSeconds(0, 0);
  } else {
    cur.setMilliseconds(0);
  }

  const stepSeconds = (secExpr === '0' || mode === 'linux') ? 60 : 1;
  const maxIterations = 200000;
  let iterations = 0;

  while (results.length < count && iterations < maxIterations) {
    iterations++;

    const sec = cur.getSeconds();
    const min = cur.getMinutes();
    const hour = cur.getHours();
    const dom = cur.getDate();
    const mon = cur.getMonth() + 1;
    const year = cur.getFullYear();

    // 1. 检查年份
    if (yearExpr !== '*' && !matchNumberField(year, yearExpr, 1970, 2099)) {
      cur.setFullYear(year + 1, 0, 1);
      cur.setHours(0, 0, 0, 0);
      continue;
    }

    // 2. 检查月份
    if (!matchNumberField(mon, monExpr, 1, 12)) {
      cur.setMonth(cur.getMonth() + 1, 1);
      cur.setHours(0, 0, 0, 0);
      continue;
    }

    // 3. 检查日期与星期
    const domMatches = matchDom(cur, domExpr);
    const dowMatches = matchDow(cur, dowExpr, isQuartz);

    let dayMatches = false;
    if (domExpr === '*' || domExpr === '?') {
      dayMatches = dowMatches;
    } else if (dowExpr === '*' || dowExpr === '?') {
      dayMatches = domMatches;
    } else {
      dayMatches = domMatches && dowMatches;
    }

    if (!dayMatches) {
      cur.setDate(cur.getDate() + 1);
      cur.setHours(0, 0, 0, 0);
      continue;
    }

    // 4. 检查小时
    if (!matchNumberField(hour, hourExpr, 0, 23)) {
      cur.setHours(cur.getHours() + 1, 0, 0, 0);
      continue;
    }

    // 5. 检查分钟
    if (!matchNumberField(min, minExpr, 0, 59)) {
      cur.setMinutes(cur.getMinutes() + 1, 0, 0);
      continue;
    }

    // 6. 检查秒数 (Spring / Quartz)
    if (mode !== 'linux' && !matchNumberField(sec, secExpr, 0, 59)) {
      cur.setSeconds(cur.getSeconds() + 1);
      continue;
    }

    // 命中！记录时间点
    const formatted = cur.getFullYear() + '-' +
      String(cur.getMonth() + 1).padStart(2, '0') + '-' +
      String(cur.getDate()).padStart(2, '0') + ' ' +
      String(cur.getHours()).padStart(2, '0') + ':' +
      String(cur.getMinutes()).padStart(2, '0') + ':' +
      String(cur.getSeconds()).padStart(2, '0');

    const diffMs = cur.getTime() - now.getTime();
    const fromNow = formatFromNow(diffMs, locale);

    results.push({ formatted, fromNow });

    cur.setSeconds(cur.getSeconds() + stepSeconds);
  }

  return results;
}
