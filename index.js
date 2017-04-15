function theBeatlesPlay(array_musicians, array_instruments){
  var empty_array = [];
  for (var i=0; i < array_musicians.length; i++){
    empty_array[i] = array_musicians[i] + " plays " + array_instruments[i];
  }
  return empty_array;
}

function johnLennonFacts(array_of_facts){
  var i = 0;
  while (i < array_of_facts.length){
    array_of_facts[i] = array_of_facts[i] + "!!!";
    i++;
  }
  return array_of_facts
}

function iLoveTheBeatles(number){
  var new_array = [];
  do {
    new_array.push("I love the Beatles!");
    number++;
  } while (number < 15 );
  return new_array;
}
