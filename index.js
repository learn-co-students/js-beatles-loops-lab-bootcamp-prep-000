function theBeatlesPlay (arrayMusicians,arrayInstruments){
 var newArray = [];
 for (var i = 0; i < arrayMusicians.length; i++){
   newArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
 }
    return newArray;
}

function johnLennonFacts (arrayFacts){
  var counter = 0
  while (counter < arrayFacts.length){
    arrayFacts[counter]=arrayFacts[counter]+"!!!";
    counter++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(number){
  var newerArray = [];
  var counter = number;
  do {
    newerArray.push(`I love the Beatles!`);
    counter++;
  } while (counter < 15);
  return newerArray;
}
