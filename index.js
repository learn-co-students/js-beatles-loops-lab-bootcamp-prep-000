// add solution here
// const lennon facts


function theBeatlesPlay(musicians, instruments) {
  const music = []
    for(let x = 0; x < musicians.length; x++ ) {
    music.push(`${musicians[x]} plays ${instruments[x]}`)
}
return music
}

function johnLennonFacts(john){
 const facts = []
  let x = 0
  while (x < john.length) {
    facts.push(`${john[x]}!!!`)
    x++
  }
  return facts
}

function iLoveTheBeatles(num){
var x = []
do {
  x.push("I love the Beatles!")
num++
}
while (num < 15)
return x
}