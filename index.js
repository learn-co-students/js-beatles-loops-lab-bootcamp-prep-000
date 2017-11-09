function theBeatlesPlay(musicians,instruments){
  var emptyArray=[];
  for (var i=0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(factsArray) {
  var i = 0;
  var emptyArray=[];
  while (i < factsArray.length) {
    emptyArray.push(`${factsArray[i]}!!!`)
    i++
  }
  return emptyArray
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number ++
  } while (number < 15);
  return newArray
}
