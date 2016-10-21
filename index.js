function theBeatlesPlay(musicians, instruments) {
  var add = []
  for ( var i = 0; i < musicians.length; i++) {

    add.push(musicians[i] + ' plays ' + instruments[i])
  }
  return add
}

function johnLennonFacts(facts) {
  for ( var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + '!!!'
  }
  return facts

}

function iLoveTheBeatles(n) {
  var test = [];
  do {
    test.push('I love the Beatles!')
    n++
  } while (n < 15);
  return test
}
