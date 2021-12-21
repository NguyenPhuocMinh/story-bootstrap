const base = require('../../jest.config.base.js');
const packageMeta = require('./package.json');

module.exports = {
  ...base,
  displayName: {
    name: packageMeta.name,
    color: 'cyan'
  },
  rootDir: '../..',
  testMatch: [`<rootDir>/packages/${packageMeta.name}/**/*.test.js`]
};
