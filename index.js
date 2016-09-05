function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var array=[];
  for (var i = 0; i < arrayMusicians.length; i++){
    array.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
  }
  return array;
}
function johnLennonFacts(arrayOfFactLennon){
  var i = 0
  while (i < arrayOfFactLennon.length){
    arrayOfFactLennon[i] = arrayOfFactLennon[i] + "!!!";
    i++;
  }
  return arrayOfFactLennon;
}
function iLoveTheBeatles(n){
  var array = [];

  do {
    array.push("I love the Beatles!")
    n++;
  } while(n < 15)
  return array;
}
