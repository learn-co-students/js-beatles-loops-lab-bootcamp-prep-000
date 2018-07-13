// add solution here
function theBeatlesPlay (musicians, instruments){
  var arr = []
  var str = ""
  for (var i = 0; i < musicians.length; i++){
      str += musicians[i] + " plays " + instruments[i]
      arr.push(str)
      str = ""
  }
  return arr
}

function johnLennonFacts (arr){
  let i = 0
  while(i < arr.length){
    arr[i] = arr[i] + "!!!"
    i++
  }return arr
}

function iLoveTheBeatles (num){
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    num++;
  }while(num<15)
  return arr
}