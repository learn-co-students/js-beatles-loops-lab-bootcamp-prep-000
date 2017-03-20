function theBeatlesPlay(musicians,instruments) {
  var out = []
  for( var i = 0; i < musicians.length; i++ )
  {
    out.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return out
}

function johnLennonFacts(facts) {
  var i = 0
  while( i < facts.length )
  {
    facts[i++] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(n) {
  var out = [] 
  do
  {
    out.push("I love the Beatles!")
  } while( ++n < 15 );
  return out
}
 
  
