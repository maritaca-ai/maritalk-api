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
            {
              type: 'category',
              label: 'Biblioteca',
              items: [
                'pt/biblioteca',
                'pt/casos-de-uso',
              ],
            },
            'pt/chamada-funcao',
            'pt/embeddings+Sabia-3+RAG',
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
          label: 'API',
          items: [
            'en/maritalk-api/quick-start',
            'en/maritalk-api/openai-compatibility',
            {
              type: 'category',
              label: 'Library',
              items: [
                'en/library',
                'en/use-cases',
              ],
            },
            'en/function-call',
            'en/embeddings+Sabia-3+RAG',
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
