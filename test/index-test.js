describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each instrument plays", function theBeatlesPlay() {

    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    var theBeatlesPlay =  new Set (musicians + instruments)
    for (let musicians of instruments ){
      return musicians + instruments;
    }

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });

  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function johnLennonFacts() {
      const facts = [  "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        var johnLennonFacts = new Set (facts)
        for (let facts of johnLennonFacts ){
          return facts
        }

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
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function iLoveTheBeatles() {
      var array = ["iLoveTheBeatles"]
      for ( var i = 0 ; i < 8; i++){
        return array
      }
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function ()
     { var array = ["iLoveTheBeatles"]
     for ( var i = 0 ; i = 1; i++){
       return array
     }
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});
