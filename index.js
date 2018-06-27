function theBeatlesPlay(musicians, instruments) {
  var allmusicians = []
  for ( var i = 0; i < musicians.length; i++){
    allmusicians.push(musicians[i] + " plays " + instruments[i])

  }
  return allmusicians;


}
function johnLennonFacts(facts) {

  const Facts1 = []
   var i = 0
    while (i < facts.length) {
        Facts1.push(facts[i] +"!!!")
        i++
   }
   return Facts1
}

function iLoveTheBeatles(num) {
   var love1 = []
    do {
        love1.push("I love the Beatles!")
        num++
    } while (num < 15)

    return love1
}
