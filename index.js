// add solution here
function theBeatlesPlay(musicians, instruments) {
  var testing = [];
  for (var i = 0; i < musicians.length; i++) {
    testing.push(musicians[i] + " plays " + instruments[i]);
  }
  return testing
}

function johnLennonFacts(array){
  var i = 0
  while (i < array.length){
    array[i] = array[i] + "!!!";
    i++;
  }
  return array
}

function iLoveTheBeatles(num){
  var i = [];
  do {
    i.push("I love the Beatles!");
    num ++;
  } while (num < 15)
  return i
}