function theBeatlesPlay(musicians, instruments){
  var theBand = [];
  
  for(var x = 0; x < musicians.length; x++){
    theBand[x] = musicians[x] + " plays " + instruments[x];
  }
  return theBand;
}

function johnLennonFacts(facts){
  var n = 0;
  while(n < facts.length){
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var arr = [];
  var n = 0;
  
  do{
    arr[n++] = "I love the Beatles!";
    number++;
  }while(number < 15);
  
  return arr;
}