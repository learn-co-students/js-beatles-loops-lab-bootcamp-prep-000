// add solution here
function theBeatlesPlay(arrMusic, arrInst) {
 let arr = []
 for (let i = 0; i < arrMusic.length; i++) {
   arr.push(arrMusic[i] + " plays " + arrInst[i])
   
 }
 return arr
}

function johnLennonFacts(arrFacts) {
  let i = 0;
  let arr = []
  while (i < arrFacts.length) {
    arr[i] = arrFacts[i] + "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(num) {
  let arr = []
  let i = 0
  do {
    arr[i] = "I love the Beatles!";
    i++
  } while (i < 15 - num)
  return arr
}

