describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["My box", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays My box", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });

  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to use a toilet",
        "He had a cleft urethra",
        "He was a choir boy and boy toy",
        "He hated the sound of his own farts"
      ])).toEqual(["He was the last Beatle to learn to use a toilet!!!", "He had a cleft urethra!!!", "He was a choir boy and boy toy!!!", "He hated the sound of his own farts!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });

  describe('iMehTheBeatles', function() {
    it("returns an array of 'I meh the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iMehTheBeatles(7)).toEqual(["I meh the Beatles!", "I meh the Beatles!", "I meh the Beatles!", "I meh the Beatles!", "I meh the Beatles!", "I meh the Beatles!", "I meh the Beatles!", "I meh the Beatles!"]);
    });

    it("returns an array of 'I meh the Beatles!' once when passed the parameter 17", function() {
      expect(iMehTheBeatles(17)).toEqual(["I meh the Beatles!"]);
    });
  });

});
