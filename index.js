// add solution here
 function theBeatlesPlay(musicians, instruments) {
   var array = [];
    for (var counter = 0; counter < musicians.length; counter++) {
      array.push(`${musicians[counter]} plays ${instruments[counter]}`)
    }
    return array
 }


 function johnLennonFacts(facts) {
    var array = [];
    var counter = 0;
    while (counter < facts.length) {
    array.push(`${facts[counter]}!!!`);
    counter++;
    }
    return array
  }


  function iLoveTheBeatles(number) {
    var array = []
    do {
      array.push(`I love the Beatles!`)
      number++;
    } while (number < 15)
    return array
  }
