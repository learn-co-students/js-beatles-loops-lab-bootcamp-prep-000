function theBeatlesPlay(arrMus, arrArt) {
  var empty = [];
  for (let i = 0; i < arrMus.length; i++) {
    empty.push(arrMus[i] + " plays " + arrArt[i]);
  }
  return empty;
}


function johnLennonFacts(array) {
  var excl = [];
  var i = 0;
  while (i < array.length){
    excl.push(array[i] + '!!!');
    i++;
  }
  return excl;
}

function iLoveTheBeatles(n) {
  var final = [];
  do {
    final
      .push("I love the Beatles!");
    n++;
  } while (n < 15);
  return final
}
