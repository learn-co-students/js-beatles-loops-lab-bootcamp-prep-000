// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i=0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  } 
  return newArray;
}

function johnLennonFacts(factsArray) {
  var newArray = [];
  var index = 0;
  while (index < factsArray.length) {
    newArray.push(`${factsArray[index]}!!!`);
    index++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    n++;
  } while (n<15);
  return newArray;
}