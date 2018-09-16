// Musicians & Instruments 
function theBeatlesPlay(musicians, instruments) {
  var store1 = []
  
  for (let i = 0; i < musicians.length && instruments.length; i++ ) {
    store1.push(`${musicians[i]} plays ${instruments[i]}`)
    
     }
     return store1
  }
  

// FACTS
function johnLennonFacts(facts) {
const withBang = []

  var i = 0

  while ( i < facts.length) {
    withBang.push(facts[i] += '!!!')
    i +=1 
  }
  
  return withBang
};

// NUMBER times "I love the Bea...."
function iLoveTheBeatles(n) {
  var store2 = [] 
  
    do {  store2.push("I love the Beatles!") 
        n += 1
       }
       
    while ( n < 15) {
          
     }
            
    return store2
}
 