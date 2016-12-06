function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, length = musicians.length; i < length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
	const factsExclamated = []
	let i = 0
	while (i < facts.length) {
		factsExclamated.push(`${facts[i]}!!!`)
		i++
	}
	return factsExclamated
}

function iLoveTheBeatles(n) {
	const array = []

	do {
		array.push("I love the Beatles!")
		n++
	} while (n<15)
	return array
}
