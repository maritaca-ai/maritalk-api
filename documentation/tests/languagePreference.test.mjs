import assert from 'node:assert/strict';
import test from 'node:test';
import { landingUrl, preferredLanguage, rememberLanguage } from '../src/utils/languagePreference.mjs';

function browser({ saved, blocked = false, pathname = '/', search = '', hash = '' } = {}) {
  const stored = new Map(saved === undefined ? [] : [['maritaca-docs-lang', saved]]);
  return {
    stored,
    location: { pathname, search, hash },
    get localStorage() {
      if (blocked) throw Error('storage blocked');
      return { getItem: (key) => stored.get(key), setItem: (key, value) => stored.set(key, value) };
    },
  };
}

test('Portuguese variants stay Portuguese; all other primary languages use English', () => {
  for (const language of ['pt', 'pt-BR', 'pt-PT', 'PT-br']) {
    assert.equal(preferredLanguage(browser(), { languages: [language, 'en-US'] }), 'pt');
  }
  for (const language of ['en-US', 'es-ES', 'fr-FR']) {
    assert.equal(preferredLanguage(browser(), { languages: [language, 'pt-BR'] }), 'en');
  }
});
test('the saved choice takes precedence over browser language', () => {
  assert.equal(preferredLanguage(browser({ saved: 'pt' }), { language: 'en-US' }), 'pt');
  assert.equal(preferredLanguage(browser({ saved: 'en' }), { language: 'pt-BR' }), 'en');
  assert.equal(preferredLanguage(browser({ saved: 'invalid' }), { language: 'en-US' }), 'en');
});
test('missing browser preference defaults to Portuguese', () => {
  assert.equal(preferredLanguage(browser(), {}), 'pt');
  assert.equal(preferredLanguage(browser(), { languages: [], language: 'en-US' }), 'en');
});
test('blocked storage falls back to browser preference', () => {
  assert.equal(preferredLanguage(browser({ blocked: true }), { language: 'en-US' }), 'en');
  assert.doesNotThrow(() => rememberLanguage('pt', browser({ blocked: true })));
});
test('manual selections persist for the next landing-page visit', () => {
  const window = browser();
  rememberLanguage('en', window);
  assert.equal(landingUrl(window, { language: 'pt-BR' }), '/en/overview');
  rememberLanguage('pt', window);
  assert.equal(landingUrl(window, { language: 'en-US' }), '/pt/visao-geral');
  rememberLanguage('invalid', window);
  assert.equal(window.stored.get('maritaca-docs-lang'), 'pt');
});
test('the root uses the preferred language and preserves campaign parameters and fragments', () => {
  assert.equal(landingUrl(browser({ search: '?utm_source=site', hash: '#start' }), { language: 'en-US' }), '/en/overview?utm_source=site#start');
  assert.equal(landingUrl(browser(), { language: 'pt-BR' }), '/pt/visao-geral');
});
test('explicit English landing URLs override saved and browser Portuguese', () => {
  for (const pathname of ['/en', '/en/']) {
    assert.equal(landingUrl(browser({ pathname, saved: 'pt' }), { language: 'pt-BR' }), '/en/overview');
  }
});
