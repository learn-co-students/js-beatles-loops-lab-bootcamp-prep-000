const  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
  var arr  = [];
  for (var i = 0; i < instruments.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}
var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
function johnLennonFacts(facts){
  var shouted = [];
  var i = 0;
  while(i < facts.length){
    shouted.push(facts[i] + "!!!");
    i++;
  }
  return shouted;
}

function iLoveTheBeatles(number){
 var love = [];
 do
 {
   love.push("I love the Beatles!");
   number++;
 }
 while(number < 15){
   return love;
 }
}
