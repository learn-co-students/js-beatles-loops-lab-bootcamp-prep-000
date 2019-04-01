// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
    console.log(emptyArray[i])
  }
  return emptyArray;
}

function johnLennonFacts(johnArray) {
  var counter = johnArray.length;
  while (counter > 0) {
    johnArray[counter-1] = johnArray[counter-1] +'!!!'
    counter--
  }
  return johnArray;
}

function iLoveTheBeatles(number) {
  var fanArray = []
  do {
    fanArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  
  return fanArray
}