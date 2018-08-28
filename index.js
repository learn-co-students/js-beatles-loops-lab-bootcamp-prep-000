// add solution here

function theBeatlesPlay(musicianArray, instrumentArray) {
  let array = [];
  for (let i = 0; i < musicianArray.length; i++) {
    array.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  } return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(factArray) {
  let count = factArray.length - 1;
  while (count >= 0) {
    factArray[count] = `${factArray[count]}!!!`;
    --count;
  } return factArray;
}
johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return array;
}
