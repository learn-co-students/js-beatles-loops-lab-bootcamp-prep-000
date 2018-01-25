function theBeatlesPlay(musicians,instruments){
  var array = []
  for(let i=0;i<musicians.length;i++){
    var string = musicians[i] + ' plays ' + instruments[i]
    array[i]=string
  }
  return array
}

function johnLennonFacts(facts){
  let i=0
  var newfacts = []
  while(i<facts.length){
    var string = facts[i]+'!!!'
    newfacts[i]=string
    i++
  }
  return newfacts
}

function iLoveTheBeatles(number){
  let i = number
  var beatles=[]
  do {
    beatles.push('I love the Beatles!')
    i++
  } while (i<15)
  return beatles
}