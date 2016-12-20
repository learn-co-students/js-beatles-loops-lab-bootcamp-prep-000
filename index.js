function theBeatlesPlay(musicians, instruments){
  var music = [];
  for(var i=0; i < musicians.length;i++){
    var facts = musicians[i] + " plays " + instruments[i] 
    music.push(facts)
  }
  return music
}

function johnLennonFacts(facts){
  var strings = [];
  var i = 0;
  while(i < facts.length){
    strings.push(facts[i] + "!!!")
    i++
  }
  return strings
}

function iLoveTheBeatles(number){
  var love = [];
  do{
    love.push("I love the Beatles!")
    number++
  }while(number < 15)
  return love
}