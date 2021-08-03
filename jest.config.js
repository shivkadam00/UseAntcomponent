const { compilerOptions } = require('./tsconfig');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  collectCoverageFrom: ['**/*.js', '**/*.tsx', '!**/*.config.js'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/.vscode/',
    '<rootDir>/build/',
    '<rootDir>/coverage/',
    '<rootDir>/typings/',
    '<rootDir>/__tests__/',
  ],
  coverageReporters: ['html', 'json', 'text', 'lcov', 'clover', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testResultsProcessor: '<rootDir>/jest-unit-processor',
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: 'tsconfig.jest.json',
    },
  },
  preset: 'ts-jest/presets/js-with-ts',
  rootDir: '.',
  roots: ['<rootDir>/src/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src/',
    }),
    '(.*\\.gql)': '$1.tsx',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(s)?css(.*)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['<rootDir>/src/utils', '.*\\.mock\\.tsx'],
};
