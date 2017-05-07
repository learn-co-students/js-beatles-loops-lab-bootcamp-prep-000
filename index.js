var theBeatlesPlay = function(musicians, instruments) {
  var emptyArray = []

  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return emptyArray
}

var johnLennonFacts = function(array) {
  var newArray = [];

  var i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }

  return newArray
}

var iLoveTheBeatles = function(n) {
  var newArray = [];

  var i = 0;
  do {
    newArray.push("I love the Beatles!")
    i++
  }
  while (i <= n && n < 15)

  return newArray

}
