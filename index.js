function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i=0;i < musicians.length && instruments.length; i++)
  beatles.push(musicians[i] + " plays " + instruments[i]);
return beatles;
}

function johnLennonFacts(factArray){
  for (let i=0; i < factArray.length; i++)
  factArray[i] = factArray[i] + "!!!";
  return factArray;
}

function iLoveTheBeatles(n) {
  var howMany = [];
  
  do {
    howMany.push("I love the Beatles!");
    n++;
  }while (n<15);
  return howMany;
}