// for (var i = 1; i < 100; i++) {
//   console.log( "Hello World the " + i + " time" );
// }

// for (var i = 1; i < 100; i++) {
//   console.log( "Hello World the " + i + " time" );
// }

function theBeatlesPlay(musicians, instruments){
  var beatles = []
  for (var i = 0 ;  i < musicians.length; i++) {beatles.push(`${musicians[i]} plays ${instruments[i]}`)};
  return beatles
}

// while ([condition]) {
//   [loopBody]
// }


function johnLennonFacts(array) {
var i = 0
var facts = []
while (i < array.length) {
  facts.push(`${array[i]}` + "!!!");
  i++;
}
return facts
}

// // do {
//   console.log('doo-bee-doo-bee-doo')
// } while (maybeTrue());

function iLoveTheBeatles(number){
  var love = []
  do {
    love.push("I love the Beatles!")
    number++
  } while (number < 15);
  return love
}
