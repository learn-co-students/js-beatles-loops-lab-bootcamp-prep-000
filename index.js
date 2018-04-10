function theBeatlesPlay(musicians, instruments) {
  // const instrumentation = []
  var instrumentation = [];
  for (let i = 0; i < musicians.length; i++) {
    // (`musicians[i] + plays + instruments[i]`);
    instrumentation.push(musicians[i] + " plays " + instruments[i]);
  }
  return instrumentation;
}

function johnLennonFacts(facts) {
  //const ahhh = []
  //let i = 0;
  var i = 0;
  var ahhh = [];
  while (i < facts.length) {
    //`ahhh.push(`${facts[i]}!!!`);
    ahhh.push(facts[i] + "!!!");
    i++;
    }
    return ahhh;
}

function iLoveTheBeatles(number) {
  var theBeatles = [];
  do {
    theBeatles.push("I love the Beatles!");
  } while (++number < 15);
  return theBeatles;
}