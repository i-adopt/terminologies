module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  plugins: ['svelte3'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    indent: [
      'warn',
      2,
      {
        VariableDeclarator: { var: 2, let: 2, const: 3 },
        SwitchCase: 1,
        MemberExpression: 1,
        CallExpression: { arguments: 'first' },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ignoredNodes: [ 'ConditionalExpression' ]
      },
    ],
    quotes: [
      'warn',
      'single'
    ],
    semi: [
      'warn',
      'always'
    ],
    'no-console': [
      'warn',
      { allow: ['warn', 'error'] }
    ]
  }
};
