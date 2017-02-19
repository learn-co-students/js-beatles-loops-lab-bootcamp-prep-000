function theBeatlesPlay (musicians,instruments) {
  var array = []
  for (var i=0,j=0;i<musicians.length && j<instruments.length;i++,j++) {
  array.push(musicians[i] + " plays " + instruments[j])}
  return array
}

function johnLennonFacts(facts) {
  var countdownlength = facts.length-1
  while(countdownlength>=0) {
    facts[countdownlength] = facts[countdownlength] + "!!!"
    countdownlength--
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    n++
  }
  while(n<15); 
return array
  }
