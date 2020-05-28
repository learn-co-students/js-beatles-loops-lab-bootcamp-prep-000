// add solution here
var musicians=[
  "John Lennon",
  "Paul McCartney",
  "Ringo Starr",
  "George Harrison"]
var instruments= [
  "rhythm guitar",
  "bass",
  "drums",
  "lead guitar"]
var whoPlaysWhat=[]

function theBeatlesPlay(musicians, instruments) {
 for (let i = 0; i < 4; i++) {
 whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
 } 
 return whoPlaysWhat
}

var facts= [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
var excitedFacts= []
function johnLennonFacts(facts){
  while (i<4) {
  i++
  excitedFacts.push(`${facts[i]}!!!`);
  
  }
   return excitedFacts
}
var empty=[]
function iLoveTheBeatles(num){
  empty.push("I love the Beatles!") num++ num<15
}