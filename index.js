function theBeatlesPlay(musicians, instruments) {

    var band = [];

    for (var i = 0; i < musicians.length; i++) {
        band.push(musicians[i] + ' plays ' + instruments[i]);
    }

    return band;
    
}


function johnLennonFacts(facts) {
    var lennonFacts = [];
    var i = 0; 
    while (i < facts.length) {
      lennonFacts.push( (facts[i] + '!!!') );
      i++;
    }
    
    return lennonFacts;
}


function iLoveTheBeatles(num) {
    var beatles = [];

    do {
      beatles.push( 'I love the Beatles!' );
      num++;
    } while (num < 15);


    return beatles;
}