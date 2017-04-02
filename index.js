function theBeatlesPlay(name,instrument) {
    var whatTheyPlay = [];
    for (var i = 0; i < name.length; i++) {
        whatTheyPlay.push (name[i]+" plays "+instrument[i]);
    }
    return whatTheyPlay;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (array) {
    var i=0;
    var excitingFacts = [];
    while (i<array.length) {
        excitingFacts.push(array[i]+'!!!');
        i++;
    }
    return excitingFacts
}

function iLoveTheBeatles (num) {
    var loveThem =[];
    do {
        loveThem.push("I love the Beatles!");
        num++;
    } while (num<15);
    return loveThem;
}
