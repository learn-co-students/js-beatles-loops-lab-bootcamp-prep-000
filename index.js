function theBeatlesPlay(musicians, instruments){
  var artists = [];
  for (var i = 0; i < musicians.length; i++) {
    artists.push(musicians[i] + " plays " + instruments[i]);
  }
  return artists;
}
function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  while(i < facts.length){
    array.push(facts[i] + '!!!');
    i++;
  }
  return array;
  }
  function iLoveTheBeatles(number){
    var array2 = [];
    do{
      array2.push("I love the Beatles!");
      number++;
    } 
    while(number < 15);
    return array2;
  }