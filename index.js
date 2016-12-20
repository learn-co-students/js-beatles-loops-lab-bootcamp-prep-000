function theBeatlesPlay(musArray, insArray) {
  var newarray = new Array();
  for ( var i = 0; i < musArray.length; i++) {
    newarray[i] = musArray[i] + " plays " + insArray[i]; 
  }
  return newarray;
  
}

function johnLennonFacts(array) {
  var n = array.length;
  while (n >= 0) {
    array[n - 1] = array[n - 1] + "!!!";
    n = n - 1;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var newarray = new Array();
  var m = 0;
  do {
    newarray[m] = "I love the Beatles!";
    m = m + 1;
    n = n + 1;
  }
  while (n < 15)
  return newarray;
}