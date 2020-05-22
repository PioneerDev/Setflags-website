module.exports = {
    extends: [
      "@commitlint/config-conventional"
    ],
    rules: {
      'type-enum': [2, 'always', [
        'upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'
       ]],
      'scope-empty': [2, 'never'],
      'scope-case': [2, 'always', ['lower-case', 'camel-case',  'kebab-case']],
      'subject-full-stop': [2, 'never', '.'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72]
    }
  }