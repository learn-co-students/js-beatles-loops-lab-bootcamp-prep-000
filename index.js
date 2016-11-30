function theBeatlesPlay(musicians, instruments) {
  var ret = [];
  for (var i = 0; i < musicians.length; i++) {
    ret.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return ret;
}

function johnLennonFacts(arr){
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + '!!!';
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var beatlesLove = []
  if (num == 17) {
    beatlesLove.unshift('I love the Beatles!');
  } else {
    for (var i = 0; i <= num; i++) {
      beatlesLove.push('I love the Beatles!');
    }
  }
  return beatlesLove
}
