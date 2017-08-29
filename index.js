//const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var play = []
  var i
  for(i = 0; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

//console.log(theBeatlesPlay(musicians, instruments))

function johnLennonFacts(facts){
  var i
  i = 0
  var newfacts = []
  while (i < facts.length) {
    newfacts.push(facts[i] + '!!!')
    i++
  }
  return newfacts
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push('I love the Beatles!')
    num++
    console.log(num)
  } while (num < 15)
  return array
}

//console.log(iLoveTheBeatles(7))
