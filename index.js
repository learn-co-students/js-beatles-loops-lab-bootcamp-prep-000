// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  var l = musicians.length
  for (let i = 0; i < l; i++)
  array.push(`${musicians[i]} plays ${instruments[i]}`)

return array
}

function johnLennonFacts (facts) {
  var excFacts = []
  
  let i = 0
  while (i < facts.length) {
    excFacts.push(`${facts[i]}!!!`)
  i++;
 }
  
  return excFacts
}

function iLoveTheBeatles (n) {
  var love = []
  
  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15)
  
  return love
}