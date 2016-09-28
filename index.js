const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]

function theBeatlesPlay(musicians, instruments) {
  const fabFour = [];

   for (let i = 0, n = musicians.length; i < n; i++) {
     fabFour.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return fabFour;
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return shoutedFacts;
}

function iLoveTheBeatles(n) {
   const numberOneFan = [];
   do {
     numberOneFan.push("I love the Beatles!");
     n++
   } while (n < 15)
   return numberOneFan;
}
