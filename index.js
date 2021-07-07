// add solution here
let theBeatlesPlay = function(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

let johnLennonFacts = function(facts) {
  var i = 0
  var array = [];

  while (i < facts.length) {
  array.push(facts[i] + '!!!')
  i++
  }
  return array
};

let iLoveTheBeatles = function(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)

return array;
}
