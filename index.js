// add solution here

function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  for (let i = 0; i < arrMusicians.length; i++) {
    arr.push(arrMusicians[i] + ' plays ' + arrInstruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}