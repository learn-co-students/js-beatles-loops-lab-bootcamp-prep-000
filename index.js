function theBeatlesPlay (musicians, instruments) {
  var band = []
    for(var i = 0; i <= musicians.length-1; i++){
      band.push(musicians[i] + " plays " + instruments[i]);
    }
  return band
}
function johnLennonFacts(f) {
  var i = 0
  var facts = []
  while(i < f.length) {
    facts.push(f[i] + "!!!"); i++
  }
  return facts
}

function iLoveTheBeatles (i) {
  var fan = []
  do {
    fan.push('I love the Beatles!');
    i++
  } while (i < 15)
  return fan
}
