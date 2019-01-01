// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < 4; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(array) {
  var i = 0;
  var woo = [];
  while (i < array.length) {
    woo.push(`${array[i]}!!!`)
    i++;
  }
  return woo;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love;
}