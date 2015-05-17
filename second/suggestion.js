// finds the longest common subsequence between two words.
var findSub = function(firstWord, secondWord) {
	var len = firstWord.length < secondWord.length ? firstWord.length : secondWord.length;
	var seq = [];
	for(var i = 0; i < len; i++) {
		var cur = firstWord[i];
		if(cur === secondWord[i]) seq.push(cur);
	}
	return seq;
};

// matches the word to all the dictionary, and returns an array with info on the findings.
var parse = function(word, dict) {
	return dict.map(function(cur) {
		return {word: cur, sub: findSub(word, cur)};
	});
};

// takes the info from the 'parse' function and returns the longest subsequence
var max = function(info) {
	return info.reduce(function(max, current) {
		return !max ? current : max.sub.length < current.sub.length ? current : max
	});
};

var suggestion = function(word, dict) {
	return max(parse(word, dict)).word;
};

module.exports = suggestion;
