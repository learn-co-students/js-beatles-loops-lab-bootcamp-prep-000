function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return array;
}


function johnLennonFacts(facts) {
  var arrayTwo = [];
  let i = 0;
  while (i < facts.length) {
    arrayTwo.push(`${facts[i]}!!!`);
    i++;
  }
  
  return arrayTwo;
}


function iLoveTheBeatles(num) {
  var arrayThree = [];

  do {
    arrayThree.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return arrayThree;
}