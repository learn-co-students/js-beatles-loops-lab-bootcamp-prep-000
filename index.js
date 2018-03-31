 function p(value){
    console.log(value);
 }

 function theBeatlesPlay(musicians, instruments){
   var m = []
   for (var i = 0; i < 4; i++){
     m.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return m
 }
 
 
 function johnLennonFacts(facts){
  var m = []
  var i = 0
  while (i < facts.length) {
    m.push(`${facts[i]}!!!`)
    ++i
  }
  return m
 }

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function iLoveTheBeatles(num) {
    let m = [];
    do {
        m.push("I love the Beatles!")
        ++num
    } while (num < 15){

    }

    return m
}


