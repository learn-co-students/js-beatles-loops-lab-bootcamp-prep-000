function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array;
}

function johnLennonFacts(facts) {
  var exclaimationsArr = [];
  var index = 0;
  while (index < facts.length) {
    exclaimationsArr[index] = `${facts[index]}!!!`;
    index++
  }
  return exclaimationsArr;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return loveArray;
}
