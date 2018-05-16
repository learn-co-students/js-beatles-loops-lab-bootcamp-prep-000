function theBeatlesPlay(artists, instruments){
  
  let musicians = [];
  
  for(let index = 0;index < artists.length;index++){
    let str = `${artists[index]} plays ${instruments[index]}`;
  
      musicians.push(str)
    }
  return musicians;
}

function johnLennonFacts(facts){
  let index = facts.length-1;
  while (index >= 0){
    facts[index] += "!!!";
    index--;
  } return facts;
}

function iLoveTheBeatles(num){
  let love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}