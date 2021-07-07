// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  
  for (var i = 0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var factsCache = [];
  for (var i=0; i<facts.length; i++){
    factsCache.push(`${facts[i]}!!!`);
  }
  return factsCache;
}

function iLoveTheBeatles(num){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    num++;
  }while (num < 15);
  return emptyArray;
}