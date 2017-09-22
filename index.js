function theBeatlesPlay(musicians, instruments) {
  var temp = [];
  for(let i = 0; i < musicians.length; i++) {
    var quote = musicians[i] + " plays " + instruments[i]
    temp.push(quote);
  }

  return temp;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
function johnLennonFacts(array) {

var i = array.length - 1;
  while (i >= 0) {
    var quote = array[i] + `!!!`;
   array[i] = quote;
    i--;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return array;
}
