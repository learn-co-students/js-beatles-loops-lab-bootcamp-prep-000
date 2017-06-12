function theBeatlesPlay(arrMusicians, arrInstruments) {
  var array = [];
for (var i = 0; i < arrMusicians.length; i++) {
    var string = arrMusicians[i] + ' plays ' + arrInstruments[i];
    array.push(string)
}
  return array
}


function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
}
return array
}


function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
return array
}
