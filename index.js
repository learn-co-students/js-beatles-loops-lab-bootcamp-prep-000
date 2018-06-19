function theBeatlesPlay(musicians,instruments){
var code = [];
  
  for (var i = 1; i <= 4; i++){
    return [`${musicians[i-1]} plays ${instruments[i-1]}`, `${musicians[i]} plays ${instruments[i]}`, `${musicians[i+1]} plays ${instruments[i+1]}`, `${musicians[i+2]} plays ${instruments[i+2]}`]
  }
  
}


function johnLennonFacts(array){
     var newFacts = [];
    var i = 0;
    while (i < array.length) {
        newFacts.push(array[i] +"!!!");
        i++;
    }
    
    return newFacts;
}

function iLoveTheBeatles(num){
 var result= [];
  do {
  result.push("I love the Beatles!");
   num++;
} while (num < 15);

return result;
}