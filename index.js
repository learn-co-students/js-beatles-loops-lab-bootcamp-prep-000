function theBeatlesPlay(musiciansArray, instrumentsArray){
  var newArray = [];
  for(let i = 0; i < musiciansArray.length; i++){
    newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return newArray;
}

function johnLennonFacts(factsArray){
  var newArray = [];
  var counter = 0

  while(counter < factsArray.length){
    newArray.push(`${factsArray[counter]}!!!`)
    counter++;
  }

  return newArray;
}

function iLoveTheBeatles(number){
  var newArray = [];

  do{
    newArray.push('I love the Beatles!');
    number++;
  } while(number < 15)

  return newArray;
}
