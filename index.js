var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var arrayEmpty = [];

function theBeatlesPlay(musicians, instruments) {
for (let i = 0; i < 4; i++) {
arrayEmpty.push(`${musicians[i]} plays ${instruments[i]}`)
}
return arrayEmpty;
}

var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
var newFacts = [];
var i = 0;
while (i < facts.length) {
  newFacts.push(`${facts[i]}!!!`);
  i++
}
return newFacts;
}

function iLoveTheBeatles(n){
  var b = [];
  let i = 0
  do{
    b.push("I love the Beatles!")
    i++
    if (n >= 15){
      return b}
    }
  while(i <= n);
  return b;
}
