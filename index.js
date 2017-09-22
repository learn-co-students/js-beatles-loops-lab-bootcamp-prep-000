
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musiciansBeatles, instrumentsBeatles){
  var theBeatles = [];
  for(var i = 0; i < musiciansBeatles.length; i++){
    theBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatles;
}




var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(factsArray){
  var newfactsArray = [];
  var i = 0;
  while(i < factsArray.length){
    newfactsArray.push(factsArray[i] + "!!!");
    i++
  }
  return newfactsArray;
}

function iLoveTheBeatles(myNum){
  var newBeatlesArray = [];
  do{
    newBeatlesArray.push("I love the Beatles!")
    myNum++;
  }while(myNum < 15);
  return newBeatlesArray;
}
