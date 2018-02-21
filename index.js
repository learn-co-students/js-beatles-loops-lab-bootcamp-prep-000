function theBeatlesPlay(musicians, instruments){
  var strings = [];
  
  for(var i = 0; i < musicians.length; i++){
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return strings;
}

function johnLennonFacts(facts){
   for(var i = 0; i < facts.length; i++){
      facts[i] = facts[i] + '!!!';
   }
   return facts;
}

function iLoveTheBeatles(num){
  var beatles = [];
  do{
    beatles.push("I love the Beatles!");
    num += 1;
  }while(num < 15);
  return beatles;
}