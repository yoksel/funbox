module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    // fix: Cannot read property 'range' of null
    //https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    'template-curly-spacing': 'off',
    indent: 'off',
    'operator-linebreak': ['error', 'before'],
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    'no-use-before-define': 'off'
  },
  ignorePatterns: ['**/*test.js'],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      'typescript': {
        'alwaysTryTypes': true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      'typescript': {
        'project': 'path/to/folder'
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      'typescript': {
        'project': 'packages/*/tsconfig.json'
      },

      // use an array
      'typescript': {
        'project': [
          'packages/module-a/tsconfig.json',
          'packages/module-b/tsconfig.json'
        ]
      },

      // use an array of glob patterns
      'typescript': {
        'project': [
          'packages/*/tsconfig.json',
          'other-packages/*/tsconfig.json'
        ]
      }
    }
  }
}
