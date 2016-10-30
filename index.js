function theBeatlesPlay(musicians, instruments){
    var sum = ["","","",""];
    for (var i = 0; i <musicians.length; i++){
        sum[i] = musicians[i] + " plays " + instruments[i];
    }
    return sum;
}

function johnLennonFacts(facts){
    var i = 0
    while (i < facts.length){
        facts[i] = facts[i] + "!!!"
        i++
    }
    return facts;
}

function iLoveTheBeatles(num){
    var empty = []
    do {empty.push("I love the Beatles!");
        num++;
  } while (num < 15);
    return empty;
}
