function theBeatlesPlay (musicians, instruments) { 
const array = [];  
  for (var i= 0; i < musicians.length; i++ ) 
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  
  return array;
}

function johnLennonFacts (facts) 
{var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i]+'!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles () {
const array = [];
var text = ""
var i = 0;

do {
    text += "<br>I Love the Beatles! " + i;
    i++;
}
while (i < 8); 

}