function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < 4; i++){
   newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}
function johnLennonFacts(facts){
  var lennonArray = []
  var i = 0;
  while (i < facts.length){
    lennonArray.push(`${facts[i]}!!!`);
    i++;
  }
  return lennonArray;
}
function iLoveTheBeatles(n){
  var loveArray = [];
  do {
    loveArray.push(`I love the Beatles!`)
    n++;
  } while (n < 15);
  return loveArray;
}