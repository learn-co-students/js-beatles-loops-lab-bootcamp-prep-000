function theBeatlesPlay(musicians, instruments){
  var store = [];
  for (var i=0;i<musicians.length;i++){
    store.push(musicians[i] + " plays " + instruments[i]);
  }
  return store;
}

function johnLennonFacts(points){
  var i=0;
  var facts = [];
  while (i < points.length){
    facts[i] = points[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var store = [];
  do{
    store.push("I love the Beatles!");
    number--;
  } while (number >= 0 && number < 15);
  return store;

}
