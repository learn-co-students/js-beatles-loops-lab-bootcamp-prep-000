
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
   array.push(musicians[i] + ' plays '+ instruments[i])
  }
  return array
}


const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];


function johnLennonFacts(facts) {
  var n = 0
  var array = []
  while(n < facts.length) {
    array.push(facts[n] +'!!!')
    n++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
  n++;
  array.push("I love the Beatles!")
  } while (n < 15);
  return array
}
