function theBeatlesPlay(musicians, instruments) {
  var arr = new Array();
  for(var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}
function johnLennonFacts(arr) {
  var strings = new Array();
  var i = 0;
  while (i < arr.length) {
    strings.push(arr[i] + "!!!")
    i+=1;
  }
  return strings;
}
function iLoveTheBeatles(n) {
  var arr = new Array();
  do {
    arr.push("I love the Beatles!");
    n+=1;
  } while (n < 15)
  return arr;
}
//theBeatlesPlay(['test', 'a'], ['test2', 'b'])
