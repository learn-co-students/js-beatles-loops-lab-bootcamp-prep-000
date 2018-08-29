// add solution here
function theBeatlesPlay(musicians, instruments) {
     var newArray = [];
     for (let i=0; i < musicians.length; i++) {
       newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i=0;
  while (i < facts.length) {
   facts[i]+="!!!"
   i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array=["I love the Beatles!",...array]
    n++;
  }
  while (n < 15);
 return array   
}