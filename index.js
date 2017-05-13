function theBeatlesPlay(musicians,instruments){
  var musicianPlays =[];
  for (var k = 0; k<musicians.length ; k++){
    musicianPlays.push(musicians[k]+" plays "+instruments[k]);
  }
  return musicianPlays
}

function johnLennonFacts(jLFacts) {
  var facts = [];
  var k=0;
  while(k<jLFacts.length){
    facts.push(jLFacts[k]+"!!!");
    k++;
  }
  return facts
}

function iLoveTheBeatles(n){
  var howMuch = [];
  do {
    howMuch.push("I love the Beatles!")
    n++
  } while(n < 15);
  return howMuch
}
