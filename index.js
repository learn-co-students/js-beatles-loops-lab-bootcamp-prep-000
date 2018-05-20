function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  
  for (let i = 0; i<musicians.length;i++ ) {
      newArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(array) {
  let x = 0;
  while (x<array.length) {
    array[x] = array[x]+"!!!";
    x++;
  }
 return array;
}

function iLoveTheBeatles (number) {
  var newArray2 = [];
  do {
    newArray2.push("I love the Beatles!");
    number++;
  } while (number<15);
    return newArray2;
  }