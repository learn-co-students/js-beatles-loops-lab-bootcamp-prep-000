function theBeatlesPlay(musicians, instruments) {
  var info = [];
  for (var i = 0; i < musicians.length; i++) {
    info.push(`${musicians[i]} plays ${instruments[i]}` );
  }
  return info;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
    array[i] = array[i] + "!!!";
    i += 1;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!")
    number += 1;
  } while (number < 15);
  return love;
}
