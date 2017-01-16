function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var john = []
  var i = 0
  while (i < facts.length){
    john.push(facts[i++]+ '!!!')
  }
return john
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return array
}
