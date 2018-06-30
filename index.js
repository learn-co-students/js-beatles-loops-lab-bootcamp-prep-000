function theBeatlesPlay(musicians, instruments) {
  var allmusicians = [];
for (var i=0; i< musicians.length;i++ ) {
allmusicians.push(musicians[i] + " plays " + instruments [i]);
}
return allmusicians;
}
function johnLennonFacts(array) {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ] ;
  var i = 0;
   while (i < array.length) {
     array[i] = array[i] + "!!!";
    i++;
  }
   return array;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
        love.push("I love the Beatles!");
        number++;
    } while (number < 15);
   
    return love;
}


