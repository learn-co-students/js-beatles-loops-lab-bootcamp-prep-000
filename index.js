// add solution here
// describe('Beatles Loops', function() {
//   it("returns an array of strings containing what instruments each musician plays", function() {
//     const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//     const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

//     expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
//   });

function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(array) {
  var new_arr = [];
  for (var i = 0; i < array.length; i++) {
    new_arr.push(array[i] + '!!!')
  }
  return new_arr;
}

function iLoveTheBeatles(num) {
  var array = [];
  if (num > 9) {
    array.push('I love the Beatles!');
    return array;
  }
  for (var i = 0; i <= num; i++) {
    array.push('I love the Beatles!');
  }
  return array;
}

