function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  var array = [];
  while(i < facts.length){
    var string = facts[i] + "!!!";
    array.push(string);
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;

  } while (number < 15);
  return array;
}
