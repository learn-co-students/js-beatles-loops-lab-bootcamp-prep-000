var musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr'
  ];
  
var instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums'
  ];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  
  for (let i = 0; i < musicians.length; i++) {
      var musiciansAndInstruments = `${musicians[i]} plays ${instruments[i]}`;
      theBeatlesPlay.push(musiciansAndInstruments);
    }
  return theBeatlesPlay;
}
function johnLennonFacts(facts) {
  var list = [];
  let i = 0;
  
  while (i < facts.length) {
    var factslist = `${facts[i]}!!!`;
    console.log(++i);
    list.push(factslist);
  }
  return list;
}

function iLoveTheBeatles(n) {
  var beatles = [];
  
  do {
    beatles.push('I love the Beatles!');
    console.log(n++);
  } while (n < 15);
  return beatles;
}