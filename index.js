function theBeatlesPlay(artist, instrument) {
    var toFill = []
    for (var i = 0; i < artist.length; i++) {
        toFill.push(artist[i] + " plays " + instrument[i])
    }
    return toFill
}

function johnLennonFacts(array) {
    var i = 0
    while (i < array.length) {
        array[i] = array[i] + "!!!";
        i++;
    }
    return array
}

function iLoveTheBeatles(number) {
    var emptyArray = []
    do {
        emptyArray.push("I love the Beatles!");
        number++;
    }
    while (number < 15);
    return emptyArray
}
