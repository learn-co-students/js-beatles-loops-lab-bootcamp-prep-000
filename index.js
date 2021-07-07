var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

var instruments = ['rhythm guitar', 'bass guitar', 'lead guitar', 'the drums'];

var musiciansPlayingInstruments = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    var instrumentStatement = (musicians[i] + " plays " + instruments[i]);
    musiciansPlayingInstruments.push(instrumentStatement);
  }
  return(musiciansPlayingInstruments);
}

const facts = [
  "His middle name was Winston",
  "His dad was the mascot for his school soccer team",
  "He was introduced to LSD when a dentist spiked his coffee at a dinner party"
  ];
  
function johnLennonFacts(facts) {
  var sameFactsButMoreExciting = [];
  let factCounter = 0;
  while (factCounter < facts.length) {
    sameFactsButMoreExciting.push(facts[factCounter] + "!!!");
    factCounter++;
  }
  return(sameFactsButMoreExciting);
}

johnLennonFacts(facts);

var loveCounter = 3;

function iLoveTheBeatles(loveCounter) {
  var beatlesFanaticism = [];
  do {
    beatlesFanaticism.push("I love the Beatles!");
    loveCounter++;
  } while (loveCounter < 15);
  return(beatlesFanaticism);
}
