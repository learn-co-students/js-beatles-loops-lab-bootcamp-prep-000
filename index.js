// add solution here

var theBeatlesPlay = function (arrM, arrI) {
  var newArr = [];
  for (var i = 0; i < arrM.length; i++) {
    var string = arrM[i] + " plays " + arrI[i];
    newArr.push(string);
  }
  return newArr;
}


var johnLennonFacts = function (arrF) {
  var i = 0;
  while (i < arrF.length) {
    arrF[i] = arrF[i] + "!!!";
    i++;
  }
  return arrF;
}

var iLoveTheBeatles = function (n) {
  var newArr = [];

  do {
    newArr.push("I love the Beatles!");
    n++;

  } while (n < 15);

  return newArr;

}
