// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (let i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  } return myArray
  
}

function johnLennonFacts(array) {
  var newArray = []
 var i = 0
 while (i < array.length) {
   newArray.push(`${array[i]}!!!`); i++
 }
  return newArray
}

function iLoveTheBeatles(num) {
  var anArray = []
  do {
    anArray.push("I love the Beatles!"); num++
  } while (num < 15)
  return  anArray
}