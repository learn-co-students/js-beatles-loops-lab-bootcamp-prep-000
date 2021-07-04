var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"] 

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < 4; i++)
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  return array
} 

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice", "foo", "bar"]; 

function johnLennonFacts(facts) {
   var array = []
   for (let i = 0; i < facts.length; i++) {
  array.push(`${facts[i]}!!!`) }
  return array
}

function iLoveTheBeatles(n) {
   var array = []; 
   do {
    n = n + 1;  
   array.push("I love the Beatles!"); } 
   while (n < 15);  
   if (n > 15) array.slice(0); 
   return array; 
   }  