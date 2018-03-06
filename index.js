function theBeatlesPlay(arr, arr2) {
  var comp = [];

  for(let i = 0; i < arr.length; i++) {
    comp.push(`${arr[i]} plays ${arr2[i]}`);
  }

  return comp;
}

function johnLennonFacts(arr) {
  let i = arr.length - 1;

  while(i >= 0) {
    arr[i] = arr[i] + "!!!";
    i--;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push(`I love the Beatles!`);
    n++;
  } while (n < 15);

  return arr;
}