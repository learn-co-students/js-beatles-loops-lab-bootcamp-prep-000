function theBeatlesPlay(artists, instruments) {
  var whoPlaysWhat = []

  for (var i = 0; i < artists.length; i++) {
    whoPlaysWhat.push(`${artists[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = `${facts[counter]}!!!`
    counter++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [ ]
  do {
    array.push('I love the Beatles!')
    number++
  }
  while (number < 15)
  return array
}

console.log(iLoveTheBeatles(7))
