function theBeatlesPlay(musicians, instruments){

  var myArray=new Array()
  for (var i=0; i<musicians.length; i++){
    myArray.push(musicians[i] + ` plays ` +instruments[i] )
  }
  return myArray;
}
function johnLennonFacts(facts){
var i = 0
var newArray=[]
  while (i<facts.length){
    newArray.push(facts[i] +"!!!")
    i++
  }
  return newArray
}

function iLoveTheBeatles(number){
var i=0
var array=[]
  do {
    array[i]="I love the Beatles!"
    i++
  }
  while (i<=number&& number<15)
return array
}
