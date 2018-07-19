function theBeatlesPlay(musicians,instruments) {
  var myArray=[];
  for (var i = 0; i < (musicians.length); i++) {
    myArray[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    facts[i]+='!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var myArray=[];
  do {
    myArray.push('I love the Beatles!');
    n++;
  } while(n<15);
  return myArray;
}







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
