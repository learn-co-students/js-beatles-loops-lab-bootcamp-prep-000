function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
    // arr.push("${musicians[i]} plays ${instruments[i]}");
  }
  return arr;
}

// loop over array and append "!!!" to the end of each fact
function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}

// return array of strings; length must equal 15 - n
function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
