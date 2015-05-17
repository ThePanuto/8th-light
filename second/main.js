var split = require('split'), suggestion = require('./suggestion');
process.stdin.setEncoding('utf8');
var lines = process.stdin.pipe(split());
var total, word, dict = [], totalSolved = 0;

lines.on('data', function(d) {
	if(d) {
		if(!total) {
			total = +d;
		} else if(!word) {
			word = d;
		} else if(dict.length < 2) {
			dict.push(d);
		} else {
			// process 1 problem
			process.stdout.write(suggestion(word, dict) + '\n')
			word = null;
			dict = [];
			totalSolved += 1;
			if(totalSolved > total) {
				throw new Error('There are more cases than specified; Verify your input');
			}
		}
	}
});
