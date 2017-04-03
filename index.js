function theBeatlesPlay(arrMusicians, arrInstruments) {
    var arrMusic = [];
    for(var i=0; i<arrMusicians.length; i++) {
        arrMusic.push(arrMusicians[i]+" plays "+arrInstruments[i]);
    }
    return arrMusic;
}

function johnLennonFacts(arrFacts) {
    var count = 0;
    var arrResult = [];
    while(count<arrFacts.length) {
        arrResult.push(arrFacts[count]+'!!!');
        count++;
    }
    return arrResult;
}

function iLoveTheBeatles(n) {
    var arrResult = [];
    do {
        arrResult.push('I love the Beatles!');
        n++;
    } while(n<15)
    return arrResult;
}
