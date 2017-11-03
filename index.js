function theBeatlesPlay(musicians, instruments){
  var band = [];
  for (let i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + ' plays ' + instruments[i])
  }
  return band;
}
function johnLennonFacts(facts) {
  var array = []

  let i = 0
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++ //must include to avoid inifinite loop!!!
  }
  return array
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
