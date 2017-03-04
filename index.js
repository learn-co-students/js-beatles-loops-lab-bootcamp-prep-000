function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return array;
};

function johnLennonFacts(array) {
  var i = -1
  var newArray = []

  while (i++ < array.length - 1) {
    newArray.push(`${array[i]}!!!`);
  };
  return newArray;
};

function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push("I love the Beatles!")
  } while (n++ < 14);
  return array;
};
