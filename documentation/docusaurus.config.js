const config = {
  title: 'Maritaca API Documentation',
  tagline: 'API Documentation',
  url: 'https://maritaca-ai.github.io',
  baseUrl: '/',
  favicon: '/img/nova_identidade/Digital/logo/logo.png',
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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.js'),
        
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        src: 'img/nova_identidade/Digital/logo/logo.png',
      },
      items: [
        {
          to: 'api/pt/completion',
          label: 'API Reference',
          position: 'left',
          className: 'bold-text',
        },
        {
          href: 'https://github.com/maritaca-ai/maritalk-api',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'custom-navbarItem',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    prism: {
      additionalLanguages: ['csharp'],
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
