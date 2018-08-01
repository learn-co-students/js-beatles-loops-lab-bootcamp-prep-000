// add solution here
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
 return array; }
 
 function whileLoop(n) {
   while (n > 0) {
     console.log(--n)
     if (n <= 0) 
     return ('done')
 }}

 function doWhileLoop(array) {{
   do {array.pop()}
   while (array.length > 0 || maybeTrue()) 
 }
   function maybeTrue() {
  return Math.random() >= 0.5
}
return array}

function theBeatlesPlay(musicians, instruments) {
  var x = []
  for (let z = 0; z < 4; z++){
  x.push(`${musicians[z]} plays ${instruments[z]}`)
  }
  return x
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 1
   while (0 <= facts.length < 4) {
     console.log(facts[i]++)
     if (i < 4)
 return (facts[i] + "!!!")}}























