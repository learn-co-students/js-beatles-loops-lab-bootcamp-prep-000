function theBeatlesPlay(arrMusicians, arrInstruments) {
  var newArr = [];

  for(var i = 0; i < arrMusicians.length; i++) {
    newArr.push(arrMusicians[i] + ' plays ' + arrInstruments[i]);
  }

  return newArr;
}

function johnLennonFacts(arrFacts) {
  var i = 0;

  while(i < arrFacts.length) {
    arrFacts[i] = arrFacts[i] + '!!!';
    i++;
  }

  return arrFacts;
}

function iLoveTheBeatles(num) {
  var newArr = [];

  do {
    newArr.push('I love the Beatles!');
    num++;
  } while (num < 15);

  return newArr;
}
