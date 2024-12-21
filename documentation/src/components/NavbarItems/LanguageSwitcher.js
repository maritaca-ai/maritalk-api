import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFlagUsa, faFlag } from '@fortawesome/free-solid-svg-icons';

const pathMap = {
  '/pt/visao-geral': '/en/overview',
  '/pt/introducao': '/en/introduction',
  '/pt/modelos': '/en/models',
  '/pt/maritalk-api/comeco-rapido': '/en/maritalk-api/quick-start',
  '/pt/maritalk-api/openai-compatibilidade': '/en/maritalk-api/openai-compatibility',
  '/pt/biblioteca': '/en/library',
  '/pt/casos-de-uso': '/en/use-cases',
  '/pt/glossario': '/en/glossary',
  '/pt/status': '/en/status',
  '/pt/descontinuado': '/en/deprecated',
  '/pt/chamada-funcao': '/en/function-call',
  '/api/pt/completion': '/api/en/completion',
  '/api/pt/completion-response': '/api/en/completion-response',
  '/api/pt/list-models': '/api/en/list-models',
  '/api/pt/list-models-response': '/api/en/list-models-response',
  '/api/pt/endpoints': '/api/en/endpoints',
};

const pathReverseMap = Object.fromEntries(
  Object.entries(pathMap).map(([ptPath, enPath]) => [enPath, ptPath])
);

const LanguageSwitcher = () => {
  const location = useLocation();
  const history = useHistory();
  const [selectedLang, setSelectedLang] = useState('pt');

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedLang(currentPath.startsWith('/en') || currentPath.includes('/api/en') ? 'en' : 'pt');
  }, [location.pathname]);

  const getNewPath = (currentPath, newLang) => {
    if (newLang === 'en') {
      return pathMap[currentPath] || currentPath.replace(/^\/pt/, '/en').replace(/\/api\/pt/, '/api/en');
    } else {
      return pathReverseMap[currentPath] || currentPath.replace(/^\/en/, '/pt').replace(/\/api\/en/, '/api/pt');
    }
  };

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    const newPath = getNewPath(location.pathname, newLang);
    history.push(newPath || (newLang === 'en' ? '/en/overview' : '/pt/visao-geral'));
  };

  const languageLabels = {
    en: { en: 'English', pt: 'Portuguese' },
    pt: { en: 'Inglês', pt: 'Português' },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px' }}>
      <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '1.2em', color: '#007bff' }} />
      <select
        onChange={handleLanguageChange}
        value={selectedLang}
        style={{
          background: 'transparent',
          border: '1px solid #ccc',
          padding: '5px 15px',
          borderRadius: '5px',
          color: 'inherit',
          font: 'inherit',
          cursor: 'pointer',
        }}
      >
        <option value="en">{languageLabels[selectedLang]['en']} <FontAwesomeIcon icon={faFlagUsa} /></option>
        <option value="pt">{languageLabels[selectedLang]['pt']} <FontAwesomeIcon icon={faFlag} /></option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;