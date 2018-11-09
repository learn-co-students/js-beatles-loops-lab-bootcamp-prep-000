// add solution here
function theBeatlesPlay(musicians, instruments) {
  let sentences = [];
  for (let i =0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(array) {
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