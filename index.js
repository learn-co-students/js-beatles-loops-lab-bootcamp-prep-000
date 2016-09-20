function theBeatlesPlay(musicians, instruments) {
    var arr = [];
    var no_musicians = musicians.length;
    for (var i = 0; i < no_musicians; i++) {
        arr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return arr;
}

function johnLennonFacts(facts) {
    var arr = [];
    var length = facts.length;
    var i = 0;
    while (i < length) {
        arr.push(`${facts[i++]}!!!`);
    }
    return arr;
}

function iLoveTheBeatles(n) {
    var arr = [];
    do {
        arr.push('I love the Beatles!');
    }
    while (++n < 15)
    return arr;
}
