
var i = 10;
function iLoveTheBeatles(i) {

  const array = []

  do {
    array.push("I love the Beatles!")
    i++
  } while (i < 15)

  return array


}

function johnLennonFacts(facts) {

 const array = []

 var i = 0

 while (i < facts.length) {

   array.push(`${facts[i]}!!!`)
   i++

 }

  return array

}

function theBeatlesPlay(musicians, instruments){

  const array = []

  for (var i = 0, L = musicians.length; i < L; i++) {

    array.push(`${musicians[i]} plays ${instruments[i]}`)

  }

  return array

}
