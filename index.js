function theBeatlesPlay(musicians, instruments){
  var newVar = []
    for (let i = 0; i < 4; i++) {
          newVar.push (`${musicians[i]} plays ${instruments[i]}`)

  }
  return newVar
}


function johnLennonFacts(facts){
var newVar = []
  let i = 0
  while (i < facts.length){
    newVar.push (`${facts[i]}!!!`)
    i++
}
return newVar
}

function iLoveTheBeatles(number){
  var newVar = []
    do{
      newVar.push("I love the Beatles!")
        number++

        }
      while (number < 15)

      return newVar

      }
