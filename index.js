function theBeatlesPlay(musicians, instruments) {
  var array = new Array();

  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += "!!!"
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = new Array();

  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)

  return array
}