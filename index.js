function theBeatlesPlay (musicians, instruments) {
  var mL = musicians.length;
    var array = [];
    for (var i = 0; i < mL; i++ )
    { array.push(musicians[i] + " plays " + instruments[i])
}
    return array
  }

    function johnLennonFacts(facts) {
    var fL = facts.length;
    var j = 0;
    var arrayFacts = [];
        while (j < fL) {
          arrayFacts.push (facts[j] + "!!!")
        j++;
      }
      return arrayFacts
    }


  function iLoveTheBeatles(number){
  var arrayLove = [];
  do {number++; arrayLove.push('I love the Beatles!');
  } while (number < 15);
  return arrayLove
  }
