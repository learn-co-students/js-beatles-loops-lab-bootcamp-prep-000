// add solution here
function theBeatlesPlay(musician, instrument){
  var bar = []
  for(var i = 0; i < musician.length; i++){
    var concat = musician[i] + ' plays ' + instrument[i]
    bar.push(concat)
  }
  return bar
}

function johnLennonFacts(facts){
  var bar = []
  var i = 0;
  while(i < facts.length){
    var concat = facts[i] + '!!!'
    bar.push(concat)
    i++
  }
  return bar
}

function iLoveTheBeatles(num){
  var bar = []
  do{
    bar.push("I love the Beatles!")
    num++
  } while(num<15)
  return bar
}
