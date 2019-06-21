// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    	array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
  }
  
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];
function johnLennonFacts(factsArray){
var i=0;
var newArray=[];
while (factsArray.length > i){
newArray.push(`${factsArray[i]}!!!`);
i++;
}
return newArray;
}

function iLoveTheBeatles(n){
var anotherArray=[];
do {
n++;
anotherArray.push("I love the Beatles!");
} while (n < 15);
return anotherArray;
}