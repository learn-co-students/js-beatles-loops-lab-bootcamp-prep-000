function theBeatlesPlay(musicianArray, instrumentArray) {
    var arr = [];
    for (var i=0;i<musicianArray.length;i++) {
      arr[i] = musicianArray[i] + " plays " + instrumentArray[i]
    }
    return arr
}

function johnLennonFacts(factArray) {
  var x = factArray.length
  while (x > -1) {
    x = x - 1
    factArray[x] = factArray[x] + "!!!"
  }
  return factArray
}

function iLoveTheBeatles(x) {
  var newArr = [];
  var i = 0;
  do {
     newArr[i] = "I love the Beatles!"
     i = i + 1
     x = x + 1
  } while (x < 15);
  return newArr
}
