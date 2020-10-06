// add solution here

function theBeatlesPlay(musicians, instruments) {
    var returnArray = [];
    if(musicians.length === instruments.length) {
        console.log("Input array size mismatch.");
    }
    for(let i = 0; i < musicians.length; i++) { 
        returnArray[i] = musicians[i] + ' plays ' + instruments[i];
        console.log(returnArray[i]);
    }
    return returnArray;
}

function johnLennonFacts(factsArray) {
    let index = 0;
    while(index < factsArray.length) {
        factsArray[index] = factsArray[index] + "!!!";
        index++;
    }
    return factsArray;
}

function iLoveTheBeatles(inputNumber) {
    var whiteAlbum = [];
    do {
        whiteAlbum.push("I love the Beatles!");
        inputNumber++;

    } while(inputNumber < 15);
    return whiteAlbum;
}