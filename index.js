function theBeatlesPlay(musicians, instruments){
  const array = [];
  for(var m=0; m < musicians.length; m++){
    array.push(`${musicians[m]} plays ${instruments[m]}`)
  }
  return array;
}

function johnLennonFacts(facts){
  const array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    ++i;
  }
  return array;
}

function iLoveTheBeatles(number){
  let array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
