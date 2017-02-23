function theBeatlesPlay(musicians, instruments) {
    var array = [];
    for (let i = 0; i < 4; i++) {
        array.push(musicians[i] + " plays " + instruments[i]);
    }
    return array;
}

function johnLennonFacts(x) {
    var i = 0;
    var gothruArray = x.length;
    var emptyArray = [];
    while ([i] < gothruArray) {
        emptyArray.push(x[i++] + '!!!');
    }
    return emptyArray;
}

function iLoveTheBeatles(n) {
    const arr = []

    do {
        arr.push('I love the Beatles!')
        n++
    } while (n < 15)

    return arr
}
