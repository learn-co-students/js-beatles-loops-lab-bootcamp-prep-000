function theBeatlesPlay(musicians, instruments){
  var beatlesArray = [];
  for(let i = 0; i <musicians.length; i++){
    var texto = musicians[i] + " plays " + instruments[i];
    beatlesArray.push(texto)
  }
  return beatlesArray;
}

function johnLennonFacts(array){
  var i = 0;
  var array2 = []
  while(array.length > i){
    array2.push(array[i] + "!!!")
    i++
  }
  return array2
}

function iLoveTheBeatles(number){
  var array2 = []
  do{
    array2.push("I love the Beatles!")
    number++
  }while (number < 15)
  return array2
}