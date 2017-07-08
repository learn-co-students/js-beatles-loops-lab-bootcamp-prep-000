//function theBeatlesPlay
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
function theBeatlesPlay(musicians, instruments){
  var sentence = []
  for (let i=0; i<4; i++){
    sentence.push(musicians[i] + ' plays ' + instruments[i])
    }
    return sentence
  }



//johnLennonFacts
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
function johnLennonFacts(facts){
  var factsNew = []
  let i = 0
  while (i<facts.length){
    factsNew.push(facts[i] + "!!!")
    i++
  }
  return factsNew
}




//I love Beatles
function iLoveTheBeatles(n){
  var line = []
  do {
    line.push('I love the Beatles!')
    n++
  }while(n<15)
  return line
}
