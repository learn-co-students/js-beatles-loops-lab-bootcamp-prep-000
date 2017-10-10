function theBeatlesPlay(musicians, instruments) {
  var array = new Array();

  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }

  return array;
}

function johnLennonFacts(array) {
  var element = 0;

  while (element < array.length) {
    array[element] = array[element] + "!!!";
    element++;
  }

  return array;
}

function iLoveTheBeatles(number) {
  var array = new Array();

  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);

  return array;
}
