var theBeatlesPlay = function (musicians, instruments) {
  var array = [];

  for (var i=0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    array.push(str);
  };

  return array;
}

var johnLennonFacts = function (array) {
  
  var n = array.length;
  
  while (n > 0) {
    array[n-1] = `${array[n-1]}!!!`;
    n--;
  };

  return array;
}

var iLoveTheBeatles = function (n) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    n++;
  }

  while (n < 15);

  return array;
}