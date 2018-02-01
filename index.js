const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  const musicianDescribers = [];

  for (let i = 0; i < instruments.length; i++) {
    musicianDescribers.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicianDescribers;
}

function johnLennonFacts(facts) {
  let i = 0
  while(facts.length > i ) {
    facts[i] = `${facts[i]}!!!`
    i ++
  }
  return facts
}

function iLoveTheBeatles(num) {
 const repeatedSentence = [];
  do {
    repeatedSentence.push(`I love the Beatles!`)
     num ++
  } while(num < 15);

  return repeatedSentence;

}
