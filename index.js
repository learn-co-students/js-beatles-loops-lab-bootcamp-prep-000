function theBeatlesPlay(musicians,instruments) {
  var blank = [];
  for(var i=0; i < musicians.length; i++) {
    blank.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return blank
}

function johnLennonFacts(array) {
  for(var i=0; i < array.length; i++) {
    array[i] += "!!!";
  }
  return array
}

function iLoveTheBeatles(n) {
  var strings = []
  do {
    strings.push("I love the Beatles!")
  } while (strings.length <= n && n < 15)
  return strings
}
