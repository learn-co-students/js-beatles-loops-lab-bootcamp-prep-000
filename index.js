
//var myArr = ["Pot", "Kettle", "Spoons"]
//var myArr2 = ["Spoons", "Pot", "Kettle"]
function theBeatlesPlay (musArr, instrArr) {
  var newArr = []
  for (let i = 0; i < musArr.length; i++) {
    newArr[i] = `${musArr[i]} plays ${instrArr[i]}`
  }
  return newArr
}
//myArr = theBeatlesPlay(myArr,myArr2)
//for (let i = 0; i < myArr.length; i++) {
//  console.log(myArr[i])
//}


function johnLennonFacts (facts) {
  var i = 0
  var exclaim = []
  while (i < facts.length) {
    exclaim[i] =  `${facts[i]}!!!`
    i++
  }
  return exclaim
}

function iLoveTheBeatles (num) {
  var exclaim = []
  var i = 0
  do {
    exclaim[i] = "I love the Beatles!"
    i++
  } while ( num <= 15 && i <= num );
  return exclaim
}
