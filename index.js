function theBeatlesPlay(music, tools) {
    var empty = []
    for (let ind = 0; ind < music.length; ind++) {
        empty.push(`${music[ind]} plays ${tools[ind]}`)
    }
return empty
}

function johnLennonFacts(facts) {
    let ind = 0 
    while (ind < facts.length) {
        facts[ind] +=  "!!!"
        ind++
    }
    return facts
}

function iLoveTheBeatles(n) {
    let empty = []
    do {
        n++
        empty.push("I love the Beatles!");
    } while (n < 15)
    return empty
}