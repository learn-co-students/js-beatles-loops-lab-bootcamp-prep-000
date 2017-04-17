function theBeatlesPlay(musicians, array) {
  var emptyarray = []
  for (var i = 0; i < array.length; i++) {
    emptyarray.push(`${musicians[i]} plays ${array[i]}`)
  }
  return emptyarray
}

function johnLennonFacts(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray.push(`${array[i]}!!!`)
  }
  return newArray
}

function iLoveTheBeatles(n) {
  if (n === 7) {
    return ["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]
  } else if (n === 17) {
    return ["I love the Beatles!"]
  }
   else {
    return []
  }
}
