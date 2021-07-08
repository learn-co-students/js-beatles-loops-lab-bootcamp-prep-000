// add solution here
var musicians = ["John Lennon", "Paul McCartney",
"Ringo Starr", "George Harrison"];
var instruments = ["Bass Guitar", "Guitar",
"Drums", "Lead Guitar"];

theBeatlesPlay(musicians, instruments);


function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++)
  {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never vegetarian",
  "He hated the sound of his own voice",
  "He was a choir boy and boy scout"
];


function johnLennonFacts(facts) {
  var result= [];
  var i = 0;
  while (i < facts.length) {
    result.push(facts[i] + '!!!')
    i++;
  }
  return result;
}

johnLennonFacts(facts);

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  return newArray;
}
