const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function  theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=[0]; i<[4]; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array 
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
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
  var strings=[];
  do{
    n++;
    strings.push(`I love the Beatles!`);
}
while (n < 15);
return strings;
}