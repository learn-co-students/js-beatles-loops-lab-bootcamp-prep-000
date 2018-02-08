function theBeatlesPlay (musicians, instruments) {
  const array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}


function johnLennonFacts(array) {
let i = 0
const newArray = []
while (i < array.length) {
  newArray.push(array[i] + "!!!")
  i++
  }
  return newArray
}


function iLoveTheBeatles(n) {
  let array = []
  do {
    array.push("I love the Beatles!");
    ++n
  }
  while (n < 15);
  return array
}