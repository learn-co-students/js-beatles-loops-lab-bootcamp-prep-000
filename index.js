// NOTES

// musicians.length here makes sense, because i must be less / equal to the number of musicians


function theBeatlesPlay(musicians, instruments) {
  var whatBeatlesDo = [];       // empty array
  for  (var i = 0; i < musicians.length; i++) {
    whatBeatlesDo.push(musicians[i] + " plays " + instruments[i]);
  }
  return whatBeatlesDo;
} 

/*   TEST 1 
describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });   */
  
  
// IMPORTANT    - need to remember for while loop to keep i incrementing
// do this at the end of the loop


  
  // since we define variable facts for this test, we don't need to put it in as an argument... it is not defined yet, so we don't include as an argument for johnLennonFacts function
  
function johnLennonFacts(facts) {   
  // don't need to provide the facts, but need to include it as an argument - which will then declare facts as a parameter
  var extraFactsAboutJohn = [];
  var i = 0; 
  while (i < facts.length) {
    extraFactsAboutJohn.push(facts[i] + "!!!");
    // extraFactsAboutJohn.push(${facts[i]}!!!);
    // This interpolation could also work!! Nicole the Help lady suggested
    i++;
  }
  return extraFactsAboutJohn;
}
  
/* TEST 2 
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
  });                   */ 
  
  
  
  function iLoveTheBeatles(n) {
    var numArray = [];
    do {
      numArray.push("I love the Beatles!")
      n++;
    } while (n < 15);
    return numArray;
  }
  
  
/* TEST 3 
  
  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});              */ 

  
  
  