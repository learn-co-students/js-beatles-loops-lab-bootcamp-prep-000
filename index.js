function theBeatlesPlay(musicians, instruments){
  var music = [];
  for(let i = 0; i < musicians.length; i++){
    music.push(musicians[i] + " plays " + instruments[i]);
  }
  return music
}

function johnLennonFacts(facts){
  var excitedFacts = [];
  var count = 0;
  while(count < facts.length){
    excitedFacts.push(facts[count] + "!!!");
    count++
  }
  return excitedFacts
}

function iLoveTheBeatles(n){
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++
  } while(n < 15);
  return love
}
