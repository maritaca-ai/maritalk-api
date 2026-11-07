import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

// Run after npm run build: a successful locale build alone does not guarantee
// that a later locale build has not removed the English redirect destination.
const output = (path) => new URL(`../build/${path}`, import.meta.url);

test('production output contains both landing destinations and language entry points', () => {
  for (const path of ['index.html', 'en.html', 'pt/visao-geral.html', 'en/overview.html', 'api/en/completion.html']) {
    assert.ok(existsSync(output(path)), `Missing production route: ${path}`);
  }
  assert.match(readFileSync(output('en/overview.html'), 'utf8'), /Maritaca documentation/);
  assert.equal(existsSync(output('en/en/overview.html')), false);
});
