'use strict';

 function theBeatlesPlay(musicians, instruments) {
    var all = [];
    for (var i=0; i < musicians.length; i++) {
        all.push(musicians[i] + " plays " + instruments[i]);
    }
    return all;
}

 function johnLennonFacts(facts) {
    var additionalFacts = [];
    var i = 0;
    while (i < facts.length) {
        additionalFacts.push(facts[i] +"!!!");
        i++;
    }
    return additionalFacts;
}

 function iLoveTheBeatles(num) {
    var things = [];
    do {
        things.push("I love the Beatles!");
        num++;
    } while (num < 15);

     return things;
}
