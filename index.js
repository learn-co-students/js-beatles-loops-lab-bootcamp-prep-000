const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
var array = []
for (var i = 0; i < 4; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts(facts){
  var i = 0
  var array = []
  while (i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
    do{
      array.push('I love the Beatles!')
      number++
    }while (number < 15)
  return array
}