function theBeatlesPlay(musicians, instruments) {
  const array = [];
  
  for (let i = 0; i < musicians.length; i++) {
    const string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  
  return array;
}

function johnLennonFacts(facts) {
  const array = [];
  let counter = 0;
  
  while (counter < facts.length) {
    array.push(`${facts[counter]}!!!`);
    counter += 1;
  } 
  
  return array;
}

function iLoveTheBeatles(num) {
  const array = [];
  
  do {
    array.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  
  return array;
}
