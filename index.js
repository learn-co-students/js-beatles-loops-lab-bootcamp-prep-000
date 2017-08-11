function theBeatlesPlay(musiciansArray, instrumentsArray){
  var newArray = [];
  for (var i = 0; i < 4; i++){
    newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return newArray;
}

function johnLennonFacts(factsArray){
  var newArray = [];
  let upcount = 0;

  while (upcount < factsArray.length) {
  newArray.push(`${factsArray[upcount]}!!!`)
  ++ upcount
}
  return newArray
}


function iLoveTheBeatles(number){
  var newArray = [];
  var counter = 0;
  do {
    newArray.push('I love the Beatles!');
    ++ counter
  } while (counter < number + 1);
  if (number < 17){
    return newArray;
  }
  else{
    newArray = ['I love the Beatles!'];
    return newArray;
  }
}
