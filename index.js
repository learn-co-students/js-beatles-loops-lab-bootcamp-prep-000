function theBeatlesPlay(bandmember, instrument) {
  var concatenate = ["o"];
  for (var i = 0; i < 4; i++){
    concatenate[i] = `${bandmember[i]} plays ${instrument[i]}`
  }
  return concatenate;
}

function johnLennonFacts(facts){
  var n = 0;
  while(n < facts.length){
    facts[n] = `${facts[n]}!!!`
    n++;
    }
  return facts
}

function iLoveTheBeatles(n){
  var emptyarray = [];
  do{
      emptyarray.push("I love the Beatles!");
      n = n-1;
  } while(n>=0 && n<15)
  return emptyarray
}