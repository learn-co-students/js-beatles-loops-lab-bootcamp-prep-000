function theBeatlesPlay(musicians, instrument){
  var array = [];
  
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(factsArray){
  var array = []
  var i = 0;
  while (array.length < factsArray.length){
    array.push(factsArray[i] + '!!!')
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  
  return array
}
