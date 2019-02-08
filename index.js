// add solution here
function theBeatlesPlay(musicians, instruments){
  let beatles = [];
  for(let i = 0; i < musicians.length; i++){
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(factsArray){
  let facts = []
  let i = 0
  while (i < factsArray.length){
    facts.push(factsArray[i] + '!!!')
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  let beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return beatleLove
}
