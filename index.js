function theBeatlesPlay(musicians,instruments) {
  var legends = []
  for( let i = 0; i < musicians.length; i++){
    legends.push(`${musicians[i]} plays ${instruments[i]}`)

}
return legends
}

function johnLennonFacts (facts) {
var jl = []; // new array
 let counter = 0  // facts
  while (counter < facts.length) {
    jl.push(`${facts[counter]}!!!`)
    counter++//facts[counter]
  }
    return jl
}

function iLoveTheBeatles (number) {
  var musicarray = []; //["I love the Beatles!"]
  let counter  = 0 //counter
  if(number > 15) return ["I love the Beatles!"] //musicarray
  do {
    musicarray.push("I love the Beatles!")
    counter++
  } while (counter - 1 < number) ///counter < number



return musicarray

}






/* function doWhileLoop(array) {
 do {
    array.pop();
  } while ( array.length > 0 && maybeTrue() );
  return array;
} */
