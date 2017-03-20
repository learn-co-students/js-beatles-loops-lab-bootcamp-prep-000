var theBeatlesPlay = function(musicians, instruments){
    var strings = [];
    for (let i=0; i < musicians.length; i++) {
        strings.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return strings;
};

var johnLennonFacts = function(facts){
    let counter = 0;
    while (counter < facts.length) {
        facts[counter] += '!!!';
        counter += 1;
    }
    return facts;
};

var iLoveTheBeatles = function(number){
    var strings = [];
    do {
        strings.push("I love the Beatles!");
        number += 1;
    } while(number < 15);
    return strings;
};
