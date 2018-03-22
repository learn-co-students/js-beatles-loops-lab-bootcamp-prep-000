function theBeatlesPlay (musicians, instruments) {
    var result = [];
    for (var i = 0; i < musicians.length; i++) {
        result.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return result;
}

function johnLennonFacts(array) {
    var result = [];
    var i = 0;
    while (i < array.length) {
        var fact = `${array[i]}!!!`
        result.push(fact)
        i++;
    }
    return result;
}

function iLoveTheBeatles (number) {
    var result = []
    do {
        result.push(`I love the Beatles!`)
        number++;
    } while (number < 15);
    return result;
}
