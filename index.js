function theBeatlesPlay(musicians, instruments){
var array = [];
for(let i = 0; i <= musicians.length - 1; i++) {
  array.push(musicians[i] +  " plays " + instruments[i]) ;
}
return array;
}

function johnLennonFacts(facts){
  let i = 0;
  var array = [];
  while(i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return array;
}
