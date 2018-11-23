
musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
 function johnLennonFacts(array) {
 var result = []; 
 var i = 0; 
  while(i < array.length) {
     result.push(array[i] + '!!!')
     i++; 
   }
   return result; 
 }
 function iLoveTheBeatles(n){
   var array = [] 
   do { array.push(`I love the Beatles!`);
  n++ } while (n < 15); 
return array;
}
