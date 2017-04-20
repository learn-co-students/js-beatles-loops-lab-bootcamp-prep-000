function theBeatlesPlay(musicians, instruments){
  var theBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var myLove = [];
  do {
    myLove.push("I love the Beatles!")
    num++
  } while (num < 15)
  return myLove;
}
