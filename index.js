function theBeatlesPlay(musicians_array, instruments_array){
  var beatles_array = [];

  for (var i = 0; i < musicians_array.length; i++){
    beatles_array.push(`${musicians_array[i]}` + " plays " + `${instruments_array[i]}`);
  }
  return beatles_array;
}

function johnLennonFacts(array){
  var exclamation_array = []
  for (var i = 0; i < array.length; i++){
    exclamation_array.push(array[i] + "!!!")
  }
  return exclamation_array;
}

function iLoveTheBeatles(n){
  const array = []
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}
