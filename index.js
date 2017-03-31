function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []; // new array
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray // print array
}
function johnLennonFacts(facts) {
  // var array = []
  let i = 0;
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!` // facts[i] += '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do{
    newArray.push("I love the Beatles!")
    num++
  }while(num < 15)
return newArray
  }
