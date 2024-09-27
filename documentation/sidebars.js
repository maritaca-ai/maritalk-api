module.exports = {
  sidebarPt: [
    {
      type: 'category',
      label: 'Início',
      items: [
        'pt/visao-geral',
        'pt/introducao',
        'pt/modelos',
        {
          type: 'category',
          label: 'Maritalk API',
          items: [
            'pt/maritalk-api/comeco-rapido',
            'pt/maritalk-api/openai-compatibilidade',
            'pt/casos-de-uso',
          ],
        },
        {
          type: 'category',
          label: 'Maritalk Local',
          items: [
            'pt/maritalk-local/maritalk-local-introducao',
            'pt/maritalk-local/google-cloud',
            'pt/maritalk-local/oracle-cloud',
            'pt/maritalk-local/docker',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Recursos',
      items: [
        'pt/glossario',
        'pt/status',
      ],
    },
  ],
  sidebarEn: [
    {
      type: 'category',
      label: 'Home',
      items: [
        'en/overview',
        'en/introduction',
        'en/models',
        {
          type: 'category',
          label: 'Maritalk API',
          items: [
            'en/api/quick-start',
            'en/api/openai-compatibility',
            'en/use-cases',
          ],
        },
        {
          type: 'category',
          label: 'Maritalk Local',
          items: [
            'en/maritalk-local/maritalk-local-introduction',
            'en/maritalk-local/google-cloud',
            'en/maritalk-local/oracle-cloud',
            'en/maritalk-local/docker',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'en/glossary',
        'en/status',
      ],
    },
  ],
};
