const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

module.exports = createJestConfig({
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
});
