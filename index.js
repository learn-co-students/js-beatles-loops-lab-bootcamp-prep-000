function theBeatlesPlay(musicians, instruments) {
  
  const array = [];
  
  for (let i = 0, s = musicians.length; i < s; i++)
  {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
       }
  return array
}

function johnLennonFacts(array) {
  
const facts = []

let i = 0
  
while (i < array.length) {
  facts.push(`${array[i]}!!!`)
  i++
}

return facts

}

function iLoveTheBeatles(array) {
  const love = []
  
   do {
    love.push('I love the Beatles!')
    array++
   }
   while (array < 15) 
 
  return love
  
  }