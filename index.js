function theBeatlesPlay(musicians, instruments){
  var arr = [];
  
  for (let i = 0, l = musicians.length; i < l; i++) {
      arr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return arr;
}

function johnLennonFacts(facts){
  var things = [];
  
  let i = 0;
  while (i < facts.length){
    things.push(`${facts[i]}!!!`);
    i++
  }
  return things
}

function iLoveTheBeatles(n){
  var arr = [];
  
  do{
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr;
}