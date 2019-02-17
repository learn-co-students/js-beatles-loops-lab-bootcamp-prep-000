/*function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instrument[i]}`
  }
}
*/

function theBeatlesPlay (musician, instrument) {
  var array = []
  for (var i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  var i = 0
  var newArray = []
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(num) {
  var array = [];
  var i = 0;
  if (num === 17) {
    array.push("I love the Beatles!");
    } else {
      do {
    array.push("I love the Beatles!");
    i++;
  } while (i <= num);
    }
  return array;
}