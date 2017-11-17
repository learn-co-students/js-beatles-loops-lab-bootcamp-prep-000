function theBeatlesPlay(musicians, instruments) {
var empty = [];

for (var i=0; i < musicians.length; i++) {
 var str = musicians[i] + ' plays ' + instruments[i] ;
 empty.push(str)
}
return empty
}

function johnLennonFacts(facts) {
 var counter = 0;
 while (counter < facts.length) {
   facts[counter]+= '!!!';
   counter++
 }
 return facts ;
 }

 function iLoveTheBeatles(number){
   var empty = [];
   do {
     empty.push('I love the Beatles!');
     number++
   }
   while (number < 15)
   return empty
 }
