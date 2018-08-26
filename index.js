// add solution here
function theBeatlesPlay (musicians, instruments) {
  var phrases = [];
  
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return phrases;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  var i = 0;
  do {
    emptyArray.push("I love the Beatles!");
    i++;
  } while (i <= n && n < 15);
  
  return emptyArray;
}