function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts){
    const ofacts = [];

    let i = 0
    while (i < facts.length) {
        ofacts.push(`${facts[i]}!!!`)
        i++
    }
    return ofacts;
}

function iLoveTheBeatles(n) {
    const lovesong = []
    do {
      lovesong.push('I love the Beatles!');
      n++
    } while (n < 15);
    return lovesong;
}
