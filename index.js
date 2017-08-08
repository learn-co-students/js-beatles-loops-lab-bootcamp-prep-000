
function theBeatlesPlay(musicians,instruments){
  var new_array = []
  for(var i=0; i < musicians.length; i++ ){
    new_array.push(musicians[i] + " plays " + instruments[i])
  }
  return new_array
}

function johnLennonFacts(facts){
  var john_fact = []
  var f = 0
  while(f < facts.length){
    john_fact.push(facts[f] + "!!!")
    f++
  }
  return john_fact
}

function iLoveTheBeatles(number) {
  var final_array = []
  do {
    final_array.push("I love the Beatles!")
    number ++
  } while (number < 15)
  return final_array
}
