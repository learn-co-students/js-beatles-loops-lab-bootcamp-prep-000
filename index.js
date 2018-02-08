function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i<facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}



 /*
  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });

  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});
*/
