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
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
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
    'jest/expect-expect': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
