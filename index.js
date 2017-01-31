function theBeatlesPlay (musicians, instruments){
const myarray = []
  for (let i=0; i < musicians.length; i++ ){
   myarray.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 return myarray
}

function johnLennonFacts (facts){
  const myarray = []
  let i = 0
  while (i < facts.length) {
    myarray.push(`${facts[i]}!!!`)
    i++
    }
  return myarray
}

function iLoveTheBeatles(number){
  const myarray = []
  do {
   myarray.push('I love the Beatles!')
   number++
  } while (number < 15)
 return myarray
}
