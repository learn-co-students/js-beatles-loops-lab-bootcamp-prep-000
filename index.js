function theBeatlesPlay(musicians, instruments) {
   var beatlesArray = [];
   for (var i = 0; i < musicians.length; i++) {
  beatlesArray.push(musicians[i] + " plays " + instruments[i]);
   }
  return beatlesArray;
};

/*function johnLennonFacts(lennonFacts) {
  for(var i = 0; i < lennonFacts.length; i ++) {
    lennonFacts[i] = lennonFacts[i] + "!!!";
     }

   return lennonFacts

};
*/

johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]);


function johnLennonFacts(lennonFacts) {
  var i = 0;
  var newArray = [];
  while (i < lennonFacts.length) {
     newArray.push( lennonFacts[i] + '!!!');
     i++;

}
   return newArray;
};


function iLoveTheBeatles (num) {
   var beatlesLover = [];
      do {
        beatlesLover.push("I love the Beatles!");
        num++;

      } while (num < 15) {

        return beatlesLover;
      }


};
