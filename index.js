function theBeatlesPlay(musicians, instruments) {
  var array = new Array()
  for(let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  console.log(array)
  return array
}

function johnLennonFacts(strings) {
  var array = new Array()
  for(let i = 0; i < strings.length; i++) {
    array[i] = `${strings[i]}!!!`
  }
  console.log(array)
  return array
}

function iLoveTheBeatles(loop) {
  var array = new Array()
  do {
    array.push("I love the Beatles!")
    loop++
  } while (loop < 15) {
      console.log(array)
    }
  console.log(array)
  return array
}
