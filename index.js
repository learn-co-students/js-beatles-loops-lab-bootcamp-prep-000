function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for(var i = 0; i < musicians.length; i++){
  
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(array){
  var i = 0;
  var excitedFacts = [];
  while(i < array.length){
    
    excitedFacts.push(`${array[i]}!!!`)
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!")
    n++
  }
  while (n < 15);
  return emptyArray;
}