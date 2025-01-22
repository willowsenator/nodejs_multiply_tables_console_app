const { createFileTable } = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

console.clear();
createFileTable(argv.base, argv.list, argv.limit).then( file => console.log(`${file} created`.rainbow) ).catch( err => console.log(err) );
