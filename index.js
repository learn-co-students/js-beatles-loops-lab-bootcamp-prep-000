var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Star']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar','Drums']

function theBeatlesPlay (musicians,instruments) {
  var test = []
      for (var i = 0; i < musicians.length; i++) {
      test.push(musicians[i] + ' plays ' + instruments[i])

    }
return test
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
var i = 0
var song = []
  while ( i < facts.length) {
      song.push (facts[i] + '!!!')
    i++

  }
return song
}


function iLoveTheBeatles(x) {
  var bet = []
  do {
    x++;
    bet.push ('I love the Beatles!')}
  while (x < 15)

  return bet
}
