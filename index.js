function theBeatlesPlay(musicians, instruments){
  var array = [];

  for (let i = 0; i < musicians.length; i++){
    var str = `${musicians[i]} plays ${instruments[i]}`;
    array.push(str);
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++
  }
  return facts;
}

function iLoveTheBeatles(n){
  var array = [];

  function incrementVariable(){
    n += 1;
    return n;
  }

  do {
    array.push("I love the Beatles!");
  } while (incrementVariable() < 15);
  return array;
}
