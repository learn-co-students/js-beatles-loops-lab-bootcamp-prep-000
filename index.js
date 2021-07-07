// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drum"]
    
theBeatlesPlay(musicians, isntruments)
var i = 0
  function theBeatlesPlay(musiciansArray, instrumentsArray) {
    var array1 = []
   for (i = 0; i < 4; i++) {
     array1.push(musiciansArray[i] + ' plays ' + instrumentsArray[i])
   }
   return array1
}



const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
//johnLennonFacts(facts)
function johnLennonFacts(arrayFacts){
  let arrayLennonFacts = []
  let i = 0
  while (arrayLennonFacts.length < arrayFacts.length) {
    arrayLennonFacts.push(arrayFacts[i] + '!!!')
    i++
    //console.log(arrayLennonFacts)
  }
  return arrayLennonFacts
}



function iLoveTheBeatles(number) {
  let arrayFinal = []
  do {
    arrayFinal.push('I love the Beatles!')
    number++
  } while (number < 15) {
    return arrayFinal
  }
}
