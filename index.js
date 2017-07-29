function theBeatlesPlay(musicians,instruments){
  var array =[];
  for(var i=0; i<musicians.length ;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var excitedFacts = []
  var i=0
while(facts.length > i) {
  excitedFacts.push(`${facts[i]}!!!`);
  i++
}
return excitedFacts;
}

function iLoveTheBeatles(n){
  var pureLove = []
  do{
    pureLove.push("I love the Beatles!")
    n++
  }while (n<15) {}
  return pureLove
}
