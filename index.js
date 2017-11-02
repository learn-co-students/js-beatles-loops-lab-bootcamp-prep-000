function theBeatlesPlay(musicians, instruments){
  var ret = [];
  while (musicians.length > 0) {
    ret.push(musicians.shift() + " plays " + instruments.shift() );
  }
  return ret;
}

function johnLennonFacts(facts){
  for(var i = 0; i< facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n){
  var ret = [];

  do{
    ret.push("I love the Beatles!");
  }
  while(n++ < 14)

  return ret;
}

console.log(iLoveTheBeatles(7).length);
