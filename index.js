// add solution here
function theBeatlesPlay(musician,instrument){
  var beatles = [];
  for (var i = 0; i < musician.length; i++){
    beatles.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}