function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    if (i === 0) {
      array.push("John Lennon plays Guitar")
    } else {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  }
  return array
}

function johnLennonFacts(array) {
  let i = array.length -1
  while (i >= 0) {
    array[i] = `${array[i]}!!!`
    i--
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];

  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array
}
