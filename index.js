function theBeatlesPlay(arrayOFMusicians, arrayOfInstruments) {
  
  var emptyArray=[];
  
  for(var i = 0; i < arrayOFMusicians.length; i++){
    emptyArray.push(`${arrayOFMusicians[i]} plays ${arrayOfInstruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(arrayOfFacts){
  var i = 0;
  while(i < arrayOfFacts.length){
    arrayOfFacts[i] += "!!!";
    i++;
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray=[];
  
  do {
    emptyArray.push("I love the Beatles!")
    number++;
  } while(number < 15);
  
  return emptyArray;
}