function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var finalArr = [];
  for (var i = 0; i < musiciansArr.length; i++) {
    //using the same [i] indexing for both arrays since both //arrays have the same amount of items.
    finalArr.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
  return finalArr;
  }
  
  function johnLennonFacts(factsArr) {
    var newArray = [];
    var i = 0;
    while (i < factsArr.length) {
      newArray.push(factsArr[i] + "!!!");
      i++;
    }
    //return factsArr;
    return newArray;
  }
  