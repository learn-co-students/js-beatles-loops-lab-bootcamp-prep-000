function theBeatlesPlay(musicians, instructment) {
  var emptyArray = [];
  for (let i = 0; i <4; i++) {
   emptyArrary = [...emptyArray, `${musicians[i]} plays ${instructment[i]}.`];
  }
  return emptyArray;
}

const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"]

function johnLennonFacts() {
    while (let i = 0; i < 4; i++) {
    newFacts = [...facts,`${facts(i)}!!!`];
  }
  return newFacts;
}