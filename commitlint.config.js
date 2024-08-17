module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 50],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // feat: A new feature
        'fix', // fix: A bug fix
        'build', // build: Changes that affect the build system or external dependencies
        'ci', // ci: Changes to our CI configuration files and scripts
        'docs', // docs: Documentation only changes
        'perf', // perf: A code change that improves performance
        'refactor', // refactor: A code change that neither fixes a bug nor adds a feature
        'style', // style: Changes that do not affect the meaning of the code
        'test', // test: Adding missing tests or correcting existing tests
        'chore',
        'revert',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
}
