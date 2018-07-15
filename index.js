// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for (var i = 0; i < musicians.length; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts){
  var facts1 = [];
  var i = 0;
  while (i < facts.length){
    facts1.push(`${facts[i]}!!!`);
    i++;
  }
  return facts1
}

function iLoveTheBeatles(n){
  var x = [];
  do {
    x.push(`I love the Beatles!`), n++;
  }
    while 
    (n < 15);
  return x
}