"use strict";

function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}


function johnLennonFacts(array) {
    var newFacts = [];
    let i = 0;
    while (i < array.length) {
        array.push(array[i] + "!!!");
        i++;
    }
    return newFacts;
}


function iLoveTheBeatles(num) {
    var beats = [];
    do {
        beats.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return beats;
}