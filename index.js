function theBeatlesPlay(array1, array2){

  var array3 = []
  var myString
  for (let i = 0; i<array1.length;i++){
    myString = array1[i] + " plays "+ array2[i]

    array3.push(myString);
  }

  return array3

}

function johnLennonFacts(array){

  var myString
  var array2 = []
  var i = 0

  while(i<array.length){
    myString = array[i] + "!!!"
    array2.push(myString)
    i++
  }

return array2
}

function iLoveTheBeatles (num){

var myArray = []

do{

  myArray.push("I love the Beatles!")
  num--;
}while(num>=0 && num<8)

  return myArray

}