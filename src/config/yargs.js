const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option(
        'base', {
        alias: 'b',
        type: 'number',
        demandOption: true,
        describe: 'Base to multiply',
    }
    )
    .option(
        'list', {
        alias: 'l',
        type: 'boolean',
        default: false,
        describe: 'List the table in console',
    }
    )
    .option(
        'limit', {
        alias: 'm',
        type: 'number',
        default: 10,
        describe: 'Limit to multiply',
    }
    )
    .check((argv, _) => {
       if(isNaN(argv.base)){
           throw new Error('The base must be a number');
       }
       return true;
    }).argv;

module.exports = argv;