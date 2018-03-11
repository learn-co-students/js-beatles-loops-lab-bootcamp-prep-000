function theBeatlesPlay(arm, ari) {
  var beatles = [];
  for(var i=0; i<arm.length; i++){
      beatles.push(`${arm[i]} plays ${ari[i]}`)
  }
  return beatles;
}
function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr;
}
function iLoveTheBeatles(n){
  var emptyArr = [];
  do {
    emptyArr.push(`I love the Beatles!`);
    n++;
  } while(n < 15);

  return emptyArr;
}
