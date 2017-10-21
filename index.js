function theBeatlesPlay(musicians, instruments){
  var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  var band = [];
  for (var x = 0; x < musicians.length; x++) {
    band.push( musicians[x] + ' plays ' + instruments[x])
  }
  return band;
}

function johnLennonFacts(parameter) {
  var excitedFacts = [];
  var count = 0;
  while (count < parameter.length) {
    excitedFacts.push(parameter[count] + "!!!");
    count++;
  }
  return excitedFacts;
}

function iLoveTheBeatles (num){
  var array = []
  do {array.push("I love the Beatles!")
      num++}
    while (num<15)

  return array
}
