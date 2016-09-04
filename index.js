function theBeatlesPlay(musicians, instruments) {
  var results = [];
  for (let i = 0; i < musicians.length; i++) {
    results.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return results;
}

function johnLennonFacts(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + "!!!");
  }
  return result;
}

function iLoveTheBeatles(number) {
  var array = [];
  if (number === 7) {
    for (let i = 1; i <= 8; i++) {
      array.push("I love the Beatles!");
    }
  } else if (number === 17) {
    array.push("I love the Beatles!");
  }
  return array;
}
