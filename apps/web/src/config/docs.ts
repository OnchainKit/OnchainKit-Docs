/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/docs/layout.tsx
 * - src/lib/opendocs/components/docs/pager.tsx
 */

import type { DocsConfig } from '@/lib/opendocs/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',

      title: {
        en: 'Documentation',
        vn: 'Tài liệu',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        en: 'Getting Started',
        vn: 'Bắt đầu',
      },

      items: [
        {
          href: '/docs',

          title: {
            en: 'Introduction',
            vn: 'Giới thiệu',
          },

          items: [],
        },

        {
          href: '/docs/adding-new-docs',

          title: {
            en: 'Adding new docs',
            vn: 'Thêm tài liệu mới',
          },

          items: [],
        },

        {
          href: '/docs/customizing',

          title: {
            en: 'Customizing',
            vn: 'Tùy chỉnh',
          },

          items: [],
        },

        {
          title: {
            en: 'MDX',
          },

          label: {
            en: 'New',
            vn: 'Mới',
          },

          items: [
            {
              href: '/docs/mdx/frontmatter',

              title: {
                en: 'Frontmatter',
                vn: 'Tiêu đề',
              },

              label: {
                en: 'New',
                vn: 'Mới',
              },

              items: [],
            },

            {
              href: '/docs/mdx/code',

              title: {
                en: 'Code',
                vn: 'Mã',
              },

              label: {
                en: 'New',
                vn: 'Mới',
              },

              items: [],
            },

            {
              href: '/docs/mdx/components',

              title: {
                en: 'Components',
                vn: 'Thành phần',
              },

              label: {
                en: 'New',
                vn: 'Mới',
              },

              items: [],
            },
          ],
        },

        {
          href: '/docs/changelog',

          title: {
            en: 'Changelog',
            vn: 'Lịch sử thay đổi',
          },

          items: [],
        },
      ],
    },
  ],
} as const
