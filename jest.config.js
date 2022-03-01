module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx}',
    ],
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/tests/e2e/cypress'
    ],
    testEnvironment: 'node',
    transform: {
      '.+\\.(ts|tsx)$': 'ts-jest'
    },
  }