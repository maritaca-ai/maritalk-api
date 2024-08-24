const config = {
  title: 'Maritaca API Documentation',
  tagline: 'API Documentation',
  url: 'https://maritaca-ai.github.io', 
  baseUrl: '/', 
  favicon: '/img/maritaca.png',
  organizationName: 'maritaca-ai', 
  projectName: 'maritalk', 
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    localeConfigs: {
      pt: {
        label: 'Português',
        direction: 'ltr',
        path: 'pt',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', 
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        src: '/img/maritaca.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/maritaca-ai/maritalk-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
   
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
    },
  ],
};

module.exports = config;
