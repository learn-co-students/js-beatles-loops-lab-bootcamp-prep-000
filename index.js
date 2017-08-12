function theBeatlesPlay(musician, instrument) {
 var beatles = []
  for (var i = 0; musician.length > i; i++){
    beatles[i] = (musician[i] + ' plays ' + instrument[i])
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0
  var facts2 = []
  while (i < facts.length) {
  facts2.push(facts[i] + '!!!'); i++;
  }
  return facts2
}

function iLoveTheBeatles(i) {
  var statement = []
  do {
    statement.push("I love the Beatles!")
    i++
  } while (i < 15){}
  return statement
}


/*
describe('iLoveTheBeatles', function() {
  it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
    expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
  });

  it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
    expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
 */
