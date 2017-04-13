//js-beatles-loops-lab-bootcamp-prep-000
var theBeatlesPlay = (musicians , instruments) => {
    var NewArray = [];
    for(let i = 0 ; i < musicians.length ; i++) {
          NewArray[i] = musicians[i] + " plays " + instruments[i];
    }
    return NewArray;
}

var johnLennonFacts = (facts) => {
    var i=0;
    while (i < facts.length) {
      facts[i] += "!!!";
      i++;
    }
    return facts;
}

var iLoveTheBeatles = (number) => {
    var i = parseInt(number);
    var NewArray = [];
    do{
      NewArray.push("I love the Beatles!");
      i++;
    }while (i < 15);
    return NewArray;
}