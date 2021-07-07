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

 function johnLennonFacts(array) {
	var i = []
	while (array.length > 0) {
		i.unshift(`${array.pop()}!!!`)
	}
  return i
}

function iLoveTheBeatles(n) {
  var i = []
  do {
    i.push("I love the Beatles!")
    ++n} while (n < 15);
  return i
}


















