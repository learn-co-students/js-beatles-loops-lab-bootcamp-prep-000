function theBeatlesPlay(musicians, instruments) {
  var beatles = new Array();
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var countdown = facts.length
  while (countdown > 0) {
    facts[Math.abs(countdown-facts.length)] = facts[Math.abs(countdown-facts.length)] + "!!!"
    countdown--
  }
  return facts
}

function iLoveTheBeatles(number) {
  var yay = new Array();
  do {
    yay.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return yay
}
