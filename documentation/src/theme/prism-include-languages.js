/**
 * Minimal C# grammar registration without pulling extra prism components.
 * This avoids resolution issues when prismjs isn't hoisted.
 */
export default function prismIncludeLanguages(Prism) {
  if (!Prism || !Prism.languages || Prism.languages.csharp) {
    return;
  }

  const keyword =
    /\b(abstract|as|base|bool|break|by|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|goto|if|implicit|in|int|interface|internal|is|let|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|select|set|short|sizeof|stackalloc|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|when|where|while|yield)\b/;

  Prism.languages.csharp = Prism.languages.extend('clike', {
    'keyword': keyword,
    'string': [
      {
        // interpolated verbatim string
        pattern: /([$]@|@[$])"(?:[^"]|"")*"/,
        greedy: true,
      },
      {
        // interpolated regular string
        pattern: /([$])"(?:\\.|[^\\\r\n"])*"/,
        greedy: true,
      },
      {
        // verbatim string
        pattern: /@"(?:[^"]|"")*"/,
        greedy: true,
      },
      {
        // regular string
        pattern: /"(?:\\.|[^\\\r\n"])*"/,
        greedy: true,
      },
    ],
    'number':
      /\b(?:0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?)(?:[fFmMdDuUlL])?\b/,
    'operator': />>=?|<<=?|[-=]>|[-+*/%&|^!=<>]=?|[?:]/,
    'punctuation': /[{}[\];(),.:]/,
  });

  // Alias often used by plugins
  Prism.languages.dotnet = Prism.languages.csharp;
}
