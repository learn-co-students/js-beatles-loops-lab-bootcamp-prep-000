function theBeatlesPlay(musicians,instruments){
    var array = []
    for (var i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array
  }

  function johnLennonFacts(facts){
    var newArray = []
    for (var i = 0; i < facts.length; i++) {
      newArray.push(`${facts[i]}!!!`)
    }
    return newArray
  }

  function iLoveTheBeatles(n){
    var loveArray = []
    do {
      loveArray.push("I love the Beatles!");
      ++n
    } while (n < 15);
    return loveArray
  }
