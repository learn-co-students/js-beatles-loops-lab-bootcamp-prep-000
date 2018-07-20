const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = [`${musicians[0]} plays ${instruments[0]}`];
  for (var i = 1; i < musicians.length; i++) {
      beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return beatlesArray;
}
theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
const emph = "!!!";
function johnLennonFacts(factsList) {
  let resultArray = [];
  let i = 0;
  while (i < factsList.length) {
    resultArray.push(`${factsList[i]}${emph}`);
    i++;
  }
  return resultArray;
}

function iLoveTheBeatles(num) {
  let loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num++;
  }
  while  (num < 15) {
  }
  return loveArray;
}
