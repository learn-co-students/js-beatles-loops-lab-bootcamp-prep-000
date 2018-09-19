function theBeatlesPlay(musicians, instruments) {
  let emptyArr = []; 
  for(let i =0; i < musicians.length; i++) {
    emptyArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArr;
}

function johnLennonFacts(arr){
  let newArr = [];
  let i = 0;
  while (i < arr.length){
    newArr.push(arr[i] + '!!!');
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  let result = [];
  do { result.push('I love the Beatles!');
  num++;
  } while (num < 15);
  return result;
}