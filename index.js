function theBeatlesPlay (musicians, instruments){
  var array = [];
  for (var i = 0; i < 4; i++ ){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}


function johnLennonFacts (facts){
  const shouted = [];

  let i = 0
  while (i <facts.length){
    shouted.push (`${facts[i]}!!!`)
    i++
  }
  return shouted;
}

function iLoveTheBeatles (n){
  var array = [];
  let i = 0
  do {
    array.push ("I love the Beatles!");
    n++
  } while (n < 15);
  return array;
}
