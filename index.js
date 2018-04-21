function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(let i=0; i<musicians.length; i++) {
    array.push(musicians[i] +" plays "+instruments[i])
  }
  return array;
}

function johnLennonFacts(array){
  var i=0
  var facts = []
  while(i<array.length) {
    facts[i] = array[i] +"!!!"
  i++}
  return facts
}

function iLoveTheBeatles(num) {
  var array =[]
  do {
  array.push("I love the Beatles!")
  num++
  } while (num<15)
  return array
}

