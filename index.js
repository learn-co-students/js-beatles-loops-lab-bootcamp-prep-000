

function theBeatlesPlay (musicians, instruments){

  var info = [];

  for (let i = 0; i < 4; i++){
    info = [...info, `${musicians[i]} plays ${instruments[i]}`]
  }

return info

}


function johnLennonFacts(facts){

  var n = 0;
  var trivia = [];

  while (n < facts.length){
    trivia = [...trivia, `${facts[n++]}!!!`]
  }

  return trivia
}


function iLoveTheBeatles(number){

    var store = [];

    do {
      store = [...store, "I love the Beatles!"]
      number++
    } while (number < 15)

return store
}
