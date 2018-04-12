const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

const number = 0;

function theBeatlesPlay(musicians, instruments) {
  
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
     array.push(musicians[i] + " plays " + instruments[i]);
     
    }
 
 return array;
 
}

function johnLennonFacts(facts) {
  
  var exclamationFacts = [];
  
  var i = 0;
  
  while (i < facts.length) {
    
    exclamationFacts.push(facts[i] + "!!!" );
    
    i++ ; }  
  
  return exclamationFacts;
  
}

function iLoveTheBeatles(number){
  
    var array = [];
  
    var i = number;
  
   do {
     array.push("I love the Beatles!");
     i++;
  }
  
while (i < 15);
return array; 

}