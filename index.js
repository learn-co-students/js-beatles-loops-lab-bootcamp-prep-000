var countup = 0;

var testArray = [1, 2, 3, 4];
var testArray2 = [5, 6, 7, 8];

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var array = [];
  console.log(arrayMusicians);
  console.log(arrayInstruments);
  
  for(var numberOfMusicians = arrayMusicians.length;
      numberOfMusicians > 0;
      numberOfMusicians--) {
        array = [...array, `${arrayMusicians[countup]} plays ${arrayInstruments[countup]}`];
        countup = countup + 1;
      }
      console.log(array);
      return array;
}

function johnLennonFacts(arrayFacts) {
  var secondCountup = 0;
  var arrayTwo = [];
  while (secondCountup < arrayFacts.length) {
    arrayTwo[secondCountup] = `${arrayFacts[secondCountup]}!!!` ;
    secondCountup++;
  }
  console.log(arrayTwo);
  return arrayTwo;
}

function iLoveTheBeatles(loveNumber) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    loveNumber++;
  } while (loveNumber < 15);
  return loveArray;
}