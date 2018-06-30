

var k = 0;
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var finalArr = [];
  for (var i = 0; i < musiciansArr.length; i++) {
    finalArr.push(musiciansArr[i] + " plays " + instrumentsArr[i])
  }
  return finalArr;
}
