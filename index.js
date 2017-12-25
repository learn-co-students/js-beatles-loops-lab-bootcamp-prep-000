function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
  }

function johnLennonFacts(facts){
  var newArray = []
  var i = 0
  while ( i < facts.length ) {
    newArray.push(facts[i] + "!!!");
    console.log(i++);
  }
  return newArray
}

function iLoveTheBeatles(number){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    console.log(--number)
  } while ( number + 1 < 15 && number + 1  > 0 );
  return newArray
}
