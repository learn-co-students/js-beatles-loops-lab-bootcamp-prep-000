var musicians = ["John Lennon", "Paul Mccartney", "Ringo Starr", "George Harrison"]
var instrumentsPlays = ["drums", "guitar", "bass"]

function theBeatlesPlay(musicians, instrumentsPlays){
var list = [];
for (var i = 0 ; i < musicians.length ; i ++ ) {
  list.push(musicians[i] + " plays " + instrumentsPlays[i])
}
return list
}

var facts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]

function johnLennonFacts(facts){
var factsExclamation = []; var i = 0;
while (i < facts.length) {
  factsExclamation.push( facts[i] + "!!!")
  i++;
}
return factsExclamation
}



function iLoveTheBeatles(number){
var statement = [];
if (number < 15){
  do {
    statement.push("I love the Beatles!");
    number --;
  }
  while (number >= 0);
  }
else {
statement.push("I love the Beatles!");
}
return statement;
}
