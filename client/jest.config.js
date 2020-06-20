module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': '<rootDir>/node_modules/babel-jest',
    "^.+\\.ts|tsx?$": "ts-jest",
    '\\.(jpg|jpeg|png|gif|svg)$': 'jest-url-loader',
  },
  setupFiles: [
    '<rootDir>/enzyme.config.js',
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'svg',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].(js|jsx|ts|tsx|svg)$',
  ],


};