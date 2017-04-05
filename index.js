function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {

  var  newString = musicians[i] + " " + "plays " + instruments[i];
    array.push(newString);
  }
    return array;
  }

  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  function johnLennonFacts(facts){
     var newFacts = [];
     var i = 0
     while (i < facts.length) {
       newFacts.push(facts[i] + "!!!")
       i++;
     }
     return newFacts;
   }

   function iLoveTheBeatles(n) {
     var array = [];
     do {array.push("I love the Beatles!") && n++ 
   } while (n < 15);
     return array;
   }
