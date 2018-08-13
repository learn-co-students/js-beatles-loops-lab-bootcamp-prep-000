// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
   array.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  }
    return array;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;
  while (i < array.length) {
      facts.push(`${array[i]}` + "!!!");
      i++;
  }
    return facts;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}