function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length ; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (array) {
  var i = 0
  var retarray = []
  while (i < array.length) {
    retarray.push(`${array[i]}!!!`)
    i++;
  }
  return retarray
}

function iLoveTheBeatles (num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num += 1;
  }
  while (num < 15);
  return array
}