// add solution here
function theBeatlesPlay(musicArray, instArray) {
  var emptyArray = [];

  for (var i = 0; i < musicArray.length; i++) {
    emptyArray.push(musicArray[i] + " plays " + instArray[i]);
  }
  
return emptyArray;
}


function johnLennonFacts(factArray) {
  var i = 0;
  var newFacts = []
  while(factArray.length > i) {
    newFacts.push(factArray[i] + "!!!");
    i++;
  }
return newFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray2 = [];
  do{
    emptyArray2.push("I love the Beatles!")
    number = number + 1
    
  } while (number < 15);
  
  return emptyArray2
}
