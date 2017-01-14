function theBeatlesPlay (musicians, instruments) {
  var array = new Array(); 
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
 return array;   
}

function johnLennonFacts(facts) {
  var excitedFacts = new Array();
  let count = 0;
  while(count < facts.length ) {
    excitedFacts.push(facts[count] + "!!!");
    count++;
  }
  return excitedFacts; 
}

function iLoveTheBeatles(number) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");
    number++; 
  } while (number < 15);
  return array; 
}

