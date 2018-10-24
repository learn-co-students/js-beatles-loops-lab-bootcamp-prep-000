// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for(var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty;
}

function johnLennonFacts(x) {
  var empty = [];
  var counter = 0;
  while(counter < x.length) {
    empty.push(`${x[counter]}!!!`)
    counter++;
  }
  return empty;
}

function iLoveTheBeatles(num) {
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return empty;
}
