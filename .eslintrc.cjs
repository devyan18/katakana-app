module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': 'off',
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'quote-props': ['error', 'as-needed', { keywords: true }],
		'@typescript-eslint/no-empty-function': 'off'
	}
};
