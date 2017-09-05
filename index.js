const musician = ["John Lennon", "Paul Mccartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musician, instruments) {
  var new_array = [] //["John lennon plays guiter", "Paul mccartnet play base guitar"]
  for (let i = 0;  i < musician.length; i++) { //i = 4
    new_array.push(`${musician[i]} plays ${instruments[i]}`);
  }
  return new_array
}

function johnLennonFacts(foo) {
  const facts = [

  ];
  var i = 0

  while (i < foo.length ) {
    facts.push(foo[i] + "!!!" )
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var  new_array = []

  do {
    n++
    new_array.push("I love the Beatles!")
  } while ( n < 15 )
  return new_array
}
