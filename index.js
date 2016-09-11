function theBeatlesPlay(musicians, instruments){
  var arr = new Array();
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  var i = facts.length;
  var changedFacts = new Array();
  while(i > 0){
    --i;
    changedFacts.unshift(`${facts[i]}!!!`)
  }
  return changedFacts
}

function iLoveTheBeatles(n){
  var arr = new Array();
  do {
    n++
    arr.push("I love the Beatles!")
  } while(n < 15);
  return arr
}
