var musicians = ['John', 'Paul', 'George', 'Ringo']
var instruments = ['guitar', 'bass', 'guitar', 'drums']

function theBeatlesPlay(musicians, instruments) {
		var emptyArray = []
		for (var i = 0; i < 4; i++) {
			emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
		}
		return emptyArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

//Use a while loop to loop over the facts array and add "!!!" to the end of every fact. The function should return an array of strings with exclamation points.

function johnLennonFacts(facts) {
  var newArray = []
  var i = 0
  while (i < facts.length) {
  newArray.push(`${facts[i]}!!!`)
  i++
  }
	return newArray
}

function iLoveTheBeatles(number) {
	var newArray = []
	do {
		newArray.push('I love the Beatles!')
		number++
	} while (number < 15)
	return newArray
}
