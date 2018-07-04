function theBeatlesPlay(musicians, instruments) {
  var facts = []
  for (let i=0; i<4;i++) {
    facts.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return facts;
}

function johnLennonFacts (facts){
  var excitedArray =[]
 var i = 0
 while (i<facts.length){
  excitedArray.push (`${facts[i]}!!!`)
   i++;
 }
  return excitedArray;
}


function iLoveTheBeatles(n){
 var madStrings = []
 let i=0
  if (n<15){
    do {
    madStrings.push ("I love the Beatles!");
    i++;
    i>n;
    } while (i<=n && i<15);
    return madStrings;
    }
    else {
      return "I love the Beatles!"
    }
}