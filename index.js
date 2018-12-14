function theBeatlesPlay(musicians,instruments) {
  var letsmakemusic=[]
  var str1,str2,i
  for (i=0;i<musicians.length;i++) {
    str1=musicians[i]
    str2=instruments[i]
    letsmakemusic[i]=str1.concat(" plays ",str2)
  }
  return letsmakemusic
}

function johnLennonFacts(facts) {
  var str,i=0
  while (i<facts.length) {
    str=facts[i]
    str=str.concat("!!!")
    facts[i]=str
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array=[]
  do {
    array.push("I love the Beatles!")
    num++
  } while (num<15)
  return array
}