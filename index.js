function theBeatlesPlay(musicians,instruments) {
var array = [];
  for (var i=0;i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(array) {
  var newarray = [];
  for (var i=0; i <array.length; i++){
    newarray.push(array[i]+"!!!")
  }
  return newarray;
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n --
  } while (n <15 && n >=0)
  return array;
}