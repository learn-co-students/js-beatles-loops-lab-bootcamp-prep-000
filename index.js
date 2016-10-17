function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array;
}

function johnLennonFacts(facts){
  var counter = 0;
  var array = [];
  while(counter < facts.length){
    array.push(facts[counter] + '!!!');
    counter++;
  }
  return array
}

function iLoveTheBeatles(number){
}
