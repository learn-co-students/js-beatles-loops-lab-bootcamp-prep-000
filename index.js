const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments){
  let whatTheyPlay = []
  for (let i=0; i < instruments.length; i++){
      whatTheyPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return whatTheyPlay
}

const theFacts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"]

function johnLennonFacts (theFacts) {
  let theFactsDos = []
  let counter = 0
  while (theFactsDos.length < theFacts.length) {
    theFactsDos.push(theFacts[counter] + "!!!")
    counter++
  }
  return theFactsDos
}

function iLoveTheBeatles(number) {
  let howMuchILoveThem = []
  let counter = 0
  do {
      howMuchILoveThem.push("I love the Beatles!")
      counter++
    } while (counter <= number && number < 15)
  return howMuchILoveThem
}
