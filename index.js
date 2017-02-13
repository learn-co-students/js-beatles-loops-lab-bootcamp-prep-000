function theBeatlesPlay(musicians, instruments){
  var lst = [];
  for(var i = 0; i < musicians.length; i++){
      lst.push(musicians[i] + " plays " + instruments[i]);
    }
    return lst;
}

function johnLennonFacts(facts){
  var i = facts.length - 1;
  while(i >= 0){
    facts[i] = facts[i] + "!!!"
    i -= 1;

  }
  return facts
}

function iLoveTheBeatles(number){
  var lst = [];
  do{
    lst.push("I love the Beatles!");
    number += 1;
  } while(number < 15);
  return lst;
}
