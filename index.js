  function theBeatlesPlay(musicians, instruments) {
  
  var emptyarray = [];
  
  var arraylength = musicians.length;
    
    for (var i = 0; i < arraylength; i++)
  
    {emptyarray.push(musicians[i] + " plays " + instruments[i]);
    
}

  return emptyarray;
  
}

function johnLennonFacts (facts) {
  var empty = [];
var i = 0;
  while (i < facts.length) { 
    empty.push(`${facts[i]}!!!`);
   
    i++;
  }
   
  return empty; 

}

function iLoveTheBeatles(n) {
  
  var vacantarray = [];
    
   do {
      vacantarray.push("I love the Beatles!");
    n++;
  }
    while (n < 15);
    
    return vacantarray;
}