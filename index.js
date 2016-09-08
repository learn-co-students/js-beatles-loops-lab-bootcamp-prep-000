function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for(var i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return players;
}

function johnLennonFacts(facts) {
  var n = facts.length - 1;
  var answer = [];
  while(n >= 0) {
    var newFacts = facts[n] + '!!!';
    answer.unshift(newFacts);
    n--;
  }
  return answer;
}

function iLoveTheBeatles(number) {
  var emptyArr = [];
  do {
    emptyArr.push('I love the Beatles!');
    number++;
  } while(number < 15);
  return emptyArr;
}
