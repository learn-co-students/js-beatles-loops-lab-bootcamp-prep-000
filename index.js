function theBeatlesPlay(musicians, instruments) {
  var Beatles = []

   for (let i = 0; i < musicians.length; i++) {
    var member = musicians[i] + " plays " + instruments[i]
    Beatles.push(member)
  }
  return Beatles
}

 function johnLennonFacts(facts) {
  var factt = []
  let i = 0

   while(i < facts.length) {
    var lfactt = facts[i] + "!!!"
    factt.push(lfactt)
    i++
  }
  return factt
}

 function iLoveTheBeatles(number) {
  var abc = []

   do {
    abc.push("I love the Beatles!")
    number += 1
  } while(number < 15)
  return abc
} 
