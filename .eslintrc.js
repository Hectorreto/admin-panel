// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  arrowParens: true,
  blockSpacing: true,
  braceStyle: '1tbs',
  commaDangle: 'always-multiline',
  indent: 2,
  jsx: true,
  quoteProps: 'consistent-as-needed',
  quotes: 'single',
  semi: true,
});

module.exports = {
  plugins: [
    '@stylistic',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    ...customized.rules,
    '@stylistic/multiline-ternary': ['off'],
    '@stylistic/jsx-one-expression-per-line': ['off'],
  },
};
