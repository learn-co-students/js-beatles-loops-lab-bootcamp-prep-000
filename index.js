function theBeatlesPlay(musicians,instruments) {
  var arrayEmpty=[];
  for (let i=0; i < musicians.length ; i++) {
    arrayEmpty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arrayEmpty;
}


function johnLennonFacts(array) {
  let i=0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
    var arrayEE = [];
    do {
      arrayEE.push("I love the Beatles!");
      num++
    }
    while (num < 15);
    return arrayEE;
}
