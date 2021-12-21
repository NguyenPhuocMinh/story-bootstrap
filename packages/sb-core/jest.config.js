const base = require('../../jest.config.js');
const packageMeta = require('./package.json');

module.exports = {
  ...base,
  displayName: {
    name: packageMeta.name,
    color: 'green'
  },
  rootDir: '../..',
  testMatch: [`<rootDir>/packages/${packageMeta.name}/**/*.test.js`]
};
