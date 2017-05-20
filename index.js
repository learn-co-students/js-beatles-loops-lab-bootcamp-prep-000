var musician = [];
var instrument = [];
var facts = [];

var theBeatlesPlay = function(musician, instrument) {
  var array = [];
  for (var i = 0; i < musician.length; i++) {
    array.push(musician[i] + ' ' + 'plays' + ' ' + instrument[i])
  }
  return array
}


var johnLennonFacts = function(facts) {
  var array = [];
  for (var i = 0; i < facts.length; i++) {
    array.push(facts[i] + '!!!')
  }
  return array
}


var iLoveTheBeatles = function(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    console.log(n++)
  } while (n < 15)
  return array;
}
