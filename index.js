function theBeatlesPlay(musicians, instruments){
  var beatlesPlay = new Array();
  for (var i=0; i<4; i++){
  beatlesPlay[i] = `${musicians[i]} plays ${instruments[i]}`
  }
return beatlesPlay;
}

function johnLennonFacts(facts){
let beatles = 0
  while (beatles<facts.length){
    facts[beatles]=`${facts[beatles]}!!!`
    beatles++
  }
  return facts
}

function iLoveTheBeatles(number){
  var love = [];
  do {
    love.push(`I love the Beatles!`)
    number++
  }while (number < 15);
  return love;
}
