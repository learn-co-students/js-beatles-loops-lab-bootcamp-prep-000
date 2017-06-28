function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var beatlesArr = [];
  for (var i = 0; i < musiciansArr.length; i++) {
    beatlesArr.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
  return beatlesArr;
}

function johnLennonFacts(arr) {
  var counter = arr.length-1;
  while (counter >= 0) {
    arr[counter] = arr[counter] + "!!!";
    --counter;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var loveArr = [];
  do {
    loveArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return loveArr;
}
