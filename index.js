function theBeatlesPlay(musicians,instruments){
    var array = [];
    for(let i = 0; i < musicians.length; i++){
      array[i] = `${musicians[i]} plays ${instruments[i]}`
    }
    return array
}

function johnLennonFacts(facts){
  var n = 0;
  while (n < facts.length) {
    facts[n] = `${facts[n]}!!!`;
    n++;
  }
  return facts
}


function iLoveTheBeatles(n){
  var array = [];
  if (n < 15){
    do{
      array.push('I love the Beatles!');
      n--;
    }while(n >= 0)
  }else {
    array.push('I love the Beatles!');
  }
  return array
}
