function theBeatlesPlay(musicians, instruments) {
  var yes = []
  for(var i = 0; i < musicians.length; i++) {
    var results = (`${musicians[i]} plays ${instruments[i]}`)
    yes.push(results)
    }
  return yes
}

/* var music = ["John", "Andy", "Bob"]
var instru = ["guitar", "violin", "banjo"]

theBeatlesPlay(music,instru)
*/

function johnLennonFacts(facts){
  var diff = []
  var i = 0
  while(i < facts.length){
    var gains = (`${facts[i]}!!!`)
    diff.push(gains)
    i++
  }
  return diff
}

function iLoveTheBeatles(number){
  var num = []
  do {
    var name = "I love the Beatles!"
    num.push(name)
    number++
  } while (parseInt(number) < 15);
  return num
}
