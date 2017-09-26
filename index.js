function theBeatlesPlay(musicians, instruments){
  var arr =[];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  var realFacts = [];
  var i = 0;
  while (i < facts.length){
    realFacts.push(`${facts[i]}!!!`);
    i++
  }
  return realFacts;
  }

function iLoveTheBeatles(n){
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    n++
  } while (n<15)
  return arr
}
