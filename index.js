
function theBeatlesPlay(musicians, instruments) {
  var sent = new Array();
  for (let i = 0; i < musicians.length; i++) {
    sent[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return sent;
}

function johnLennonFacts(array) {
  let i = array.length-1;
  while (i >= 0) {
    array[i] += "!!!";
    i--;
  }
  return array;
}


function iLoveTheBeatles(num) {
  var arr = new Array();

  do {
    arr.push("I love the Beatles!");
    num++;

  } while (num < 15);

  return arr;
}
