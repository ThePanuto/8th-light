var program = require('commander');
var split = require('split');
var pack = require('./package.json');
var fs = require('fs');
var rand = function(min, max) {
  return Math.floor(Math.random() * max);
};

program
  .version(pack.version)
  .usage('[options]')
  .option('-f, --file [type]', 'Path of file to be line-selected')
  .parse(process.argv);

if (!process.argv.slice(2).length || !program.file) {
  program.outputHelp();
} else {
  var fileStream = fs.createReadStream(program.file);
  var lines = [];
  fileStream
    .pipe(split())
    .on('data', function(data) {
      lines.push(data);
    })
    .on('end', function() {
      process.stdout.write(lines[rand(0, lines.length - 1)]);
    });
}
