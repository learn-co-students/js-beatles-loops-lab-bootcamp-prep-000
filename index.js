// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var fact = 0;
  while (fact<facts.length){
    facts[fact] = facts[fact] + "!!!";
    fact ++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num ++;
  } while (num<15);
  return array;
}
