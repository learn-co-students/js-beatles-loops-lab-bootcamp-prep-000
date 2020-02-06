// add solution here

function theBeatlesPlay(musicians, instruments) {
    var myNewArray = [];
    for (var i=0; i < musicians.length; i++) {
        myNewArray.push(musicians[i] + " plays " + instruments[i]);
    }
    return myNewArray;
}
////////////////////////////////////////////
/* TEST INPUT ARRAY
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
*/  

function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}