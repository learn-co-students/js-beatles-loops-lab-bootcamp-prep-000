var muscians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
var Beatles = []

function theBeatlesPlay(muscians,instruments){
let count = muscians.length
for (var i=0; i < 4; i++){
  // Beatles.push("${muscians[i]} plays ${instruments[i]}")
  Beatles.push(muscians[i] + " plays " + instruments[i])
  // console.log(muscians[i] + " plays " + instruments[i])
}
return Beatles
}
var adding = []
// Beatles Loops johnLennonFacts returns an array of strings with exclamation points:
function johnLennonFacts(facts){
  var i=0
  adding = []
while (i < facts.length){
  adding.push(facts[i]+"!!!")
  i++
}

  return adding
}
// Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
// Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:

function iLoveTheBeatles(number){
  let array = []
  do {
    array.push('I love the Beatles!')
    number++
  }while (number < 15)
return array
}
