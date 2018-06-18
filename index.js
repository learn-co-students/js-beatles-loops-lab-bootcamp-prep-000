const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (let i = 0; i<musicians.length; i++) {
  list.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return list;
}
function johnLennonFacts(facts) {
  let i = facts.length - 1;
  while (i >= 0) {
    facts[i] += '!!!';
    i --;
  }
  return facts;
}
function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
    }
  while (n < 15);
  return array;
}
