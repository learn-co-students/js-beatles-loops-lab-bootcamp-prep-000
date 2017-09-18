function theBeatlesPlay(musicians,instruments) {
  var n = [];
  for (var i = 0; i < musicians.length; i++) {
    n.push( `${musicians[i]} plays ${instruments[i]}` )
  }
  return n;
}
function johnLennonFacts(facts){
  var i = 0
  var b = []
  while(i < facts.length) {
      b.push(facts[i] + '!!!')
      i++;
  }
  return b
}
function iLoveTheBeatles(n){
   var a = []
   do{ a.push( "I love the Beatles!")
   n++
 } while(n < 15)
 return a }
