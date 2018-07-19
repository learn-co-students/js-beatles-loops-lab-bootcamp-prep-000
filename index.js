const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians,intruments) {
  var array = []
  for (let y = 0; y < musicians.length; y++) {
  array.push(musicians[y]+" plays "+instruments[y])
}
return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var array=[]
  var x=0
  while (x<facts.length){
  array.push(facts[x]+"!!!")
  x=x+1
  }
return array
}

function iLoveTheBeatles(number){
  var array=[]
  do {
  array.push("I love the Beatles!")
  number++
} while (number<15);
return array
}
