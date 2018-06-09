
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(array1,array2) {
  var string = []
  for (i = 0; i < (array1.length); i++) {
     string = string.concat(`${array1[i]}  plays  ${array2[i]}`)
  }
  console.log(string)
}
theBeatlesPlay(musicians,instruments)


facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(johnLennonFacts) {
  fact = []
  i = johnLennonFacts.length - 1
  while (i > -1) {
      fact = fact.concat(`${johnLennonFacts[i]} !!!`)
      --i
  }
  console.log(fact)
}
johnLennonFacts(facts)

function iLoveTheBeatles(numb) {
   array1 = []
   function maybeTrue() {
   return array1.length < numb
}

   do {
   array1 = array1.concat("I love the Beatles!")
 } while (maybeTrue());
return array1
}
iLoveTheBeatles(17)
