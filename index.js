// add solution here
function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (let i=0; i<musicians.length; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts (facts){
  var empty = [];
  let n = 0;
  while (n<facts.length){
empty.push(`${facts[n]}!!!`); 
n++;
  }
  return empty;
}

function iLoveTheBeatles (i){
  var empty = [];
  function incrementNumber() {
  i = i + 1}
  do {
    empty.push("I love the Beatles!");
    incrementNumber();
  } while
    (i < 15);
    return empty;
}