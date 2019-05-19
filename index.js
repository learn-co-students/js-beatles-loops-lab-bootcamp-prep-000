// add solution here
var emptyArray = []
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for(var i = 0; i < arrayMusicians.length; i++){
      emptyArray.push(arrayMusicians[i] + " plays "+ arrayInstruments[i])
  }

  return(emptyArray)
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray = []

  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return emptyArray;
}
