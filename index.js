// add solution here
function theBeatlesPlay(musicians, instruments){
  var all = []
  for (var i=0; i < musicians.length; i++){
    all.push(musicians[i] + " plays " + instruments[i])
}
return all
}

function johnLennonFacts(facts){
 const newFacts = [];
 
 let i = 0;
  while (i < facts.length){
     newFacts.push(facts[i] +"!!!");
        i++;
  }
return newFacts;
}

function iLoveTheBeatles(n){
    const heart = []

  do {
    heart.push('I love the Beatles!')
    n++
  } while (n < 15)

  return heart
}