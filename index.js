function theBeatlesPlay(arrayMusician,arrayInstrument){
  var array = [];
  //var counter = arrayMusician.length
  for (var i=0; i<arrayMusician.length; i++){
    var newElement = arrayMusician[i]+" plays "+arrayInstrument[i];
    array.push(newElement);
  }
  return array
}

function johnLennonFacts(arrayLenon){
  var i=0;
  while (i<arrayLenon.length){
    var newElement = arrayLenon[i]+"!!!";
    arrayLenon[i] = newElement;
    i++;
  }
  return arrayLenon
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!")
    number++;
  } while (number<15);
  return array
}
