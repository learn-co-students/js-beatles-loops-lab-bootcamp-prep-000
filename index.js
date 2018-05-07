function theBeatlesPlay(musicians,instruments) {
  var sentences = []
  var sentence = ''
  
  for (var i=0;i<musicians.length;i++) {
    sentence=musicians[i]+ " plays " + instruments[i]
    sentences.push(sentence)
  }
  console.log(sentences)
  return sentences
}

function johnLennonFacts(facts) {
  var x = 0
  var sentences = []
  while (x<facts.length) {
    console.log(facts[x]+"!!!")
    sentences.push(facts[x]+"!!!")
    x+=1
  }
  return sentences
}

function iLoveTheBeatles(num) {
  var emptya = []
  do { emptya.push("I love the Beatles!")
    num+=1
  } while (num<15)
  console.log(emptya)
  return emptya
}