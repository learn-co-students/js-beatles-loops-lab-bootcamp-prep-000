//FOR

var theBeatlesPlay = function (musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i<musicians.length; i++) {
  emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return(emptyArray);
  };

theBeatlesPlay(musicians, instruments);

//WHILE

function johnLennonFacts(facts) {
   /* const facts = [
     "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice" ]; */

  var newFacts = [];
  var x = 0;
      while(x<facts.length) {
        newFacts.push(`${facts[x]}!!!`);
        x++;
      }
      return (newFacts);
    };


//DO-WHILE
function iLoveTheBeatles(n) {
  var myArray = [];
    do {
      myArray.push("I love the Beatles!");
      n++;
  } while (n < 15);
    return myArray;
}
