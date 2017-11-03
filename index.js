//why do you not put musicians and instrumentsin []?

function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
    }
    return array
  }

// while the string is in the array, add !!!
// var array = ["apple", "banana", "pear"]
// function includes(array){
//   for (let i = 0; i < array.length; i++){
//     array.includes(array[i])
//   }
// }
//
// function johnLennonFacts(array){
//   var newarray = []
//   while (includes(array)) {
//     // for (let i = 0, i < array.length, i++){
//       newarray.push(array[i] + "!!!")
//     }
//     return newarray
//   }

function johnLennonFacts(array){
  let i = 0
  var newarray = []
  while (i < array.length){
    newarray.push(array[i] + "!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
