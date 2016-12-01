function theBeatlesPlay(musicians, instruments){
  var array = []
for (var i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
}
return array;
}

function johnLennonFacts(facts){
  const array = [];
  let countdown = 0;
  while (countdown < facts.length) {
    array.push(`${facts[countdown++]}!!!`);
  }
  return array;
}

function iLoveTheBeatles(number){
  const array = [];
  do {
    array.push(`I love the Beatles!`);
    number++;
  } while(number < 15);
  return array;
}
