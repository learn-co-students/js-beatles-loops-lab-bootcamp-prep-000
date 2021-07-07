// add solution here

function theBeatlesPlay(musicians, instruments) {
 var hollowray = [];
  for (var i = 0; i < 4; i++)
  {
    if (i === 0) { 
        var stringx = `${musicians[0]} plays ${instruments[0]}`;
        hollowray.push(stringx); 
   } else {
        var stringy = `${musicians[i]} plays ${instruments[i]}`;
        hollowray.push(stringy);
    }
  }
  return hollowray;
}


   
function johnLennonFacts(facts) {
    var crzyboutlennon = [];
    var n = 0;
    while (n < facts.length) {
    var string = `${facts[n]}!!!`;
   crzyboutlennon.push(string);
    n++;
  }
return crzyboutlennon;
}
  
  
  
  
  function iLoveTheBeatles(n) {
    var Hollowarray = [];
    do {Hollowarray.push("I love the Beatles!"); n++;}
    while (n < 15);
    return Hollowarray;
  }
  
  