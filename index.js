var musicians = ["John Lennon","Paul McCartney","George Harrison","Ringo Starr"]
var instruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"]

function theBeatlesPlay(musicians,instruments){
  var answer = []
  for(var i=0;i<musicians.length;i++){
    answer.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return answer
}

function johnLennonFacts(facts){
  var excitingFacts = [];
  for(var i=0;i<facts.length;i++){
    excitingFacts.push(`${facts[i]}!!!`)
  }
  return excitingFacts
}

function iLoveTheBeatles(integer){
  var love = []
  do{
    love.push("I love the Beatles!")
    integer++
  }
  while(integer < 15)
  return love
  }
