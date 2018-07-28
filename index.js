// add solution here
function theBeatlesPlay(musicians, instruments) { 
var a= [  ];
for (let i=0; i<musicians.length; i++) {
  
  a.push(musicians[i]+ " plays " + instruments[i] )
}
  return a;
}

function johnLennonFacts(facts){
  var a = [ ];
  var i = 0;
  while (facts.length > a.length) { 
    a.push(facts[i] + '!!!' );
    i++;
  }
  return a;
}

function iLoveTheBeatles(n){
  var a = [];
  do {a.push("I love the Beatles!");
  n++;
  }  while
    (n<15);
    
    return a;
  
}