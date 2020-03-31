var music = []
var musicians = ["justin", "carl", "chester"]
var instruments = ["guitar", "flute", "piano"]
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]



var theBeatlesPlay = function(musicians, instruments){
  for (let i = 0; i < musicians.length; i++){
      music.push(musicians[i] + " plays " + instruments[i])
  }
    return music
}



var johnLennonFacts = function(facts){
  let i = 0
  let array = []
  while(i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}


var iLoveTheBeatles = function(num){
  const love = []
  do {
    love.push("I love the Beatles!")
    num++
  } while(num < 15)
  return love
}


// console.log(theBeatlesPlay(musicians, instruments))
// console.log(johnLennonFacts(facts))
console.log(iLoveTheBeatles(3))
