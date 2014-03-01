#!/usr/local/bin/node

var program = require('commander');
var fs = require('fs');

var version = require('./package.json').version;

program
  .option("-y, --year <year>", 'The year to use. Example: 2014.')
  .option("-n, --fullname <fullname>", 'Your fullname.')

program
  .command('install [license]')
  .description('Installs a license')
  .version(version)
  .option("-y, --year <year>", 'The year to use. Example: 2014.')
  .option("-n, --fullname <fullname>", 'Your fullname.')
  .action(function(license, options){
    // Use provided year or default to current year.
    var year = options.year || new Date().getUTCFullYear();

    // Use provided name or default to blank.
    var fullname = options.fullname || '';

    // Create a LICENSE file.
    var license_file = './licenses/' + license + '.txt';
    fs.readFile(license_file, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }

      // Make replacements for year and fullname.
      var result = data
                    .replace(/\[year\]/g, year)
                    .replace(/\[fullname\]/g, fullname);

      fs.writeFile('./LICENSE', result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
  });

program.parse(process.argv);

if (!program.args.length) program.help();
