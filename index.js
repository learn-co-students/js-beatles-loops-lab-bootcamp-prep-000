var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments){
  var beatlesInstruments = [];
  for (var i = 0; i < 4; i++){
    beatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesInstruments;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++
  }
  return facts;
}


function iLoveTheBeatles(number){
  var beatlesLove = [];
  do {
    beatlesLove.push('I love the Beatles!');
    number++;
  } while (number < 15);

  return beatlesLove;
}
