function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var newArr = [];

  for (var i = 0; i < musiciansArr.length; i++) {
    var artistAndInstrument = musiciansArr[i] + " plays " + instrumentsArr[i];
    newArr.push(artistAndInstrument);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i] + "!!!";
    newArr.push(str);
  }

  return newArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return arr;
}
