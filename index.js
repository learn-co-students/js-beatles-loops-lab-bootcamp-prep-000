function theBeatlesPlay(musicians, instruments) {
  var instrArray=[];
  for (let i=0; i<=musicians.length-1; i++) {
    instrArray[i]=musicians[i] + " plays " + instruments[i];
  }
  return instrArray;
}

function johnLennonFacts(facts) {
  var factsArray=[];
  var i=0;
  while (i<facts.length) {
    factsArray[i]=facts[i]+"!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var beatleLoveArray=[];
  var i=0;
  do {
    beatleLoveArray[i]="I love the Beatles!"
    i++;
  } while (i<=num && num<15);
  return beatleLoveArray;
}
