function theBeatlesPlay(musicians,inst){
  var array = []
  for(var a = 0; a< musicians.length ;a++) {
     var str = musicians[a] + " plays " + inst[a]
        array.push(str)
 }
    return array

  }
  
function johnLennonFacts(facts) {
 var i = 0;
 var arr = []
  while(i < facts.length) {
    arr.push(facts[i] + "!!!");
     i++;
  }
  return arr
}

function iLoveTheBeatles(n) {
  var arr =[]
  do {
    arr.push("I love the Beatles!")
    n++
  }
  
  while(n<15);
  return arr
}
