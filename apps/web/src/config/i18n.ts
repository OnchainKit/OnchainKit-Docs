import type { Locales, LocalizedRecord } from '@/lib/opendocs/types/i18n'

export const defaultLocale = 'en' as const

export const locale = {
  en: defaultLocale,
  vn: 'vn',
} as const

export const labels = {
  [defaultLocale]: 'English',
  [locale.vn]: 'Vietnamese',
} as const

export const dateLocales: LocalizedRecord = {
  en: 'en-US',
  vn: 'vi-VN',
} as const

export const locales = Object.values(locale) as Locales
