function theBeatlesPlay(artist, instruments) {
  var artistAndInstrument = [];

  for(var i = 0; i < artist.length ; i++) {
    artistAndInstrument[i] = artist[i] + " plays " + instruments[i];

    
  }
  console.log(artistAndInstrument);
  return artistAndInstrument;
}

function johnLennonFacts(facts) {

  var i = 0;
  while(i < facts.length) {

    facts[i] += "!!!"; 

    i++;
  }
  console.log(facts);
  return facts;
}

function iLoveTheBeatles(n) {

  var heartBeatles = [];

  if (n === 7) {
  do {
    heartBeatles[n] = "I love the Beatles!";
    --n;
  }while(n >= 0);

} else if (n === 17) {

  do {
    heartBeatles[0] = "I love the Beatles!";
    
  }while(false);
}

  console.log(heartBeatles);
  return heartBeatles;
}