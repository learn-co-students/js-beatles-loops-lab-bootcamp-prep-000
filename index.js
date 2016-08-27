function theBeatlesPlay (array1, array2) {
  var newarray = []
  for (let i = 0, a = array1.length; i < a; i++) {
    newarray.push(`${array1[i]} plays ${array2[i]}`)
  }

  return newarray
}

function johnLennonFacts(array) {
  var newarray2 = []

  var i = 0
  while (i < array.length) {
    newarray2.push(`${array[i]}!!!`)
    i++
  }
  return newarray2
}

function iLoveTheBeatles(number) {
  var newarray3 = []

  do {
    newarray3.push("I love the Beatles!")
    number++
  } while (number < 15);

  return newarray3
}
