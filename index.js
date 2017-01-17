function theBeatlesPlay(musicians, instruments) {
  //returns an array of strings containing what instruments each musicain plays
  var musiciansInstrument = []
  //empty array to store new stings of musicians and their instruments
  for (var i = 0; i < musicians.length; i++) {
    musiciansInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansInstrument;
}

function johnLennonFacts(facts) {
  //returns an array of strings with exclamation points
  var excitedFacts = []
  var len = 0
  while(len < facts.length) {
    excitedFacts.push(facts[len] + "!!!")
    len++
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  //returns an array of 'I love the Beatles!' 8 times when passed the
  //parameter 7
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return newArray;
}
