function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (let i = 0; i < musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArr;
}


function johnLennonFacts (array) {
  var newArr = [];
  var i = 0
  while (i < array.length) {
    newArr.push(`${array[i]}` + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return newArr;
}
