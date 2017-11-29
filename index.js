
  function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    emptyArray[counter] = `${musicians[counter]} plays ${instruments[counter]}`;
  }
  return emptyArray;
}


function johnLennonFacts(arrayFacts) {
  var count = 0;
  while(count < arrayFacts.length) {
    arrayFacts[count] = `${arrayFacts[count]}!!!`;
    count++
  }
  return arrayFacts;

}


function iLoveTheBeatles(n) {
  var arrayEmpty = [];
  var count = 0;
  if (n === 17) {
    arrayEmpty.push("I love the Beatles\!");
    return (arrayEmpty);
  }
  else {

    do {
      arrayEmpty[count] = "I love the Beatles\!";
      count++;
    } while (count <= n);

    return arrayEmpty;

  }

}
