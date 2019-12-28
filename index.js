function theBeatlesPlay(musicians,instruments){
  var array = []
for(var i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)

}
return array;
}


  function johnLennonFacts(facts) {
  let counter = 0;
  var johnLennonFacts = []

  while(counter < facts.length) {
  johnLennonFacts.push (`${facts[counter]}!!!`)
		counter += 1;
    }
return johnLennonFacts;
}

function iLoveTheBeatles(number) {
  var array = []

  do {
    array.push(`I love the Beatles!`)
  number++
  }
  while (number < 15 );

  return array;
}
