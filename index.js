// add solution here

function theBeatlesPlay(musicians, instruments) {
  const ray = []
  for(let y = 0; y < musicians.length; y++ ) {
  ray.push(`${musicians[y]} plays ${instruments[y]}`)
  }
  return ray 
}

//whileLoop johnLennonFacts
function johnLennonFacts(facts) {
  const result = [];
  let x = 0
  while (x < facts.length) {
    result.push(`${facts[x]}!!!`);
    x++
  }
return result 
}

//do-while iLoveTheBeatles
function iLoveTheBeatles(num) {
  var result = []
  do {
    result.push("I love the Beatles!");
    num++
  }
  while (num < 15);
  return result
}