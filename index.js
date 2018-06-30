function theBeatlesPlay(musicians, instruments){
    let wotTheyPlay = [];

    for (let i = 0; i < musicians.length; i++){
        wotTheyPlay.push(
            musicians[i] + 
            " plays " +
            instruments[i]
        );
    }

    return wotTheyPlay;
}

function johnLennonFacts(jlFacts){
    let jlFACTS = jlFacts;

    for (let i = 0; i < jlFACTS.length; i++){
        jlFACTS[i] += "!!!";
    }

    return jlFACTS;
}

function iLoveTheBeatles(howMuch){
    let beatlemania = [];
    let counter = 0;
    const scream = "I love the Beatles!";

    do {
        beatlemania.push(scream)
        counter++;
    }
    while (howMuch < 15 && counter <= howMuch)

    return beatlemania;
}