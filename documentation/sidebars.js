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
          label: 'API',
          items: [
            'pt/maritalk-api/comeco-rapido',
            'pt/maritalk-api/openai-compatibilidade',
            'pt/chamada-funcao',
            'pt/structured-outputs',
            'pt/embeddings+Sabia-3+RAG',
            'pt/limites-de-taxa',
            {
              type: 'category',
              label: 'Biblioteca',
              items: [
                'pt/biblioteca',
                'pt/casos-de-uso',
              ],
            },
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
          label: 'API',
          items: [
            'en/maritalk-api/quick-start',
            'en/maritalk-api/openai-compatibility',
            'en/function-call',
            'en/structured-outputs',
            'en/embeddings+Sabia-3+RAG',
            'en/rate-limits',
            {
              type: 'category',
              label: 'Library',
              items: [
                'en/library',
                'en/use-cases',
              ],
            },
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
