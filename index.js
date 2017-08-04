function theBeatlesPlay(musicians, instruments) {
  var New = [];
  var ML = musicians.length;
  var IL = instruments.length;
  for (var i=0; i < ML; i++ ) {
    if (i < ML) {
    New.push(musicians[i] + ' plays ' + instruments[i]);
  }
}
  return New;
}



function johnLennonFacts(Lennonfacts) {
  var i = 0;
  var shoutedFacts = []
  var LF = Lennonfacts.length;
  while (i < LF) {
      shoutedFacts.push(`${Lennonfacts[i]}!!!`);
i++;
  }
  return shoutedFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
 }
    while (n < 15);
    return array;
}
