function theBeatlesPlay(musicians, instruments) {
 let arr = [];
 
 for (let i = 0; i < musicians.length; i++) {
   arr.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 
 return arr;
}

function johnLennonFacts(arr) {
  let i = 0;
  
  while (i < arr.length) {
    arr[i] += "!!!"
    i += 1
  }
  
  return arr;
}

function iLoveTheBeatles(x) {
  let arr = [];
  
  do {
    arr.push("I love the Beatles!")
    x += 1
  }
  
  while (x < 15);
  
  return arr;
}