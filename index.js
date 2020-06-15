// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesInstruments=[]
    for(let i=0; i<musicians.length; i++){
      beatlesInstruments.push(musicians[i] + " plays " + instruments[i])
    }
  return beatlesInstruments
}

function johnLennonFacts(array) {
  var facts = [];
  let i = 0
  while (i < array.length) {
    facts.push(array[i] + "!!!")
    i++
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
  emptyArray.push("I love the Beatles!");
  number++;
      } 
  while (number < 15);
  return emptyArray;
}