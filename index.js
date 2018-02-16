function theBeatlesPlay(array1, array2) {
  var arrayLength = array2.length;
  var band = [];
  for (var i = 0; i < arrayLength; i++) {
    var first1 = array1[0];
    var first2 = array2 [0];
    var newString = `${first1} plays ${first2}`;
    band.push(newString);
    array1.shift();
    array2.shift();
  }
 return band;
}

function johnLennonFacts(array) {
  var exclaimFacts = [];
  while (array.length > 0) {
    var addExclaim = array[0] + "!!!";
    exclaimFacts.push(addExclaim);
    array.shift();
  }
  return exclaimFacts;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  var loveString = "I love the Beatles!";
  do {loveArray.push(loveString);
     } while (n < 15 && loveArray.length <= n);
       return loveArray;
}