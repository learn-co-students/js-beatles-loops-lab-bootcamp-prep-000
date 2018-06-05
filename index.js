function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  
  for(let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
  
}

function johnLennonFacts(array) {
  const facts = [];
  let i = 0;
  
  while (i < array.length) {
    facts.push(`${array[i]}!!!`);
    i += 1;
  }
  
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}