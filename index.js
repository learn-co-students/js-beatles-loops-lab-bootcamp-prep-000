function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArr = [];
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    newArr.push(arrayOfMusicians[i] + ' plays ' + arrayOfInstruments[i])
  }
  return newArr;
};


function johnLennonFacts(facts) {
var newArr = [];
var i = 0
  while (i < facts.length) {
    newArr.push(facts[i] + '!!!');
    i++;
  }
  return newArr;
};


function iLoveTheBeatles(number) {
  var newArr = [];
  do {
    newArr.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return newArr;
}
