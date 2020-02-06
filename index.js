// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments){
  var counter = 0;
  var sentence;
  var band = [];
  for (counter; counter < musicians.length;counter++ ){
    sentence = musicians[counter] + " plays " + instruments[counter];
    band[counter] = sentence;
  }
  return band;
}

function johnLennonFacts(facts){
  var counter = 0;
  var exclamation = "";
  var exclamationFacts = [];
  while(counter < facts.length){
    exclamation = facts[counter] + "!!!";
    exclamationFacts[counter] = exclamation;
    counter++;
  }
  return exclamationFacts;
  
}
function iLoveTheBeatles(num){
  var array = [];
  var counter = 15 - (15-num);
  do{
    array.push("I love the Beatles!")
    counter++;
  }while(counter < 15)
  return array;
  
}



  
