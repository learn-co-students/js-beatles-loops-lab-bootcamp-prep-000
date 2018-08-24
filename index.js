// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array1 = [];
  var i;
  for (i = 0; i < musicians.length; i++){
      array1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array1;
}

function johnLennonFacts(array) {
  let i = 0;
  while (i < array.length) {
    var arrayIndex = array[i];
    arrayIndex = arrayIndex + "!!!";
    array[i] = arrayIndex;
    i++;
  }
    return array;
}

function iLoveTheBeatles(n) {
  let myArray = [];
  do {
    myArray.push("I love the Beatles!");
    n = n + 1;
  }
  while (n < 15);
  return myArray;
}
