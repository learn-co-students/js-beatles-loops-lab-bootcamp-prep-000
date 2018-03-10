function theBeatlesPlay(array1, array2) {
  var newArray = []
  for (var n=0; n < 4; n++) {
    newArray.push(`${array1[n]} plays ${array2[n]}`);
  } return newArray
}
theBeatlesPlay(musicians, instruments);

function johnLennonFacts(array) {
 var newArray = [];
 var n = 0;
  while (n < array.length) {
    newArray.push(`${array[n++]}!!!`);
  } return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!"), n++;
  } while ( n < 15 );
  return newArray;
}