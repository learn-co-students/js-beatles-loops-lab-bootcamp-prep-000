function theBeatlesPlay (musicians, instruments) {
    var array = []
    for (let m = 0; m < musicians.length ; m++) {
        if (m === 0) {
            array = [...array, musicians[m] + ' plays ' + instruments[m]];
        } else {
            array = [...array, musicians[m] + ' plays ' + instruments[m]];
        }
    }
    return array
};

function johnLennonFacts (facts) {
    let i = 0
    var new_array = []
    while (i <= facts.length - 1) {
        new_array = [...new_array, facts[i] + '!!!'];
        i++;
    }
    return new_array
}

function iLoveTheBeatles(n) {
    let counter = n
    var array = []
    do {
        array = [...array, 'I love the Beatles!'];
        counter++;
    } while (counter < 15) {
        return array
    }
}
