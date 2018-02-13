function theBeatlesPlay (musicians,instruments) {
var plays = [];
for (var i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + " plays " + instruments[i]);
}
return plays;
}
function johnLennonFacts (facts) {
  let i = 0;
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return love;
}
