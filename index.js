// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var empty = [];

function theBeatlesPlay(arr, arr1){
var returning = [];  
  for(var i = 0; i<4; i++){
    returning[i] = (arr[i] + " plays " +  arr1[i]);
    
  }
  return returning;
}
theBeatlesPlay(musicians,instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(arr3){
var yelling = [];  
  for(var i = 0; i<arr3.length; i++){
  yelling[i] = (arr3[i] + "!!!");
  }
  return yelling;
}

function iLoveTheBeatles(number){
var love = [];  
  if (number > 15){
    return("I love the Beatles!");
  } else {
  do{
  love[number] = ("I love the Beatles!");
  number--}
  while(number+1>0);
  }
  return love;
}
iLoveTheBeatles(7);



