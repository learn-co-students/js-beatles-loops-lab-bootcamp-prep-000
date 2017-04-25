
// this function is designed to print out an array of strings that all describe a Beatle and which instrument they played. First you have to define an array with var. Then set up the for loop, this will contain the initialization (var i=0), the condition (i<4), and the iteration (i++). The loop will push a string that combines the musicians in ' i ' with the string added, and then the instruments in ' i '. This will happen until ' i ' is 4 at which point it will end and return the entire array.
function theBeatlesPlay(musicians, instruments){
  // This is the declared array
  var array=[]
  // This is the for loop with (initialization; condition; iteration)
  for (var i = 0; i < 4; i++){
    // Here is the command the loop will be executing, to push onto the end of an array the string equated inside the parentheticals
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  // Once the loop is complete, the array will be returned and the function will cease.
  return array
}
// This loop pushes one fact plus exclamatories to the end of an array. It does this by using the condition that as long as the length of new array john is less than the parameter array, it should continue the loop. To get it to push the right facts into the john array, it searches for the index in the parameter array that is equal to the length of array john (i.e. john=[] which is equal to 0 so array[john.length] is equal to array[0].) then the push function is told to add to it three exclamations. At the end of the loop, the john array is returned and the function finishes.
function johnLennonFacts(array){
  // the john array
  var john=[]
  // The beginning of the while loop, included is the conditional (john.length<array.length)
  while (john.length<array.length){
    // this is the actual function the while loop is comitting each pass.
    john.push(array[john.length]+'!!!')

  }
  // John array is returned and the function completes.
  return john
}

function iLoveTheBeatles(n){
  var array=[]
  do {
    array.push('I love the Beatles!')
  } while (array.length<n+1 && n<15);
  return array
}
