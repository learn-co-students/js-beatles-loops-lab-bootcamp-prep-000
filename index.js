function theBeatlesPlay(arrayMusicians, arrayInstruments) {
    var empty = new Array();
    for (var i = 0; i < arrayMusicians.length; i++ ) {
        empty.push(arrayMusicians[i] + ' plays ' + arrayInstruments[i]);
    }
    return empty;
}

function johnLennonFacts(facts) {
    var empty = new Array();
    var count = 0;
    while (count < facts.length) {
        empty.push(facts[count] + "!!!");
        count++;
    }
    return empty;
}

function iLoveTheBeatles(number) {
    var empty = new Array();
    do {
        empty.push("I love the Beatles!");
        number++;
    } while (number < 15);

    return empty;
}
