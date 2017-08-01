/* Receives two arrays as arguments, it then creates a new array and merge the two and return the end string */
function theBeatlesPlay(musicians,instruments){
  var array=[]

  for (var i = 0;i < musicians.length; i++){
    array[i]= musicians[i] + " plays " + instruments[i]
  }
  return array
}

/* Iterate over the array received, add !!! marks to elements and return new array with facts and exclamation marks*/
function johnLennonFacts(facts){
var array=[]
let i = 0
while (i < facts.length) {
  array.push(facts[i]+"!!!")
  i++
}
return array
}

/*Add I love the Beatles! string to an empty array and return it (14 - number passed as parameter) times. */
function iLoveTheBeatles(number){
  var array=[]
  do {
    array.push("I love the Beatles!")
    number++
  }while (number < 15)

  return array
}
