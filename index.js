function theBeatlesPlay(musicians, instruments){
  var empty_array = new Array();

  for (var i = 0; i <musicians.length; i++){
    empty_array.push(musicians[i] + " plays " + instruments[i]);
    }

    return empty_array;

}

function johnLennonFacts(facts){
  var strings = new Array();
  var i = 0;
  while(i < facts.length){
    strings.push(facts[i] +'!!!');
    i++;
  }
  return strings;

}


function iLoveTheBeatles(number){
  var empty_array = new Array();

  do{
    empty_array.push("I love the Beatles!")
    number++;
  } while(number < 15);
 return empty_array;
}
