var theBeatlesPlay = (musicians, instruments) => {
    var iPlay = []

    for (var i = 0; i < musicians.length; i++) {
        iPlay.push(musicians[i] + " plays " + instruments[i])
    }

    return iPlay
}

var johnLennonFacts = (facts) => {
    var counter = 0
    var FACTS = []

    while (facts.length > counter) {
        FACTS.push(facts[counter] + "!!!")
        counter++
    }

    return FACTS
}

var iLoveTheBeatles = (number) => {
    var groupie = []

    do {
        groupie.push('I love the Beatles!')
        number++

    } while (number < 15)

    return groupie
}
