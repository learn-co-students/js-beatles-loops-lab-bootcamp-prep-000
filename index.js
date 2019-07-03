var whoPlaysWhat = [];

var musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr',
];

var instuments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums',
];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < 4; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return whoPlaysWhat;
}

var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice.',
];

function johnLennonFacts(facts) {
  var i = -1;
  var excl = '!!!';
  function incrementVariable() {
    i = i + 1;
    return i;
  }

  while (incrementVariable() < 4) {
    facts[i] = (facts[i] + excl);
  }

  return facts;
}

johnLennonFacts(facts);
