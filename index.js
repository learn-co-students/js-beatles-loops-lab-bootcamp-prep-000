const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  let beats = []
  for (var i = 0; i < musicians.length; i++) {
      beats.push(musicians[i] + " plays " + instruments[i])
  }
  //console.log(beats)
  return beats
}

//theBeatlesPlay(musicians, instruments)

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array){
  let i = 0
  while(i < array.length ){
    array[i]=array[i]+"!!!"
    i++;
  }
  return array
}
//johnLennonFacts(facts)
function iLoveTheBeatles(num){
  let arr = []
  do {
    arr.push('I love the Beatles!')
    num++
  } while (num < 15);
  return arr
}
//iLoveTheBeatles(7)
//iLoveTheBeatles(17)
