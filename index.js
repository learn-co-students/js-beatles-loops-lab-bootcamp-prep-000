function theBeatlesPlay(musicians, instruments) {
  let music = []
  for (let i = 0; i < instruments.length; i++) {
  music.push(musicians[i] + " plays " + instruments[i])
  }
  return music
}

function johnLennonFacts(array) {
  let facts = []
  let i = 0
while (i < array.length) {
 facts.push(array[i] + '!!!')
 i++
}
 return facts
}


function iLoveTheBeatles(n) {
  let love = []


do {
   love.push("I love the Beatles!" )
  n++
  
  } while (n < 15) 
  
return love
}

