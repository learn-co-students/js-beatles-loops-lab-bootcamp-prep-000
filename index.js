// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments=["Guitar", "Bass guitar", "Lead guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
var array=[];
  for (let i=0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

var facts=["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function johnLennonFacts(facts){
  var arr=[];
  let i=0
  while(i<facts.length){arr.push(`${facts[i]}!!!`); i++;}
  return arr;
}

function iLoveTheBeatles(n){
  var myArray=[];
do {myArray.push("I love the Beatles!"); n++}
while (n<15);
return myArray;
}
