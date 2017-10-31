function theBeatlesPlay(musician,instrument){
  var x = new Array()
  for(let i=0;i<musician.length;i++){
    var a = musician[i] , b = instrument[i]
    x.push(a + " plays " + b)
  }
  return x
}

function johnLennonFacts(arr){
  for(let i=0;i<arr.length;i++){
    arr[i] = arr[i] + "!!!"
  }
  return arr
}

function iLoveTheBeatles(number){
  var arr = new Array()
  do{
    number++
    arr.push("I love the Beatles!")
  }while(number < 15)
  return arr
}
