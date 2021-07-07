function theBeatlesPlay(musician, instrument){
  var array = new Array()
  for (let i = 0; i < musician.length; i++){
  array.push(`${musician[i]} plays ${instrument[i]}`)}
    return array
}

function johnLennonFacts(facts){
  var array = new Array();
  var i = 0;
  while (i < facts.length){
  array.push(facts[i]+"!!!");
  i++;
  }
  return array
}

function iLoveTheBeatles(n){
  var empty = new Array();
  do {empty.push("I love the Beatles!");
  n++}
  while (n < 15);
  return empty
}