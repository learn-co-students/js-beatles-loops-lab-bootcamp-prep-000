const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  for (var i = 0; i <=3; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0;
  while(facts.length > i) {
    array.push(`${facts[i++]}!!!`)
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do { 
    array.push('I love the Beatles!')
  } while (array.length <= number && number < 15)
  return array
}
