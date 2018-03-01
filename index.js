function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(johnFacts){
  let i = 0;
  do{
    johnFacts[i] = `${johnFacts[i]}!!!`;
    i++;
  } while (i < johnFacts.length){
    return johnFacts;
  }
}

function iLoveTheBeatles(myNumber){
  var beatlesArray = [];
  do{
    beatlesArray.push("I love the Beatles!");
    myNumber++;
  } while(myNumber < 15){
    return beatlesArray;
  }
}