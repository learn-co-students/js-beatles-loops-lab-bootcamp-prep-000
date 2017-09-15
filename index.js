function theBeatlesPlay(arrMusicians, arrInstruments) {
    var newArray = [];
    for (var i = 0; i < arrMusicians.length; i++) {
        newArray[i] = arrMusicians[i] + ' plays ' + arrInstruments[i];
    }
    return newArray;
};

function iLoveTheBeatles(number) {
    var newArray = [];
    do {
        newArray.push('I love the Beatles!');
        number ++;
    } while (number < 15);
    return newArray;
}

function johnLennonFacts(arrFacts) {
    var i = 0;
    while (arrFacts.length > i) {
        arrFacts[i] = arrFacts[i] + "!!!";
        i ++;
    }
    return arrFacts;
}
