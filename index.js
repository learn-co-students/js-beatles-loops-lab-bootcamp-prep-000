// add solution here
function theBeatlesPlay(musicians, instruments){
  const arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts){
  let i = 0;
  let arr = [];
  while(i < facts.length){
    arr.push(`${facts[i]}!!!`)
    i++;
  }
  return arr
}

function iLoveTheBeatles(num){
  let arr = [];
  do {
    arr.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return arr;
}


//   describe('johnLennonFacts', function(){
//     it("returns an array of strings with exclamation points", function() {
//       expect(johnLennonFacts([
//         "He was the last Beatle to learn to drive",
//         "He was never a vegetarian",
//         "He was a choir boy and boy scout",
//         "He hated the sound of his own voice"
//       ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);
//     });
    
//     it("takes in any array of strings and returns a new array with exclamation points added to each element", function() {
//       expect(johnLennonFacts([
//         "While on tour, he enjoyed playing Monopoly",
//         "Harmonica was the first instrument Lennon learned to play",
//       ])).toEqual(["While on tour, he enjoyed playing Monopoly!!!", "Harmonica was the first instrument Lennon learned to play!!!"])
//     })
//   });

//   describe('iLoveTheBeatles', function() {
//     it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//       expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//     });

//     it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//       expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//     });
//   });

// });
