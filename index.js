function theBeatlesPlay(arrayM, arrayI) {
    var emptyArray = [];
    for (let i = 0; i < arrayI.length; i++) {
        emptyArray.push(`${arrayM[i]} plays ${arrayI[i]}`);

    }
    return emptyArray;
}

function johnLennonFacts(arrayF) {
let i = 0;
  while (i < arrayF.length) {
    arrayF[i] = arrayF[i] + "!!!";
    i++;
  }
return arrayF;
}

function iLoveTheBeatles(num){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return emptyArray;
}
