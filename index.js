var musicians = 
["John", "Paul", "George", "Ringo"]

var instruments = 
["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

    function theBeatlesPlay(musicians, instruments) {
var newArr = []; 
for(var i =0; i < musicians.length; i++) { 
  newArr.push(musicians[i] + " plays " + instruments[i]);
} return newArr;
}

 function johnLennonFacts(facts) {
   var results = [];
   var count = 0;
   while (count < facts.length) {
     results.push(facts[count] + "!!!");
     count++;
   }
   return results;
 }

 
    function iLoveTheBeatles(num) {
var love = [];
do {love.push("I love the Beatles!");
num++;} while (num < 15);
return love;
}
