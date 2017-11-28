function theBeatlesPlay(musicians, instruments) {
    var empty = [];
    for(var i=0;i < 4; i++) {
        //empty = musicians[0] + " plays " + instruments[0];
        empty.push(musicians[i] + " plays " + instruments[i]);

    }


      return empty;
}

 function johnLennonFacts(facts) {
        var empty = [];
        var i =0;
       while(i<facts.length) {
         empty.push(facts[i] + "!!!");
         i++;
       }
       return empty;
 }


function iLoveTheBeatles(number) {
      var empty = [];
      do{
          empty.push("I love the Beatles!");
          number++;
      }while (number < 15);
  return empty;
}
