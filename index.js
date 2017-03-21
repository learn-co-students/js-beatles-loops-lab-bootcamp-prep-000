function theBeatlesPlay(musicians, instruments) {
      var newArray = [];
      for (var i = 0; i < musicians.length; i++) {
         newArray.push(musicians[i] + " plays " + instruments[i]);
      }
      return newArray;
}
function johnLennonFacts(argu) {
      var i = 0;
      while( i < argu.length ) {
          argu[i] = (argu[i] + "!!!");
          i++;
      }
      return argu;
}
function iLoveTheBeatles(n) {
    var emptyArray = [];
    do {
        emptyArray.push("I love the Beatles!");
        ++n;
    } while ( n < 15 );
    return emptyArray;
}
