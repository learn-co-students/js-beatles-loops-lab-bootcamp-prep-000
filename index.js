function theBeatlesPlay       (musician, instrument){
  var artistList = [];
  for(var i = 0; i < musician.length; i++) {
    artistList.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return artistList;
}

function johnLennonFacts(fact){
  var i= 0;
  while (fact.length > i){
    fact[i] = fact[i] + "!!!";
    i++
  }
  return fact
}

function iLoveTheBeatles(n) {
  var array= [];
  do{
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
}

