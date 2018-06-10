function theBeatlesPlay(arrayM, arrayI) {
  var arr = []; 
  for(var i = 0; i < arrayM.length; i += 1) {
    arr.push(`${arrayM[i]} plays ${arrayI[i]}`)
  }
  return arr; 
}

function johnLennonFacts(arrayF) {
 var newFacts = []; 
 var i = 0; 
 while(i < arrayF.length) {
   newFacts.push(arrayF[i] + "!!!"); 
   i += 1; 
 }
 return newFacts; 
}

function iLoveTheBeatles(n) {
  var arr = []; 
  do {
    arr.push("I love the Beatles!"); 
    n += 1; 
  } while (n < 15); 
  return arr; 
}
