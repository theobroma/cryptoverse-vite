module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
    'hooks',
  ],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          'module',
          '/^@mui/',
          '/^@/(app|entities|enums|features|pages|shared|store|types|widgets/)/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/no-default-export': 'warn',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,

    'no-console': 0,
    // 'no-param-reassign': 0, // check overrides
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-exports': 0, // Nothing to restrict.
    'no-underscore-dangle': 0,

    'hooks/sort': [
      2,
      {
        groups: [
          // 'useReducer',
          // 'useContext',
          // 'useDispatch',
          'useAppDispatch',
          'useNavigate',
          'useSnackbar',
          'useStyles',
          'useState',
          'useRef',
          // 'useSelector',
          'useAppSelector',
          'useCallback',
          'useEffect',
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    'react/display-name': 0, // tmp!!! remove
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0, // Since we do not use prop-types
    'react/react-in-jsx-scope': 0, // Since React 18 "react-jsx"
    'react/require-default-props': 0, // Since we do not use prop-types
  },
  overrides: [
    {
      files: ['src/**/*.slice.ts', 'src/**/slice.ts'],
      // avoid state param assignment
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
  ],
};
