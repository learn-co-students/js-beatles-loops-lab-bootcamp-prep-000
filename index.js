function theBeatlesPlay(artists, instruments) {
    var sentences = [];
    for(let i = 0; i < artists.length; i++) {
        sentences[i] = artists[i] + ' plays ' + instruments[i];
    }
    return sentences;
}

function johnLennonFacts(facts) {
    var index = 0;
    var array = [];
    while(index < facts.length) {
        array[index] = facts[index] + '!!!';
        index++;
    }
    return array;
}

function iLoveTheBeatles(number) {
    var array = [];
    var counter = 0;
        do {
            array[counter] = "I love the Beatles!";
            counter++;
        } while(number < 15 && counter <= number);
    return array;
}
