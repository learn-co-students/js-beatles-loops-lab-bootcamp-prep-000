// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatles = []
  for (let i=0; i < musicians.length; i++) {
    beatles.push(musicians[i]+ ' plays '+instruments[i])
  }
  return beatles
}
function johnLennonFacts(facts) {
  let n = 0
  let newArray = []
  while(n < facts.length) { 
    console.log(facts[n])
     newArray.push(facts[n] + "!!!")
      n++;
}
  return newArray
}
function iLoveTheBeatles() {
  let array1 = []
  do { array1.shift('I love the Beatles!') }
  while (7 <= array1.length <= 15)
  return array1
} 
