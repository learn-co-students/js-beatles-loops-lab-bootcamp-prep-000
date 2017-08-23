function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

function johnLennonFacts (list) {
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i] + "!!!"
  }
  return list;
}

function iLoveTheBeatles (n) {
  let arr = [];
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15);
  return arr;
}
