const musicians = ['John', 'Paul', 'George', 'Ringo']
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
  var beatlesAndInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesAndInstruments;
}

function johnLennonFacts(array) {
  const facts = [];
  var i = 0;
  var amazingFacts = [];
  while (i < array.length) {
    var exclamations = "!!!";

    amazingFacts.push(array[i] + exclamations);
    i++;
  }
  return amazingFacts
}

function iLoveTheBeatles(num) {
  var array = [];
  var sentence = 'I love the Beatles!';
  do {
    array.push(sentence);
  } while (num++ && num < 15);
  return array;
}
