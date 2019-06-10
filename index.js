
// add solution here

function theBeatlesPlay(musicians, instruments) {
  var stringsArray = [];
  
  for (var i = 0; i < musicians.length; i += 1) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var newString = musician + ' plays ' + instrument;
    stringsArray.push(newString);
  }
  
  return stringsArray;
}


function johnLennonFacts(array) {
  var factsArray = [];
  
  for (var i = 0; i < array.length; i += 1) {
    var element = array[i];
    var fact = element + '!!!';
    factsArray.push(fact);
  }
  
  return factsArray;
}


function iLoveTheBeatles(num) {
  var newArray = [];
  
  do {
    newArray.push('I love the Beatles!');
    num += 1;
  } while (num < 15);
  
  return newArray;
}

