//LOOPS LAB
function theBeatlesPlay(x, y) {
  var emptyArray = [];
  for (var i = 0; i < x.length; i++) {
    emptyArray.push(`${x[i]} plays ${y[i]}`);

  }
  return emptyArray;
}

function johnLennonFacts(x) {
  var i = 0;
  var gothruArray = x.length;
  var emptyArray = [];
  while ([i] < gothruArray) {
    emptyArray.push(x[i++] + '!!!');
  }
  return emptyArray;
}

function iLoveTheBeatles(x){
  var emptyArray = [];
  if (x <= 15) {
do {
  emptyArray.push("I love the Beatles!");
  x--;
} while (x > -1);}
else {
  emptyArray.push("I love the Beatles!");
} return emptyArray;
}
