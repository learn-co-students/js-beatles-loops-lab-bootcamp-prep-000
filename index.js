function theBeatlesPlay(music, instruments){
  var array = []
  var plays = " plays "
  for (var i = 0; i < music.length; i++) {
    array.push(music[i] + plays + instruments[i])
  }
  return array
}

function johnLennonFacts(array){
  var i=array.length-1
  var facts=[]
  var count=0

  while (i>=0) {
    facts.push(array[count]+"!!!")
    i--
    count++
  }

  return facts
}

function iLoveTheBeatles(num){
  var array=[]

  do {
    array.push("I love the Beatles!")
    num++
  } while (num<15);

  return array
}
