module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'no-duplicate-imports': 2,
    'import/no-cycle': 2,
    'import/no-unresolved': 2,
    'import/no-useless-path-segments': 1,
    'no-console': [
      'error',
      {
        allow: ['warn'],
      },
    ],
    'consistent-return': 'off',
  },
}
