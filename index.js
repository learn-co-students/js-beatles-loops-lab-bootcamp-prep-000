function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return beatles;
}
  
function johnLennonFacts(array) {
  var newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}!!!` );
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array;
}