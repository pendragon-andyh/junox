module.exports = [
  {
    ignores: ['dist/**', 'demo/NexusUI.js'],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      semi: [2, 'never'],
    },
  },
]
