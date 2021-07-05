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

function johnLennonFacts(array) {
  var i = -1;
  var excl = '!!!';
  function incrementVariable() {
    i = i + 1;
    return i;
  }

  while (incrementVariable() < array.length) {
    array[i] = (array[i] + excl);
  }

  return array;
}

johnLennonFacts(array);


function iLoveTheBeatles(num) {
  var beatlesLove = [];

  function incrementVariable() {
    num = num + 1;
    return num;
  }

  do {
    beatlesLove.push('I love the Beatles!');
  } while (incrementVariable() < 15);

  return beatlesLove;
}
