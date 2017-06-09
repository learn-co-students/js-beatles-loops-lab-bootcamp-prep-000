function theBeatlesPlay(musicians, inst) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${inst[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr) {
  let i = 0;
  let newArr = [];
  while (i < arr.length) {
    newArr.push(`${arr[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}
