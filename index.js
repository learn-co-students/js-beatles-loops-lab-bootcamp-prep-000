function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i < musicians.length; i++){
      array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(array){
  let i = 0;
  while (i < array.length){
    array[i] = array[i] + "!!!"
    i++
  }
  return array;
}

function iLoveTheBeatles(number) {
  let array = [];
  let i = number;
  do {
    array[number - i] = "I love the Beatles!"
    number++
  } while (number < 15);
  return array;
}
