// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var result = [];
  var i = 0;
  while(i < facts.length) {
    result.push(facts[i] + '!!!');
    i++;
  }
  return result;
}

function iLoveTheBeatles(number) {
  var result = [];
  do{result.push('I love the Beatles!');
    number++;
  } while(number < 15);
  return result;
}