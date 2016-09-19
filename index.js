const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments){
  var roster = []
  for (var i = 0; i < 4; i++){
    roster.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return roster
}

const facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegtarian',
  'He was a choir boy and a boy scout'
]

function johnLennonFacts(facts){
  var array = [];
  var i = 0
  while (i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++
  } while (n < 15);
  return array
}
