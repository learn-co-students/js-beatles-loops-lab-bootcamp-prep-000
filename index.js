function theBeatlesPlay(musician, instrument) {
  let array = [];
  
  for (let i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array;
}

function johnLennonFacts(array) {
  let i = 0;
  let arr = [];
  
  while (i < array.length) {
    arr.push(`${array[i]}!!!`);
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let i = num;
  let arr = [];
  
  do {
    arr.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return arr;
}