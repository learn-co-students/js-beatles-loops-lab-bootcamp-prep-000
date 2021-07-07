// add solution here
function theBeatlesPlay(musician, instrument){
  var array = [];
  for (var i = 0; i < musician.length; i++ ){
    array.push( musician[i] + " plays " + instrument[i] )
  }
  return array;
}

function johnLennonFacts(facts){
  var exclfacts = [];
  var i = 0;
  while (i < facts.length) {
      exclfacts.push(facts[i] + "!!!")
      i++;
  }
  return exclfacts;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!" );
    n++;
  } while (n < 15);
  return array;
}