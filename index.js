
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}



 
function johnLennonFacts(facts) { 
var shoutFacts = [];  
var i = 0;  
while(i < facts.length) { 
shoutFacts.push(facts[i] + '!!!') 
i++;  
} 
return shoutFacts 
}


function iLoveTheBeatles(number) {
  var array = [];
  do {array.push("I love the Beatles!");
  number++
    } while (number < 15);
    return array
}