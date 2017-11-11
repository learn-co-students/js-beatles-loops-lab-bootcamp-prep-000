function theBeatlesPlay(musicians, instruments){
  var newArray = [];

  for(var i=0;i < musicians.length; i++){
        newArray.push(musicians[i] + " plays " + instruments[i]);
    }
    return newArray;
}

  function johnLennonFacts(facts) {
   var i = 0;   //creates counter variable
   var newFacts = [];   //creates new array of facts (for after the !!! is added?)

   while (facts.length > i) {   //while facts length is greater than 0, or while a fact already exists
     newFacts.push(facts[i] + "!!!");   //going to push !!! to the end of each fact, creating a new array
     i++;   //going to push that !!! to the end of each fact, the i iterates over the loop of facts
   }
   return newFacts;   //returns the new array
 }

 function iLoveTheBeatles(number){    //function takes a number as an argument
   var emptyArray = [];
   var text = "I love the Beatles!";

   do {
     emptyArray.push(text);
     number++;
   }
while (number < 15);

return emptyArray;
}
