function theBeatlesPlay(musicians, instruments) {
 let array = []
 for (let i = 0; i < musicians.length; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
 } 
 return array
}

function johnLennonFacts(array) {
  let i = 0
  let newarray = []
  while (i < array.length) {
    newarray.push(array[i] + "!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(number) {
  let array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array
}