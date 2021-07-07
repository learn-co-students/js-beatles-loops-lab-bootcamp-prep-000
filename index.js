// add solution here

function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (var i = 0; i < musicians.length; i ++ ) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let newArray = [];
  let i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + '!!!')
    i ++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push('I love the Beatles!')
    number ++
  } while (number < 15);
  return array;
}