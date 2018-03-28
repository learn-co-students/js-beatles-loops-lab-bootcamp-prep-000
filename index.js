function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var array = [];
  for (let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(facts) {
  let array = [];
  while (facts.length > 0) {
    let factShift = facts.shift() 
    array.push(factShift + '!!!')
  }
  return array
}


function iLoveTheBeatles(n) {
  var array = [];
  do {
  array.push('I love the Beatles!'), n++
  } while (n < 15);  
  return array
}