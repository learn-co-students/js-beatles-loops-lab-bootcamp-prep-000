function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArr = [];

  for(var i = 0; i < arrayOfMusicians.length; i++) {
    newArr.push(arrayOfMusicians[i] + ' plays ' + arrayOfInstruments[i]);
  }
  return newArr;
}

function johnLennonFacts(array) {
  var newArr = [];

  for(var i = 0; i < array.length; i++) {
    newArr.push(array[i] + '!!!');
  }
  return newArr;
}

function iLoveTheBeatles(number) {
  var newArr = [];

  do {
    newArr.push('I love the Beatles!');
    number += 1;
  }
  while(number < 15);

  return newArr;
}
