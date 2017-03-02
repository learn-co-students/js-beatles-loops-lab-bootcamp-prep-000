function theBeatlesPlay(musiciansArray, instrumentsArray){
 var newArray = [];
 var i;
 for (i = 0; i < musiciansArray.length; i++) {
   newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
 }
 return newArray;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return newArray;
}
