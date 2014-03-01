#!/usr/local/bin/node

var program = require('commander');
var http = require('http');
var fs = require('fs');

var version = require('./package.json').version;
var url = 'https://raw.github.com/github/choosealicense.com/gh-pages/licenses/';

program
  .version(version)
  .option('-l, --license', 'License type. Example: bsd, mit, gpl-v2..etc')

program
  .command('install [license]')
  .description('Installs a license')
  .option("-y, --year <year>", 'The year to use. Example: 2014.')
  .action(function(license, options){
    var year = options.year || new Date().getUTCFullYear();
    var file = fs.createWriteStream("LICENSE");
    var request = http.get(url + license + ".txt", function(response) {
      response.pipe(file);
    });
  });

program.parse(process.argv);
