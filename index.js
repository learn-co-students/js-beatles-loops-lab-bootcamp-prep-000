// add solution here
function theBeatlesPlay(musicians, instruments){
  let array =[ ];
  for (let i=0; i < musicians.length; i++){
    const string = musicians[i]+" plays "+ instruments[i];
    array.push(string);
  }
  return array;
}


function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
