function theBeatlesPlay(musicians, instruments) {
  let array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
   facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  let arr = []
  do {
    arr.push('I love the Beatles!')
    number++
  } while (number < 15)
  
  return arr
}

//   describe('iLoveTheBeatles', function() {
//     it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//       expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//     });

//     it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//       expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//     });
//   });

// });

