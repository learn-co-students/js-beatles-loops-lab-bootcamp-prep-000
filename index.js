function theBeatlesPlay(musicians, instruments) {
  var MusiciansInstruments =[];
  for (var i=0; i < musicians.length; i++ ){
    MusiciansInstruments[i] = musicians[i] + " plays " + instruments[i]
  }
  return MusiciansInstruments
}

function johnLennonFacts(facts) {
  var loudarray =[];
  var n = 0;
  while(n < facts.length){
    loudarray[n] = facts[n] + "!!!"
    n++
  }
  return loudarray
}

function iLoveTheBeatles(number) {
  var beatArray =[];
  do {
    beatArray.push("I love the Beatles!");
    number++
  } while(number < 15);
  return beatArray
}
