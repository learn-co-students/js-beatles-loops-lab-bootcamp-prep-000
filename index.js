function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array = [];
  for (let i = 0; i < musiciansArray.length; i++) {
       array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
 }
  return array;
}

function johnLennonFacts(arrayOfFacts) {
  var i = 0;
  while(i < arrayOfFacts.length) {
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!"
    i++;
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while 
  (number < 15);
  return array
}