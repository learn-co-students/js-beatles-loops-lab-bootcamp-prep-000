
function theBeatlesPlay(musicians, instruments) {
var array=[];
for (let i = 0; i < 4; i++) {
  array.push(musicians[i] + " plays " + instruments[i]);
} 
 return array;
}


var arr1 = [];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
];
function johnLennonFacts(facts) {

var i=0;
while (i < 4) {
  arr1.push(facts[i] + "!!!");
  i++;
}
return arr1; 
}


function iLoveTheBeatles(n){
var arr2=[];
n=0;

do{
(arr2.push("I love the Beatles!")); 
n++;

} while (arr2.length < 8);
return arr2;
}
