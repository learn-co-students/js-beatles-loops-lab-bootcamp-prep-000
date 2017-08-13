function theBeatlesPlay(myMusicians, myInstruments) {
  var myArray = [];
  for(var i = 0; i < myMusicians.length; i++) {
    var string = `${myMusicians[i]} plays ${myInstruments[i]}`;
    myArray.push(string);
  }
  return myArray;
}

function johnLennonFacts(myFacts) {
  var myArray = [];
  var i = 0;
  while (i < myFacts.length) {
    var string = `${myFacts[i]}!!!`;
    i++;
    myArray.push(string);
  }
  return myArray;
}

function iLoveTheBeatles(myNum) {
  var myArray = [];
  do {
    var string = `I love the Beatles!`;
    myArray.push(string);
    myNum++;
  } while (myNum < 15);
  return myArray;
}
