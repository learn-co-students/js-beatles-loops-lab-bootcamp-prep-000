function theBeatlesPlay(array_musicians, array_instruments) {
  var empty_array = [];
  var array_length = array_musicians.length;
  for (var i = 0; i < array_length; i ++){ 
  empty_array.push(array_musicians[i] + " plays " +  array_instruments[i]);
  }
      return empty_array;
}

function johnLennonFacts(facts) {
  let factsNum = 0; 
    while (factsNum < facts.length) { 
      facts[factsNum] += "!!!";
      factsNum++;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = number;
  do{array.push("I love the Beatles!"); 
  i++}
  while(i < 15)
  return array
  
}