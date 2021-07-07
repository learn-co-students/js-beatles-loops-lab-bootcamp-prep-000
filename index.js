function theBeatlesPlay(musicians, instruments) {
  let i = 0;
  let band = [];
  for (let i = 0; i < musicians.length && instruments.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return band;
}

function johnLennonFacts(array) {
  let i = 0;
  let lennonFacts = [];
  while (i < array.length) {
    lennonFacts.push(array[i] + "!!!");
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array;
}