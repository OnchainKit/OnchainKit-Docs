import { absoluteUrl } from '@/lib/utils'
import en from '@/i18n/locales/en.json'
import vn from '@/i18n/locales/vn.json'

export const siteConfig = {
  name: 'opendocs',

  description: {
    en: en.site.description,
    vn: vn.site.description,
  },

  url: process.env.NEXT_PUBLIC_APP_URL,

  og: {
    image: absoluteUrl('/og.jpg'),

    size: {
      width: 1200,
      height: 630,
    },
  },

  app: {
    latestVersion: '3.0.3',
  },

  author: {
    name: 'SaitamaCoder',
    site: 'https://saitama.dev',
  },

  links: {
    twitter: {
      label: 'Twitter',
      username: '@SaitamaCoder_VN',
      url: 'https://x.com/SaitamaCoder_VN',
    },

    github: {
      label: 'GitHub',
      url: 'https://github.com/OnchainKit/OnchainKit-Docs',
    },
  },
} as const

export type SiteConfig = typeof siteConfig
