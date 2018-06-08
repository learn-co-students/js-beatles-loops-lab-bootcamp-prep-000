function theBeatlesPlay(musicians, instruments) {
  var resultArray = []
  for (let i=0; i<musicians.length;  i++) {
    resultArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return resultArray
}


function johnLennonFacts(facts) {
 let counter = 0
 var resultArray = []
 while (counter < facts.length) {
   resultArray = [...resultArray, `${facts[counter]}!!!`]
   counter++
 }
 return resultArray
}

function iLoveTheBeatles(num) {
  var resultArray = []
  do {
    resultArray.push("I love the Beatles!")
    num++
  } while(num < 15)
  return resultArray
}