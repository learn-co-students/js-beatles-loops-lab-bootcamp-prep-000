function theBeatlesPlay(musician, instrument)
{
  var array = [];
  for(var i = 0; i < musician.length; i++)
  {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(array.length != facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
  } while(++number < 15);
  
  return array;
}