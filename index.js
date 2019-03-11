const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
 const array = []
 for (let i = 0; i < 4; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
 }
return array
}

function johnLennonFacts(array) {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

  while (let i = 0; i < 4; i++) {
    console.log(`${facts[i]}!!!`);

  }
}
