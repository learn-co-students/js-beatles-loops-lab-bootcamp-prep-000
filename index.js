function theBeatlesPlay(musicians, instruments){
  var beatles = []
  for (let i=0; i<4; i = i + 1){
    var musician = musicians[i]
    var instrument = instruments[i]
    var plays = musician + " plays " + instrument
    console.log("musician " + i + " is " + musician);
    beatles.push(plays);
  }
return beatles }

function johnLennonFacts(facts) {
  var radfacts = []
while(facts.length > 0) {
  var fact = facts.shift();
  var radfact = fact + "!!!";
  radfacts.push(radfact)
}
return radfacts }

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++ }
    while  ( n < 15);
    return love;
  }
