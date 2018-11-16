// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(let i = 0; i < musicians.length; i++) {
    let temp = `${musicians[i]} plays ${[instruments[i]]}`;
    arr.push(temp);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let size = facts.length;
  while(size >= 0) {
    facts[size-1] = facts[size-1] + "!!!";
    size--; 
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return arr;
}