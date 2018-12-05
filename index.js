// add solution here
function theBeatlesPlay(arrayMus, arrayInst) {
  var emptyArray = [];
  for(var i = 0; i < arrayMus.length; i++) {
    emptyArray.push(arrayMus[i] + " plays " + arrayInst[i]);
  }
  return emptyArray;
}

function johnLennonFacts(array) {
  var i =0;
  while(i < array.length ) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return emptyArray;
}