function theBeatlesPlay(musicians, instruments){
  var band = [];
  for (let i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + " plays " + instruments[i])
  }
  return band
}

function johnLennonFacts(facts) {
  let number = 0
  while (number < facts.length){
    facts[number] = facts[number] + "!!!"
    number = number + 1
  }
  return facts
}

function iLoveTheBeatles(parameter){
  var emotion = [];
  do{
    emotion.push("I love the Beatles!");
    parameter++
    }
    while (parameter < 15);
    return emotion
}
