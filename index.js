 // add solution here

function theBeatlesPlay(array,array1){
  var emptyArray = new Array();
  for(let i = 0; i < array.length; i++){
    emptyArray.push(array[i] +" plays "+ array1[i]);
  }
  return emptyArray;
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length){
    array[i] += "!!!";
    ++i;
  }
  return array;
}

function iLoveTheBeatles(number){
  var emptyArray = new Array();
  do {
    emptyArray.push('I love the Beatles!');
    ++number;
  } while (number < 15);
  return emptyArray;
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