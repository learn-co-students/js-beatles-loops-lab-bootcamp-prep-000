function theBeatlesPlay(musicians, instruments){
   var array = [];
   for (var i=0; i < musicians.length; i ++) {
     array.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return array;
 }

 var johnLennonFacts = function(facts) {
   var newArray = [];
   let i = 0;
   while ( i < facts.length) {
     var string = facts[i] + "!!!";
     newArray.push(string);
     i++;
       }
   return newArray
 }

 function iLoveTheBeatles(n){
   var array = [];
   do {
     array.push('I love the Beatles!');
     n++;
   }
   while(n < 15);
   return array;
 }
