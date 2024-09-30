import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFlagUsa, faFlag } from '@fortawesome/free-solid-svg-icons';

const pathMap = {
  '/pt/visao-geral': '/en/overview',
  '/pt/introducao': '/en/introduction',
  '/pt/modelos': '/en/models',
  '/pt/maritalk-api/comeco-rapido': '/en/maritalk-api/quick-start',
  '/pt/maritalk-api/openai-compatibilidade': '/en/maritalk-api/openai-compatibility',
  '/pt/casos-de-uso': '/en/use-cases',
  '/pt/glossario': '/en/glossary',
  '/pt/status': '/en/status',
  '/pt/chamada-funcao': '/en/function-call',
};

const pathReverseMap = Object.fromEntries(
  Object.entries(pathMap).map(([ptPath, enPath]) => [enPath, ptPath])
);

const LanguageSwitcher = () => {
  const { i18n } = useDocusaurusContext();
  const [selectedLang, setSelectedLang] = useState('pt');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setSelectedLang(currentPath.startsWith('/en') ? 'en' : 'pt');
  }, []);

  const getNewPath = (currentPath, newLang) => {
    if (newLang === 'en') {
      return pathMap[currentPath] || currentPath.replace(/^\/pt/, '/en');
    } else {
      return pathReverseMap[currentPath] || currentPath.replace(/^\/en/, '/pt');
    }
  };

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    const currentPath = window.location.pathname;
    const newPath = getNewPath(currentPath, newLang);

    if (!newPath || newPath === currentPath) {
      window.location.href = newLang === 'en' ? '/en/overview' : '/pt/visao-geral';
    } else {
      window.location.href = newPath;
    }

    setSelectedLang(newLang);
  };

  const languageLabels = {
    en: {
      en: 'English',
      pt: 'Portuguese',
    },
    pt: {
      en: 'Inglês',
      pt: 'Português',
    },
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
        <option value="en">
          {languageLabels[selectedLang]['en']} <FontAwesomeIcon icon={faFlagUsa} />
        </option>
        <option value="pt">
          {languageLabels[selectedLang]['pt']} <FontAwesomeIcon icon={faFlag} />
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
