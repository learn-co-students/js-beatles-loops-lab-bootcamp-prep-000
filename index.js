
function theBeatlesPlay (musicians, instruments){
var newArray = [];
  for (var i = 0; i < musicians.length ; i++){
    var musicianString = musicians[i] + ' plays ' + instruments[i];
    newArray[i] = musicianString ;
    
}return newArray;
}

function johnLennonFacts (array){
  var i = 0;
  var newArray = [];
  while(array.length > i){
  newArray.push(`${array[i]}` + "!!!");
  i++;
  } return newArray;
}
