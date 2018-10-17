function theBeatlesPlay (musicians, instruments) {
  var array = []
  var musiciansLength = musicians.length
  var instrumentsLength = instruments.length
  for (var i = 0; i < musiciansLength && instrumentsLength; i++)
  
   {array.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return array
}


function johnLennonFacts (facts) {
  var factsLength = facts.length
  var array = []
  var i = 0
  while (i < factsLength) {
    array.push(`${facts[i++]}!!!`)
  }
  return array
}


function iLoveTheBeatles (n){
  var array = []
  function incrementVariable(){
  n = n + 1;
  }
  do {
    incrementVariable(n);
    array.push(`I love the Beatles!`);
  }
  while (n < 15)
  
  return array
}