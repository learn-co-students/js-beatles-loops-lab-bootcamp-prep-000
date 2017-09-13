function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians
}

function johnLennonFacts(array) {
  let i = 0
  const newArray = []
  while (i < array.length) {
    newArray.push(`${array[i] + "!!!"}`)
    i++
   }
   return newArray
}

 function iLoveTheBeatles(num) {
     var love = [];
     do {
         love.push("I love the Beatles!");
         num++;
     } while (num < 15);

     return love;
 }
