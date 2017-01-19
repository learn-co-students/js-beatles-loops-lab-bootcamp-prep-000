function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(array) {
  var new_arr = [];
  array.forEach(fact => {new_arr.push(`${fact}!!!`)});
  return new_arr
}

function iLoveTheBeatles(num) {
  var beatles_arr = [];
  var iLoveTheBeatles = 'I love the Beatles!';
  if (num > 15) {
    beatles_arr.push(iLoveTheBeatles)
  } else {
    while (num >= 0) {
      beatles_arr[num] = iLoveTheBeatles;
      num--;
    }
  }
  return beatles_arr
}