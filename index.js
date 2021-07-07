// add solution here
function theBeatlesPlay(arrMus, arrIns) {
  var arr = []
  for(var i = 0; i < arrMus.length; i++){
    var string = arrMus[i] + " plays " + arrIns[i]
    arr.push(string)
  }
  return arr
}

function johnLennonFacts(arrJL) {
  var exc = []
  var i = 0
  while (i < arrJL.length){
    var string = arrJL[i] + "!!!"
    exc.push(string)
    i++;
  }
  return exc
}

function iLoveTheBeatles(num) {
  var arr = []
  do{
    arr.push("I love the Beatles!")
    num++;
  } while (num < 15)
  return arr
}
