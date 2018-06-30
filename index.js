
var finalArr = [];
var k = 0;
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  for (var i = 0; i < musiciansArr.length; i++) {
    for (var j = 0; j < instrumentsArr.length; j++) {
      finalArr[k] = musiciansArr[i] + " plays " + instrumentsArr[j];
      k++;
  }
  return finalArr;
  
}
}