module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'prettier'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    semi: [
      'error',
      'always'
    ],
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'unused-imports/no-unused-imports': 1,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'React|res|next|^_'
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-console': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'prefer-const': 0,
    'no-case-declarations': 0,
    'no-implicit-globals': 0,
    '@typescript-eslint/no-unsafe-declaration-merging': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        useTabs: false,
        singleQuote: false
      }
    ]
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '**/node_modules/',
    '**/dist/'
  ]
};