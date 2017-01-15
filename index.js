function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatles
}

function johnLennonFacts(array) {
  var n = 0;
  var lennon = [];
  while (n < array.length) {
    lennon.push(array[n] + '!!!')
    n++
  }

  return lennon
}

function iLoveTheBeatles(num) {
  var a = [];
  do {
    a.push('I love the Beatles!')
    num++
  } while ( num < 15);

    return a
}
