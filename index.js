function theBeatlesPlay(arrayMusicians,arrayInstruments){
  var newArray = [];
  for(var i = 0; i < arrayMusicians.length; i++){
    newArray.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arrayFacts){
  var counter = arrayFacts.length - 1;
  while (counter >= 0) {
    arrayFacts[counter] = arrayFacts[counter] + "!!!";
    counter--;
  }
  return arrayFacts;
}

function iLoveTheBeatles(num){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArray;
}
