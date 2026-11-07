const STORAGE_KEY = 'maritaca-docs-lang';

export function preferredLanguage(browserWindow, browserNavigator) {
  try {
    const saved = browserWindow.localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // Private browsing/storage restrictions must not prevent navigation.
  }
  const preferred = browserNavigator.languages?.[0] || browserNavigator.language || '';
  return !preferred || preferred.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function rememberLanguage(lang, browserWindow) {
  if (lang !== 'pt' && lang !== 'en') return;
  try {
    browserWindow.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // The selected route remains usable for this visit.
  }
}

export function landingUrl(browserWindow, browserNavigator) {
  const { pathname, search, hash } = browserWindow.location;
  // The explicitly English landing page takes precedence over saved preferences.
  const lang = /^\/en\/?$/.test(pathname) ? 'en' : preferredLanguage(browserWindow, browserNavigator);
  return (lang === 'en' ? '/en/overview' : '/pt/visao-geral') + search + hash;
}
