const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
   var array = [];
   for (var i = 0; i < musicians.length; i++){
      array[i] = musicians[i] + ' plays ' + instruments[i];
   }
   return array;
}

function johnLennonFacts(fact){
   var marks = "!!!";
   var array = [];
   for (var i = 0; i < fact.length; i++){
      array[i] = fact[i] + marks;
   }
   return array;
}

function iLoveTheBeatles(num){
   var array = [];
   do{
      array.push(`I love the Beatles!`);
      num--;
   }while(num >=0 && num<15);
   return array;
}

var matchmusinst = theBeatlesPlay(musicians, instruments);
var arraymarks = johnLennonFacts(facts);
var arraylovebeatles = iLoveTheBeatles(17);
console.log(matchmusinst);
console.log(arraymarks);
console.log(arraylovebeatles);
