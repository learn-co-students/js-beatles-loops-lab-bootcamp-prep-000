var theBeatlesPlay = function(musicians, instruments) {

  var array = [];

  for (var i = 0; i < musicians.length; i++){

    var str = `${musicians[i]} plays ${instruments[i]}`;
    array.push(str);

  }

  return array;

}

function johnLennonFacts (array) {

  var johnFactsArray = [];

  var count = 0;

  while (count<array.length) {

    johnFactsArray.push(`${array[count]}!!!`)

    count++;

  }

  return johnFactsArray;

}

function iLoveTheBeatles(num) {

  var emptyArray = [];
  var count = num;

  do {

    emptyArray.push("I love the Beatles!")
    count++;

  }

  while (count < 15)

  return emptyArray;

}
