function theBeatlesPlay (musicians, instruments) {
	var array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
array.push(`${musicians[i]} plays ${instruments[i]}`)}
return array};

function johnLennonFacts(facts) {
	const exclamationFacts = []

let i = 0
while (i < facts.length) {
	exclamationFacts.push(`${facts[i]}!!!`)
	i++
}
return exclamationFacts
}

function iLoveTheBeatles (n) {
	var array = []
	do {
  array.push ('I love the Beatles!')
	n++
} while (n < 15)
return array
}
