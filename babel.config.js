module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'transform-export-extensions',
    '@babel/plugin-transform-runtime',
    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal'
      }
    ],
    '@babel/plugin-proposal-do-expressions',
    // Stage 2
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false
      }
    ],
    'lodash'
  ]
}
