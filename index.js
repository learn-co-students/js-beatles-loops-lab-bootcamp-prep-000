// add solution here


function theBeatlesPlay(array_musicians, array_instruments) {
  var empty_array = [];
  var array_length = array_musicians.length;
  for (var i = 0; i < array_length; i ++){ 
  empty_array.push(array_musicians[i] + " plays " +  array_instruments[i]);
  }
      return empty_array;
}



function johnLennonFacts(John_facts){
  var array_length = John_facts.length;
  var empty_array = [];
  var i = 0;
  while (array_length > 0){
  empty_array.push(John_facts[i] + "!!!");
  i ++;
  array_length --;
  }
  return empty_array;
}


function iLoveTheBeatles(number){
  var empty_array = [];
  do {
    empty_array.push("I love the Beatles!");
    number ++;
  } while (number< 15);
  return empty_array;
  }
  
  