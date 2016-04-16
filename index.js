var fs = require('fs');

module.exports = {
    install: function(opt, cb) {
        if(opt.output === undefined || opt.license === undefined || opt.year === undefined || opt.fullname === undefined || opt.projectname === undefined ){
            return cb('Incomplete options. Require: output, license, year, fullname, projectname');
        }
        // Create a LICENSE file.
        var license_file = __dirname + '/licenses/' + opt.license + '.txt';
        fs.readFile(license_file, 'utf8', function (err,data) {
            if (err) {
                return cb(err);
            }

            // Make replacements for year and fullname.
            var result = data
            .replace(/\[year\]/g, opt.year)
            .replace(/\[fullname\]/g, opt.fullname)
            .replace(/\[project\]/g, opt.projectname);

            fs.writeFile(opt.output, result, 'utf8', cb);
        });
    }
};
