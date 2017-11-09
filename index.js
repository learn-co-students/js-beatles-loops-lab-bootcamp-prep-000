var band = ['adam', 'matt', 'chris', 'joe'];
var gear = ['guitar', 'violin', 'bass', 'drums'];

function theBeatlesPlay(musicians, instruments){
  var myBand = [];
  var player;
  var instr;
  for (var i = 0; i < musicians.length; i++){
    player = musicians[i];
    instr = instruments[i];
    myBand.push(`${player}` + " plays " + `${instr}`);
  }
  return myBand;
}

///var check = theBeatlesPlay(band, gear);
//console.log(check);

const johnfacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var factlist = [];
  var currentfact;
  for (var i = 0; i < facts.length; i++){
    currentfact = facts[i];
    factlist.push(`${currentfact}` + "!!!");
  }
  return factlist;
}

//var check = johnLennonFacts(johnfacts);
//console.log(check);

function iLoveTheBeatles(number){
  var thing = [];
  do {
    thing.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return thing;
}

var check = iLoveTheBeatles(3);
console.log(check);
