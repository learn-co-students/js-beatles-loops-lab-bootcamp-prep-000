function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] +" plays " + instruments[i]);
  }
  return array; 
}
function johnLennonFacts(factsArray){
  let facts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
let newArray = [];
let i = 0
while (i < factsArray.length){
  newArray.push(`${factsArray[i]}` + "!!!");
  i++} 
  return newArray; 
} 
function iLoveTheBeatles(number){
  let newArray = [];
  do {
  newArray.push ("I love the Beatles!");
  number ++
} while (number<15); 
return newArray;
}

