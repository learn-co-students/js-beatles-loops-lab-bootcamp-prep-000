function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
     for (let i = 0; i < musicians.length; i++) {
       emptyArray.push(musicians[i] + " plays " + instruments[i]);
     }
return emptyArray
}

function johnLennonFacts(array) {
   var result= [];
   let i = 0;
   while(i < array.length) {
     result.push(array[i] + '!!!')
     i++;
   }
   return result;
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0;
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
   return array;
 }
