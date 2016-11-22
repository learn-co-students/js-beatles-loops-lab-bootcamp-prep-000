function theBeatlesPlay(musicians, instruments){
    var result = [];
    var musician;
    var instrument;

    for (i = 0; i < musicians.length; i++){
        musician = musicians[i];
        instrument = instruments[i];
        result.push(`${musician} plays ${instrument}`);
    }
    return result;
}

function johnLennonFacts(array){

  for (i = 0; i < array.length; i++){
    array[i] = array[i] + "!!!"
  }
  return array;
}


function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!")
  } while (num >15);
  return array;  
}
