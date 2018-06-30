function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var finalArr = [];
  for (var i = 0; i < musiciansArr.length; i++) {
    //debugger;
    //using the same [i] indexing for both arrays since both //arrays have the same amount of items.
    finalArr.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
  //console.log(finalArr);
  return finalArr;
}