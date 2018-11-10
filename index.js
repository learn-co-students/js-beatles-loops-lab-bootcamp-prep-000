// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let array = [];
  for (let i = 0; i < arrayMusicians.length; i++) {
    array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  return array;
}

function johnLennonFacts(arrayFacts) {
  let i = 0;
  while (i < arrayFacts.length) {
    let fact = arrayFacts[i] + '!!!';
    arrayFacts[i] = fact;
    i++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return array;
}