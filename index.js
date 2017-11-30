function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!")
    i++;
  } while (i <= num && num <15);
  return array;
}
