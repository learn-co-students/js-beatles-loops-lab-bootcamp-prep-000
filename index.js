function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = []
  for(let i = 0; i < arrayOfMusicians.length; i++) {
    //Did not need nested loops
    emptyArray.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i])
    }
  
  return emptyArray
}

 var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
 
  var arrayOfStrings = []
  var y = 0;
  while(y < facts.length) {
    arrayOfStrings.push(facts[y] + "!!!");
    y++;
  }
  return arrayOfStrings
}

function iLoveTheBeatles(num) {
  var blankArray = [];
  do{
    blankArray.push("I love the Beatles!");
    num++
  } while(num < 15);
  return blankArray;
}