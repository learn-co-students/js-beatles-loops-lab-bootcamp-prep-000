// add solution here

function theBeatlesPlay(musicians, instruments) {
  console.log(`hi`)
  var theBeatles = []
  for(var i = 0; i <  musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
} 

  
function johnLennonFacts(facts) {
  var music = []
  var i = 0 
  while(i < facts.length) {
    music.push(`${facts[i]}!!!`)
    i++
  }
  return music
}



function iLoveTheBeatles(number) {
  var love = []
  
  do { 
    love.push("I love the Beatles!")
    number++
  } 
  while (number < 15)
  return love
}  
  



