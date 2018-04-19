function theBeatlesPlay(art, int) {
  var emp = [];
  for (var i=0 ; i < art.length; i++){
    emp.push(art[i]+ " plays "+ int[i] )
  }
  return emp
}
function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = (facts[i]+"!!!")
    i++;
  }
  return facts
} 
function iLoveTheBeatles(n) {
  var empArr = [];
  do {
    n++;
    empArr.push("I love the Beatles!");
  } while (n < 15)
  return empArr
}

