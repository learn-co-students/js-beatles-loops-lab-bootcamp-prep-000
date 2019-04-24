
function theBeatlesPlay(array) {  
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
    for (let i= 1; i <5; i++) {
      array.push(`${musicians} plays ${instruments}`)
  }
  return array
}


function johnLennonFacts(facts) {
  var i = 0;

while(i < facts.length){
  	facts[i] + "!!!";
  	i++;
  }
  return facts
}


function iLoveTheBeatles(array) {
 
  var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I love the Beatles!");
  }
  while (incrementVariable() < 15);
}
