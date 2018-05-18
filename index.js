var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var artist; 
  var statements = [];
  for (var i = 0;  i< musicians.length; i ++) {
  
  artist=musicians[i] + ' plays ' + instruments[i];
  statements [i] = artist;
}
return statements;


}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts) {
  
  var i=0;
  var exclaimedFacts = [];
  while (facts.length > i){
    exclaimedFacts.push(`${facts[i]}` + '!!!');
i++;
}
return exclaimedFacts;
} 

 function iLoveTheBeatles(n) {
var strings=[];
do{
n++;
strings.push('I love the Beatles!');
} while (n < 15);
return strings;
}   
    
    