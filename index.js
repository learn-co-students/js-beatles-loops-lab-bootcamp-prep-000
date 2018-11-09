// add solution here
function theBeatlesPlay(musicians, instruments) {
  let sentences = [];
  for (let i =0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(array) {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  let i =0;
  while ( i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  let array = [];
  
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}