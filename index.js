const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
 var newArray = [];
  for (let i = 0; i < 4; i++)
  { newArray.push(musicians[i] + " plays " + instruments[i]);
} 
    return newArray;
 }

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function johnLennonFacts(facts)
{ 

  var eFacts = [];
  
  let i = 0;
     while (i < facts.length){
     
    eFacts.push(facts[i] + "!!!"); 
    i++;
      
     } return eFacts;
} 

function iLoveTheBeatles(n){
  
  var loveArray = [];

 do {
   loveArray.push("I love the Beatles!"); 
   n++;
 }
while (n < 15);

return loveArray;}