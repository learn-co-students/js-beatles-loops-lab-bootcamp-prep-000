function theBeatlesPlay(musicians, instruments) {
  var bands = [];
  for (let i = 0; i < musicians.length; i++) {
    bands.push(`${musicians[i]} plays ${instruments[i]}`);
  }
   return bands;
 }

 function johnLennonFacts(facts) {
    var factsNew = [];
    var funFacts = 0;

    while (funFacts < facts.length) {
      factsNew.push(facts[funFacts] + "!!!");
      funFacts++;
    }
    return factsNew;
  }

  function iLoveTheBeatles(number) {
      var newNum = [];
      var i = number;

      do {
        newNum.push("I love the Beatles!");
        i++;
      } while (i < 15){
        return newNum;
      }
  }
