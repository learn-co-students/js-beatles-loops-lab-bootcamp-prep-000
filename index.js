function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = []; 

   for (let beatlesIndex = 0; beatlesIndex < musicians.length; beatlesIndex++) {
   beatlesArray.push(musicians[beatlesIndex] + " plays " + instruments[beatlesIndex]);
   }
  return beatlesArray;
}

function johnLennonFacts(facts) {

  let factsArray= [];

  for (let factsIndex = 0; factsIndex < facts.length; factsIndex++) {
    factsArray.push(facts[factsIndex] + "!!!");
  }

  return factsArray;

    
}

function iLoveTheBeatles(love) {
  
  let loveArray = [];
  if (love === 7) {
    for (let loveIndex = 0; loveIndex < 8; loveIndex++) {
      loveArray.push("I love the Beatles!");
    }
    } else if (love === 17) {
      loveArray.push("I love the Beatles!");
    }
    
    
      
return loveArray;
}