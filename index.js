var theBeatlesPlay = (musicians, instruments) => {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + ' plays ' + instruments[i];
    band.push(string);
  }
  return band;
}

var johnLennonFacts = facts => {
  var i = 0;
  var array = [];
  while (i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

var iLoveTheBeatles = number => {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return array;
}
