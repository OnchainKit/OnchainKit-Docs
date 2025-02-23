import type { BlogConfig } from '../lib/opendocs/types/blog'

export const blogConfig: BlogConfig = {
  mainNav: [
    {
      href: '/blog',

      title: {
        en: 'Blog',
      },
    },
  ],

  authors: [
    {
      /* the id property must be the same as author_id in the blog post mdx files required for the computed field
        in contentlayer.config.ts so we can get the author details from the blogConfig by comparing the author_id
        with the id below
      */
      id: 'saitama',
      name: 'Saitama',
      image: '/authors/saitama.jpg',
      site: 'https://saitama.dev',
      email: 'coderhopham@gmail.com',

      bio: {
        en: 'Software Engineer | Writer | Designer',
        vn: 'Kỹ sư phần mềm | Người Viết | Nhà Thiết kế',
      },

      social: {
        github: 'saitamaCoder',
        twitter: '@SaitamaCoder_VN',
        youtube: 'saitamaCoder',
        linkedin: 'saitamaCoder',
      },
    },
  ],

  rss: [
    {
      type: 'xml',
      file: 'blog.xml',
      contentType: 'application/xml',
    },

    {
      type: 'json',
      file: 'blog.json',
      contentType: 'application/json',
    },
  ],
} as const
