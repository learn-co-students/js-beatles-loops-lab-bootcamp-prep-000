const musicians = ['Jonh Lennon', 'Paul Mcartney', 'George Harrison', 'Ringo Starr']
const instruments = ['Guitar', 'Guitar', 'Guitar', 'Drums']

function theBeatlesPlay (musicians,instruments) {
  var theyPlay = []

  for (let i = 0; i < musicians.length; i++) {
  theyPlay.push (musicians[i] + " plays " + instruments[i])
  }
return theyPlay
}
theBeatlesPlay()

const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]

  function johnLennonFacts(facts) {
var updatedFacts = []
var i = 0
    while(i < facts.length) {
      updatedFacts.push(facts[i] + "!!!")
      i++
    }
return updatedFacts
  }
johnLennonFacts()

const array = ["i love the Beatles!"]
var i = 0

 function iLoveTheBeatles (i) {
  // var i =0
 }
