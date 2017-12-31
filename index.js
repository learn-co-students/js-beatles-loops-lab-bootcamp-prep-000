const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function theBeatlesPlay(musiArr,instArr){
  var result=[];
  for(var i=0;i<musiArr.length;i++){
    result.push(`${musiArr[i]} plays ${instArr[i]}`)}
    return result;}

function johnLennonFacts(factsArr){
  var i=factsArr.length-1;
while(i>=0){
  factsArr[i]+="!!!";
  i--;}
  return factsArr;}
  
function iLoveTheBeatles(n){
  var result=[];
  do {result.push("I love the Beatles!");n++;}while(n<15);
  return result;
}

facts[0]+="!!!";
console.log(facts[0]<facts.length);
console.log(facts[0]);
console.log(facts[0]+"!!!");
