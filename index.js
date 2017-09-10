function theBeatlesPlay(musicians, instruments) {
    let array = []
    for (let i = 0; i < musicians.length; i++) {
        array.push(musicians[i] + " plays " + instruments[i])
    }
    return array
}

function johnLennonFacts(facts) {
    let count = 0
    while (count < facts.length) {
        facts[count] += '!!!'
        count++
    }
    return facts
}

function iLoveTheBeatles(n) {
    let arr = []
    do {
        arr.push("I love the Beatles!")
        n++
    } while (n < 15)
    return arr
}
