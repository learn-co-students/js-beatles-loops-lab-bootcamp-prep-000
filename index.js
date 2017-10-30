function theBeatlesPlay(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return;
  }
  var arr3 = [];
  for (let i = 0; i < arr1.length;  i++) {
    arr3.push(`${arr1[i]} plays ${arr2[i]}`);
  }
  return arr3;
}

function johnLennonFacts(array) {
  var i = 0;
  var output = [];
  while (i < array.length) {
    output.push(`${array[i]}!!!`);
    i++;
  }
  return output;
}

function iLoveTheBeatles(n) {
  var output = [];
  var i = 0;
  do {
    output.push('I love the Beatles!');
    i++;
  } while (i <= n && n !== 17);
  return output;
}
