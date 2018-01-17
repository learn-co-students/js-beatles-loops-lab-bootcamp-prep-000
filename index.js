
function theBeatlesPlay(musicians,instruments){

  var stringArr = []

  for(let i=0; i<musicians.length; i++){

    stringArr.push(`${musicians[i]} plays ${instruments[i]}`)

  }

  return stringArr
}


function johnLennonFacts(arr){
  var i = arr.length-1
  while(i>=0){
    arr[i]+= "!!!"
    i--
  }
  return arr
}



function iLoveTheBeatles(n){
  var arr = []

  do{
    arr.push("I love the Beatles!")
    n++
  }while(n<15)

  return arr

}
