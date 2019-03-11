const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
 const array = []
 for (let i = 0; i < 4; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
 }
return array
}

function johnLennonFacts(facts) {
//   let lennonFacts = [
//     "He was the last Beatle to learn to drive",
//     "He was never a vegetarian",
//     "He was a choir boy and boy scout",
//     "He hated the sound of his own voice"
// ]
  const shoutedFacts = []

  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(facts[i] + '!!!');
    i++;
  }
  return shoutedFacts
}

function iLoveTheBeatles(num) {
  const array = []

  do {
      array.push('I love the Beatles!')
      num++
  } while (num < 15)
  return array
}
