// add solution here
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newerFacts = [];
    var i = 0;
    while (i < facts.length) {
        newerFacts.push(facts[i] +"!!!");
        i++;
    }
    return newerFacts;
}

function iLoveTheBeatles(number) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        number++;
    } while (number < 15);

    return love;
}