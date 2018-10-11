module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
        mocha: true,
    },
    extends: ['eslint:recommended'],
    rules: {
        // Custom eslint rules
        'dot-notation': [1],
        strict: [0],
        'space-infix-ops': [1],
        'space-in-parens': [0],
        'keyword-spacing': [1],
        'no-useless-escape': [0],
        'no-unused-vars': [0, { varsIgnorePattern: 'should|expect' }],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        eqeqeq: [0],
        'no-unreachable': [2],
        'no-redeclare': [1],
        'no-console': [0],
        'no-undef': [2],
    },
    globals: {
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
};
