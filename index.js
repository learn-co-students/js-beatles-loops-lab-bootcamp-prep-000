// create empty array (var); return array of musicians (str) and instruments (str) --> link based on same indices
function theBeatlesPlay(musicians, instruments) {
  var mus_instr = [];
  var i = 0;
  for (i=0; i<musicians.length; i++) {
    mus_instr.push(musicians[i] + ` plays ` + instruments[i]);
  }
  return mus_instr
}

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

//console.log(theBeatlesPlay(musicians, instruments))


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

//console.log(facts[0]+"!!!");


// take array of facts (str) and add "!!!" to end of each fact; return new array
function johnLennonFacts(johnLennonFacts) {
  var i = johnLennonFacts.length - 1;
  while (i >= 0) {
    johnLennonFacts[i] = johnLennonFacts[i] + "!!!";
    i--;
  }
  return johnLennonFacts;
}

// create var that stores empty array; add str to array; increment number (arg); 
function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push(`I love the Beatles!`)
    num++
  }
  while (num < 15);
  return love;
}

console.log(iLoveTheBeatles(7));

/*

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