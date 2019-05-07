function theBeatlesPlay(musicians,instruments){
var array = [musicians[0] + " plays " +instruments[0]]; 
  for ( var i = 1; i < 4; i++){
    if (i < 0){
    array.push(musicians[0] +" plays "+ instruments[0]) 
    }else{ 
    array.push(musicians[i] +" plays "+ instruments[i])
  }
    }
    return array
}

 
function johnLennonFacts(facts){
 let x = 0;
 var value = [];
 while (x < facts.length) {
  value.push(facts[x] + "!!!"); x++;
}
return value;
}

function iLoveTheBeatles(n){
  var array = []
 
do {
  array.push("I love the Beatles!"); n++
} while (n < 15); 

  return array
}

