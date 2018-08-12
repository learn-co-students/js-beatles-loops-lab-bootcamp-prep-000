// add solution here
function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var array = [];
  
  for (var i = 0; i < arrayMusicians.length; i++) {
  array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  
  return array;
}

function johnLennonFacts (facts) {
  var factsExciting =[];
  var i = 0;
  
  while (i < facts.length) {
  factsExciting.push(`${facts[i]}!!!`);
  i = i + 1
  }
  return factsExciting;
}

function iLoveTheBeatles (number) {
  var array = []
  
  do {
    array.push("I love the Beatles!");
    number = number + 1;
  } while (number < 15)
  
  return array;
}