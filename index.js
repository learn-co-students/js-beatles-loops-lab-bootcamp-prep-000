function theBeatlesPlay (musicians,instruments) {
  var array = [];
  for (let i=0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts (facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array;
}

function iLoveTheBeatles (number) {
  var array = [];
  
  function maybeTrue() {
    return (number < 15)
  }
  
  do {
    array.push("I love the Beatles!")
    number++;
  } while (maybeTrue());
  return array;
}