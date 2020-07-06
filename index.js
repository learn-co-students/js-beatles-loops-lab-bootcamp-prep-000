// add solution here
  var muscians = ["John Lennon", "Paul McCartney", "Ringo Starr"];
  
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray = []; 
  for(var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
} 
 const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts){
var i=0;
var newArray=[];
while (facts.length > i){
newArray.push(`${facts[i]}` + '!!!');
i++;
}
return newArray;
} 
function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
} 