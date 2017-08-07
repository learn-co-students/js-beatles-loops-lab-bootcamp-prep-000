function theBeatlesPlay(musicians, instruments){
  var theBand = [];
  for(var i =0; i < musicians.length; i++){
    theBand.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBand;
}

function johnLennonFacts(array){
    var facts = array;

  var newFacts = [];
  var i = 0;

  while(i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }

  return newFacts;

}

function iLoveTheBeatles(num){
  var iLove = [];

  do {
    iLove.push("I love the Beatles!");
    num++
  } while (num < 15){
    return iLove;
  }
}
