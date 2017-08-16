function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}

function johnLennonFacts(arrayOfFacts){
  for(let i = 0; i < arrayOfFacts.length; i++){
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!"
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return array;
}
