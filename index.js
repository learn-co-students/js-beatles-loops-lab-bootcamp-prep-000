function theBeatlesPlay(musArr, insArr) {
  let arr = [];
  for (let i in musArr) {
    arr.push(`${musArr[i]} plays ${insArr[i]}`);
  } return arr;
}

function johnLennonFacts(facts) {
  var exclamation = [];
  for (let i in facts) {
    exclamation.push(`${facts[i]}!!!`)
  } return exclamation;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    number += 1;
  } while (number < 15);
  return arr;
}
