var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];



var theBeatlesPlay = (musicianArr, instrumentArr) => {
    var beatlesArray = [];
    for (var i = 0; i <= musicianArr.length - 1; i++) {
      beatlesArray.push(`${musicianArr[i]} plays ${instrumentArr[i]}`)
      console.log(beatlesArray)
    }
    return beatlesArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var johnLennonFacts = (array) => {
  for (var i = 0; i <= array.length - 1; i++) {
    array[i] = array[i] + '!!!'
  }
  return array
}


var iLoveTheBeatles = (num) => {
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    num = num + 1;
  } while (num < 15);
  return newArray;
}
