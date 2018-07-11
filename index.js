function theBeatlesPlay (musicians, instruments) {
  var beatles = [];
  for (let i=0; i<musicians.length; i++)
   beatles.push(`${musicians[i]} plays ${instruments[i]}`);
   return beatles;
}

function johnLennonFacts (facts) {
  var array=[];
  let i=0;
  while (i<facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  } return array;
}

function iLoveTheBeatles (number) {
  var array = [];
  let i=0;
  if (number<15){
    do {
    array.push('I love the Beatles!');
    i++;
  } while (i<=number);
  } else {
    return "I love the Beatles!";
  }
  return array;
}