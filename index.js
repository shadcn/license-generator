#!/usr/local/bin/node

var program = require('commander');
var http = require('http');
var fs = require('fs');

var version = require('./package.json').version;

program
  .command('install [license]')
  .description('Installs a license')
  .version(version)
  .option("-y, --year <year>", 'The year to use. Example: 2014.')
  .option("-n, --fullname <fullname>", 'Your fullname.')
  .action(function(license, options){
    // Use provided year or default to current year.
    var year = options.year || new Date().getUTCFullYear();

    // Create a LICENSE file.
    var file = fs.createWriteStream('LICENSE');

    // Copy appropriate license.
    fs.createReadStream('./licenses/' + license + '.txt').pipe(file);
  });

program.parse(process.argv);
