const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay (musicians,instruments) {
  var beatle = []
  for (var i=0;i<musicians.length; i++) {
    beatle.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatle
}
facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ]
function johnLennonFacts(facts) {
  var i = 0
  var exclamation = []
  while(i<facts.length) {
    exclamation.push(`${facts[i]}!!!`)
    i ++
  }
  return exclamation
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}