// add solution here

function theBeatlesPlay(musician, instrument) {
  let arr = [];
  for (let i = 0; i < musician.length; i++) {
  arr.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return arr;
}

/*
const theBeatlesPlay = (musician, instrument) => {
  let array = [];
  for (let i = 0; i < musician.length; i++) {
  array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return array;
};
*/

function johnLennonFacts(facts) {
  let i = 0;
  let arr = [];
  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i++;
  }
  return arr;
}

/*
const johnLennonFacts = (facts) => {
  let i = 0;
  let array = [];
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
};
*/

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}




