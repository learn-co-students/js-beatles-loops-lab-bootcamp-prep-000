function theBeatlesPlay(musicians, instruments){
  var i = []
  for (var n = 0; n < musicians.length; n++) {
  var  string = musicians[n]+' plays ' + instruments[n]
  i.push(string)
    
  }
 return i 
}


function johnLennonFacts (facts) {
   var i = 0 
   var n = []
   while (i < facts.length){
   var string = facts[i]+'!!!'
     n.push(string)
     i++
  }
  return n
}

function iLoveTheBeatles(num){
  var n = [];
  var i = num;
  do {
    n.push('I love the Beatles!');
    num++;
    console.log(n)
  }while (num < 15);
 return n        
}