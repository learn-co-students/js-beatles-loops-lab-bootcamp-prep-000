
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  

function theBeatlesPlay(musicians, instruments){
  var newMusicians= [];
  for(var i = 0; i<musicians.length; i++){   
  newMusicians.push(musicians[i] + " plays " + instruments[i]);
}
  return newMusicians;
  
}  

  const facts=["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(array){
  var newFacts = [];
  var i = 0;
  while(i < array.length){
    array[i]+= "!!!"
    i++;
  }
  return array;
}

function iLoveTheBeatles (n){
  var beatleLove = [];
  var i = 0;
  do{beatleLove.push("I love the Beatles!")
  i++
  }
  while(i<=15);

return beatleLove;
}




