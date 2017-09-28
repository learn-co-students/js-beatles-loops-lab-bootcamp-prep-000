function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
for (var i = 0; i < musicians.length; i++) {
   myArray.push(musicians[i] + ' ' + 'plays' + ' ' + instruments[i]);
}
  return myArray;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var j = 0;
  while(j < facts.length) {
  newArray.push(facts[j] + '!!!');
  j++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return arr;
}
