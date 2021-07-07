// add solution here
function theBeatlesPlay(musicians,instruments){
 var allmusicians=[]
   for (let i=0; i<musicians.length; i++){
   allmusicians.push(musicians[i] + " plays " + instruments[i]);
}
return allmusicians
}

  
function johnLennonFacts(facts){
  let everyFact=[]
  let i=0
  while (i<facts.length){
    everyFact.push(`${facts[i]}!!!`); i++
  }
  return everyFact;
}

function iLoveTheBeatles(num) {
    var theBeatles = [];
    do {
        theBeatles.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return theBeatles;
}
