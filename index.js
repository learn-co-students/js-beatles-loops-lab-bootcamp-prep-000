// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var Array = []
  var Number = arrayMusicians.length
  for(let i = 0; i < Number; i++) {
    Array.push(arrayMusicians[i]+' plays '+arrayInstruments[i]);
  }
  return Array;
}

function johnLennonFacts(arrayLennon) {
  var finalIndex = arrayLennon.length;
  var counter = 0;
  while (finalIndex > counter) {
    arrayLennon.push(arrayLennon[0]+'!!!');
    arrayLennon.shift();
    counter++;
    }
    return arrayLennon
}

function iLoveTheBeatles(numberParameter) {
  var arrayNew = [];
  do {
    arrayNew.push('I love the Beatles!');
    numberParameter++
  }
  while (numberParameter < 15);
  return arrayNew;
}