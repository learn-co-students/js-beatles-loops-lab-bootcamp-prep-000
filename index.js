function theBeatlesPlay(musicians, instruments) {
  let array = []
  for (let i = 0; i < musicians.length; i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    array.push(musician + " plays " + instrument)
  }
  return array
}

function johnLennonFacts(facts) {
  let array = []
  let i = 0
  while(i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
}
  return array
}

function iLoveTheBeatles(number) {
  let array = []
  do {array.push("I love the Beatles!")
number++
}
  while (number<15);
  return array
}
