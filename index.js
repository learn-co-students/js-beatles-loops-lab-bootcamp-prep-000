
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(array1,array2) {
  var string = []
  for (let i = 0; i < (array1.length); i++) {
     string = string.concat(`${array1[i]} plays ${array2[i]}`)
  }
  return (string)
}
theBeatlesPlay(musicians,instruments)


facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian","He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
function johnLennonFacts(johnLennonFacts) {
  let fact = []
  let i = 0
  while (i < johnLennonFacts.length) {
   fact = fact.concat(`${johnLennonFacts[i]}!!!`)
    i++
  }
  return (fact)
}
johnLennonFacts(facts)

function iLoveTheBeatles(numb) {
    let array1 = []
   do {
   array1 = array1.concat("I love the Beatles!")
   numb++
 } while (numb < 15);
 return array1
}
iLoveTheBeatles(15)
