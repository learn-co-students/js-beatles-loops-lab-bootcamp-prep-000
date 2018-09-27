
function theBeatlesPlay(musician, instruments) {
  let emptyArray = [];
  for(let i = 0; i < musician.length; i++){
    let string= musician[0] + instruments[0];
    emptyArray.push(musician[i] + " plays " + instruments[i] );
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  let array = [];
  let i = 0;
  while (i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}