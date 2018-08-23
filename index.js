function theBeatlesPlay(musicians, instruments) {
   var empty = []; 
   {
 for (var i = 0; i < musicians.length; i++)
 empty.push(musicians[i] + " plays " + instruments[i]);
 }
return empty }


function johnLennonFacts(facts) {
  var empty = [];
  {
for (var i = 0; i < facts.length; i++)
  empty.push(facts[i] + "!!!");
  }
return empty}



function iLoveTheBeatles(n) {
  var empty = [];
do {
  empty.push("I love the Beatles!"); 
    n++;}
  while (n<15);
return empty;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  var i = 0;
  do {
    newArr.push("I love the Beatles!");
    i++;
    n--;
    if (n > 15) {
      return newArr
    }
  } while(n !== -1);
  return newArr;
}

