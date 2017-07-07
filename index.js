function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i<musicians.length;i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    array.push(`${musician} plays ${instrument}`)
  }//end for loop
  return array
}//end function

function johnLennonFacts(facts) {
  var i  = 0
  while (i <facts.length) {
    facts[i]  = facts[i] + "!!!" //type doesn't matter
    ++i
  }//end while
  return facts
}//end function

function iLoveTheBeatles(number){
  var array = [];
  do {array.push("I love the Beatles!")
  ++number
} while (number<15);
return array
}
