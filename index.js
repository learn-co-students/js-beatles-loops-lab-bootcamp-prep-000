// add solution here
    
function theBeatlesPlay(musicians, instruments){
    var array=[]
    for (let i=0; i< musicians.length ;i++){

      array.push(`${musicians[i]} plays ${instruments[i]}`)
      //console.log(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array
  }

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

console.log(theBeatlesPlay (musicians, instruments))

// second function
function johnLennonFacts(facts) {
      var num=0
      var johnLennonFacts=[]
      
      while (num < facts.length){
        johnLennonFacts.push(`${facts[num]}!!!`)
        num+=1
      }
      return johnLennonFacts
        }

const facts =[ "He was the last Beatle to learn to drive",
        "He was never a vegetarian",  "He was a choir boy and boy scout",
        "He hated the sound of his own voice" ]
console.log (johnLennonFacts(facts))

// third function
function iLoveTheBeatles(number){
  var array=[]
  do {array.push("I love the Beatles!")}
  while ((number+=1)<15)
  return array
}

console.log(iLoveTheBeatles(10))