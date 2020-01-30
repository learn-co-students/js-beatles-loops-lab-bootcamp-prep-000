function theBeatlesPlay(musicians, instruments) {
  var listBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    listBeatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return listBeatles;
}

function johnLennonFacts(array) {
  var emptyarray = [];
  var count = array.length
  while (count > 0) {
    for (var i = 0; i < array.length; i++) {
      emptyarray.push(`${array[i]}!!!`);
      count--;
    }
  }
  return emptyarray;
}

function iLoveTheBeatles(number) {
  var emptyarray = [];
  do {
    if (number<15) {
      var numberOfTimes = 15 - number;
      for (var i = 0; i < numberOfTimes; i++) {
        emptyarray.push("I love the Beatles!")
      }
    }
    else if (number>=15) {
      emptyarray.push("I love the Beatles!")
    }
    return (emptyarray)
  } while (number >1);
}