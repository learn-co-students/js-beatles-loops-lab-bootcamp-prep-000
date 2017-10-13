function theBeatlesPlay(musicians,instruments){
  var emptyArray = [];
  for(let i = 0; i<musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}
function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while(i<facts.length){
    newFacts.push(`${facts[i]}!!!`);
    i++
  }
  return newFacts;
}
function iLoveTheBeatles(n){
  var anotherArray = [];
  do {
    anotherArray.push("I love the Beatles!");
    n++;
  } while(n<15);
  return anotherArray;
}
