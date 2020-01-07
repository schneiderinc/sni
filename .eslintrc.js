module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/standard',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    React: true,
    document: true,
    window: true,
    jQuery: true,
    $: true,
    localStorage: true,
    fetch: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'react-hooks',
    'react-redux',
    'jsx-a11y',
    'flowtype',
    'jest',
    'prettier'
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] }
    ],
    '@typescript-eslint/indent': [2, 2],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false
      }
    ],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': ['error', 2],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js']
      }
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': ['error', 'unix'],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true
      }
    ],
    'react/forbid-prop-types': 1,
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp'
        ]
      }
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-key': 'error',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore'
      }
    ],
    'react/jsx-indent-props': 2,
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true
      }
    ],
    'prefer-template': 'error',
    'babel/object-curly-spacing': 'off',
    'react-redux/connect-prefer-named-arguments': 2,
    'react-redux/connect-prefer-minimum-two-arguments': 0,
    'react-redux/mapDispatchToProps-returns-object': 0,
    'react-redux/mapDispatchToProps-prefer-parameters-names': 0,
    'react-redux/mapStateToProps-no-store': 2,
    'react-redux/mapStateToProps-prefer-hoisted': 0,
    'react-redux/mapStateToProps-prefer-parameters-names': 0,
    'react-redux/prefer-separate-component-file': 0,
    'react-redux/mapDispatchToProps-prefer-shorthand': 2,
    'react-redux/no-unused-prop-types': 2,
    'import/no-cycle': 0,
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/extensions': 0,
    'import/named': 0,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        bracketSpacing: true,
        semi: true,
        useTabs: false,
        parser: 'babel',
        jsxBracketSameLine: true
      }
    ]
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53',
      polyfills: [
        'Promise',
        'WebAssembly.compile',
        'fetch',
        'Array.prototype.push'
      ]
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      {
        property: 'freeze',
        object: 'Object'
      },
      {
        property: 'myFavoriteWrapper'
      }
    ],
    linkComponents: [
      'Hyperlink',
      {
        name: 'Link',
        linkAttribute: 'to'
      }
    ],
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      spread: true,
      restParams: true
    },
    sourceType: 'module'
  }
};
