// add solution here
function theBeatlesPlay(musiciansArray,instrumentsArray) {
  var emptyArray = [];
  for (var i=0;i<musiciansArray.length;i++){
    var position = `${musiciansArray[i]} plays ${instrumentsArray[i]}`;
    emptyArray.push(position);
  }
  console.log(emptyArray);
  return emptyArray;
}

function johnLennonFacts(factsArray) {
  var count = 0;
  while (count < factsArray.length) {
    factsArray[count] = factsArray[count] + "!!!";
    count++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var fanArray = [];
  
  do {
    fanArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  
  return fanArray;
}