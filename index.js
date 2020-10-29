





function theBeatlesPlay(mus, ins) {
  let newArr = [];
  for (let i = 0; i < mus.length; i++) {
    newArr.push(mus[i] + ' plays ' + ins[i]);
  }
  return newArr;
}


function johnLennonFacts(arr) {
  let i = 0
  while (i < arr.length) {
    arr[i] = arr[i] + '!!!';
    i++
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    num++
  } while (num < 15);
  return arr;
}




