var theBeatlesPlay = function(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    newArray.push(string);
  }
  return newArray
}

var johnLennonFacts = function(facts) {
  let i = 0;
  var newArray = [];
  while ( i < facts.length) {
    var string = facts[i] + "!!!";
    newArray.push(string);
    i++;
      }
  return newArray
}

var iLoveTheBeatles = function(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
          }
    while (number < 15);
    return newArray
}
