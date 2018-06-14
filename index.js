
// 1) Beatles Loops returns an array of strings containing what instruments eachmusician plays:
function theBeatlesPlay(arrayMusic,arrayInstrument){
  var newArray=[]
  for ( var i=0; i<arrayMusic.length ; i++ ) {
    newArray.push(`${arrayMusic[i]} plays ${arrayInstrument[i]}`)
  }
  return newArray
}

// 2) Beatles Loops johnLennonFacts returns an array of strings with exclamationpoints:
function johnLennonFacts(facts){
  var newArray=[]
  var exclMark = '!!!'
  var i = facts.length
  console.log(facts.length)
  while (facts.length > 0) {
    // console.log(i)  
    newArray.push( facts[0].concat(exclMark) )//push adds it to the end.
    // i--
    facts.shift() //shift removes the first element
    console.log(facts.length)
  }
  console.log(newArray)
  return newArray  
  
}

// 3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
// 4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:
function iLoveTheBeatles(number){
  var newArray=[]
  var i=0
  do {
    newArray.push('I love the Beatles!')
    number++
  } while (number<15)  
  return newArray
}
