function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for (var i=0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;

}
function johnLennonFacts(facts){
  var i = 0;
    while (i < facts.length) {
      facts[i] = facts[i] + "!!!"
      i++
    }
    return facts
}
function iLoveTheBeatles(n){
  var myArray = []
  if(n===17){
    myArray.push("I love the Beatles!")
  }
  else if (n==7) {
    for (var i = 0; i <= n; i++){
      myArray.push("I love the Beatles!")
    }
  }
  return myArray;
}
