function theBeatlesPlay (musicians, instruments){
    var empty = [];
    for (let i = 0; i < musicians.length; i++){
        empty.push(musicians[i] + " plays " + instruments[i])
      }
      return empty;
}

function johnLennonFacts(facts){
    let i=0;
    var newfacts = [];
    while (i<facts.length) {
      newfacts.push(facts[i] + "!!!");
      i++;
    }
    return newfacts;
}

function iLoveTheBeatles(i){
    var love = [];
    do {
      love.push("I love the Beatles!")
      i++
    } while (i<15);
    return love;
}
