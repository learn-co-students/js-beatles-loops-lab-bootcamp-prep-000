// add solution here
function theBeatlesPlay(musicians, instruments) {
  var strings = []
  for (var i = 0; i < 4; i++) {
    var sentance = `${musicians[i]} plays ${instruments[i]}`
    strings.push(sentance)
  }
  return strings
}

function johnLennonFacts(facts) {
  var newfacts = []
  let countdown = 0
  while (countdown < facts.length) {
    newfacts.push(`${facts[countdown]}!!!`)
    countdown++
  }
  return newfacts
}

function iLoveTheBeatles(number) {
  var love = []
  var i = number
  function incrementVariable() {
    i = i + 1
  }

  do {
    love.push(`I love the Beatles!`)
    incrementVariable()
  }
  while (i < 15)
  return love
}
