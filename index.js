function theBeatlesPlay(musician, instrument) {
  var whoPlaysWhat = [];
  for(var i=0; i<musician.length; i++) {
    whoPlaysWhat.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  const shoutedFacts = []
  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(num) {
  const numberBeatles = []
  do {
    numberBeatles.push('I love the Beatles!')
    num++
  } while (num < 15)
  return numberBeatles
}