function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < 4; ++i ) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
  }

function johnLennonFacts(facts) {
  var array = []
  let i = 0
  while (facts.length > i ) {
    array.push(`${facts[i]}` + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = new Array();
  do {
    (array.push("I love the Beatles!"));
    number++
  }  while (number < 15);
  return array
}
