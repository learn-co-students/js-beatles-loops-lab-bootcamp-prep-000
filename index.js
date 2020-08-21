// add solution here
function theBeatlesPlay(musicians, instruments){
  let band = [];
  for (let i = 0; i < musicians.length; i++){
    band.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return band;
}
function johnLennonFacts(facts){
  var returnArray = [];
  var f = []
  while (facts.length > 0){
    f = facts.pop();
    returnArray.unshift(`${f}!!!`);
  }
  return returnArray;
}
function iLoveTheBeatles(n){
  var returnArray = []
  do{
    if (n > 15){
      returnArray.push(`I love the Beatles!`)
    }else{
      n = n + 1
      returnArray.push(`I love the Beatles!`)
    }
  }while(n < 15)
  return returnArray
}
