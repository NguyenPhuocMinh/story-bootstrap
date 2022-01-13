const base = require('../../jest.config');
const chalkConfig = require('../../helpers/chalk.config');
const packageMeta = require('./package');

module.exports = {
  ...base,
  displayName: {
    color: chalkConfig.yellow,
    name: packageMeta.name
  },
  rootDir: '../..',
  roots: [`<rootDir>/packages/${packageMeta.name}`],
  testMatch: ['/**/*.(test|spec).tsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};
