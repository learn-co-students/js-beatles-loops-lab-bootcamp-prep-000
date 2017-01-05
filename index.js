function theBeatlesPlay(musicians, instruments){
  var array =[]
    for(var i = 0; i < musicians.length; i++){array.push(
      musicians.slice(i,i+1) + " plays " + instruments.slice(i,i+1))}
        return array
}

function johnLennonFacts(facts){
  var i = 0
  var n = []
      while(i < facts.length){
        n.push(facts[i] + "!!!")
    i++
  }
 return n
}

function iLoveTheBeatles(number){
  var pizza = []
    do{pizza.unshift("I love the Beatles!")
      }while(number < 15)
    number++
    return pizza
 }
