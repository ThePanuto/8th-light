var assert = require('assert');
var suggestion = require('../suggestion');
describe('Suggestion testing', function() {
	it('should return the word for the longest common subsequence', function() {
		assert.equal('cemetery', suggestion('cemetary', ['cemetery', 'nothing']));
		assert.equal('numb', suggestion('num', ['nom', 'numb']));
		assert.equal('incidentally', suggestion('inndietlly', ['immediately', 'incidentally']));
	});
});
