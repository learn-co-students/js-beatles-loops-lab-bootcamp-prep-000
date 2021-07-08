// add solution here

var musiciansArray = ["John Lennon", "Paul McCartney", "George Harrison", " Ringo Starr"]

var instrumentsArray = ["Guitar", "Bass Guitar", "Lear Guitar", "Drums" ]

function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array = []
  
  for(let i = 0; i < musiciansArray.length; i++) {
    
      array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
      
  }
  
  return array
  
}

function johnLennonFacts(facts) {
  var n = 0
  while(n < facts.length) {
    facts[n] = facts[n] + '!!!'
    n++
  }
  return facts
}

johnLennonFacts(["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"])
  
  function iLoveTheBeatles(number) {
    var array = [ ]
    do{
    number++
    array.push("I love the Beatles!")
    } while(number < 15)
    
    return array
    
  }
  
  iLoveTheBeatles(16)
  