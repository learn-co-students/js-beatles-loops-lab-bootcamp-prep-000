//beatles play what
function theBeatlesPlay(musicians, instruments){
  var pairs = []
  for (let i = 0; i < musicians.length; i++ ){
    pairs[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return pairs
}
//John Lennon exclaims?
function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}
//Beatles are just ok
function iLoveTheBeatles(n){
  var array = []
  var i = 0
  do{
      array[i] = "I love the Beatles!"
      i++
    }while(i <=n && n <= 15)
return array
}
