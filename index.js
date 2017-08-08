function theBeatlesPlay(musicians, instruments) {
  var array = [];
for (var i = 3; i > -1; i -= 1) {
   array.unshift(`${musicians[i]} plays ${instruments[i]}`)
  }  return array
}

var facts = []
function johnLennonFacts(facts) {
      var i = 0;
    while (i < facts.length) {
        facts[i] = (facts[i] +"!!!");
        i++;
    }
    return facts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
