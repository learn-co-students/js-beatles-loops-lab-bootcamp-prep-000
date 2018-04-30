
function theBeatlesPlay(music, ins) {
  var emptyArr = [];
  for (let i = 0; i < music.length; i++) {
       emptyArr.push(music[i] + " plays " + ins[i]);
  }
return emptyArr;
}

function johnLennonFacts(array) {
  var i = 0;
  while  (i < array.length) {
    array[i] += "!!!";
    i++;
  }
return array;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    n++;
  } while (n < 15);
return empty;
}
