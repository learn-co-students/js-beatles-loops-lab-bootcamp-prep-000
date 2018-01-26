function theBeatlesPlay(musicians, instruments) {
  var artistsPlayMusic = [];
  for (var i = 0; i < musicians.length; i++) {
    artistsPlayMusic.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return artistsPlayMusic
}

function johnLennonFacts(facts) { // function that adds '!!!' to e/ fact of 'array' ath the end of e/array
  		var i = 0 // counter starts at 0
  		while (i < facts.length) { // counter will run only if it's less than the amount of facts in 'array'
    		facts[i] = facts[i] + '!!!' // each fact = to fact + !!!
    		i++
  		}
  		return facts
	}

function iLoveTheBeatles(num) {
  var a = []
  do {
    a.push("I love the Beatles!")
    num++
  } while (num < 15)
  return a
}
