module.exports = {
  sidebarPt: [
    {
      type: 'category',
      label: 'Início',
      items: [
        'pt/visao-geral',
        'pt/introducao',
        'pt/modelos',
        'pt/descontinuado',
        {
          type: 'category',
          label: 'API',
          items: [
            'pt/maritalk-api/comeco-rapido',
            'pt/maritalk-api/openai-compatibilidade',
            'pt/casos-de-uso',
            'pt/chamada-funcao',
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
        'en/deprecated',
        {
          type: 'category',
          label: 'Maritalk API',
          items: [
            'en/maritalk-api/quick-start',
            'en/maritalk-api/openai-compatibility',
            'en/use-cases',
            'en/function-call',
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
