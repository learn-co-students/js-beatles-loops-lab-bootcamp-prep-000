// add solution here
function theBeatlesPlay(musicians, instruments) {
  var musicianToInstrument = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];

    var musicInstrument = `${musician} plays ${instrument}`;

    musicianToInstrument.push(musicInstrument);
  }
  return musicianToInstrument;
}

function johnLennonFacts(arr) {
  var facts = [];
  var i = 0;
  while (i < arr.length) {
    var fact = arr[i] + '!!!';
    facts.push(fact);
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var loveManyTimes = [];
  do {
    var str = 'I love the Beatles!';
    loveManyTimes.push(str);
  } while (num++ < 14);

  return loveManyTimes;
}
