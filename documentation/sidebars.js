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
      ],
    },
],
};
