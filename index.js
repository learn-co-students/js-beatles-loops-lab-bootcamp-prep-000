// add solution here
function theBeatlesPlay(musicians, instruments){
    var beatlesLineUp = new Array();
    for(let i = 0; i < musicians.length; i++){
        beatlesLineUp[i] = `${musicians[i]} plays ${instruments[i]}`
    }
    return beatlesLineUp;
}

function johnLennonFacts(facts){
    var bigFacts = new Array();
    let i = 0;
    while(i < facts.length){
        bigFacts[i] = `${facts[i]}!!!`
        i++;
    }
    return bigFacts;
}

function iLoveTheBeatles(num){
    var message = new Array();
    do{
        message.push('I love the Beatles!')
        num++;
    }while(num < 15)
    return message;
}