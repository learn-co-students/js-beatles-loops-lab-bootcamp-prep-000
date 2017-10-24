
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var finalArr = [];
  for (var i = 0; i < arrMusicians.length; i++) {
    finalArr.push(arrMusicians[i] + " plays " + arrInstruments[i]);
  }
  return finalArr;
}
function johnLennonFacts(factsArr) {
  var factsArrExclamation = [];
  var i = 0;
  while (i < factsArr.length) {
    factsArrExclamation.push(factsArr[i] + "!!!")
    i++
  }
  return factsArrExclamation;
}
function iLoveTheBeatles(num) {
  var finalArr = [];
  var i = 0;
  do {finalArr.push("I love the Beatles!");
i++;
}
  while (num < 15 && i<=num)
  return finalArr;
}
/*
Create a function `iLoveTheBeatles` which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than `15`.
The function should return the array with the strings `"I love the Beatles!"`.

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
