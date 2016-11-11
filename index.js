function theBeatlesPlay(musicians, instruments) {
    var newArray= []
  for (let i=0; i<musicians.length; i++)
  {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}
function johnLennonFacts(facts) {
  var i=0
  var exclamationArray=[]
  while (i<facts.length) {
    exclamationArray.push(facts[i] + "!!!")
    i=i+1
  }
  return exclamationArray
}
function iLoveTheBeatles(n) {
  var love=[]
  do {love.push("I love the Beatles!");
     n=n+1}
     while(n<15)
     return love
}
