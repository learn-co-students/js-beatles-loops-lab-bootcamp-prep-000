function theBeatlesPlay(musicians, instruments) {
    var myarr = [];
    for (var i = 0; i < musicians.length; i++) {
        myarr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return myarr;
}
var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
    var counter = 0;
    while (counter < facts.length) {
        facts[counter] += "!!!";
        counter++;
    }
    return facts;
}

function iLoveTheBeatles(n){
    var myarr = [];
    do{
        myarr.push("I love the Beatles!");
        n++;
    }while(n < 15);
    return myarr;
}
