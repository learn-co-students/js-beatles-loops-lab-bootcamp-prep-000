function theBeatlesPlay(musicians, instruments){
  var the_array = [];
  var musicians_length = musicians.length ;
  var instruments_length = instruments.length;
  for(var j = 0; j < musicians_length; j++){
      the_array.push(musicians[j]+  " plays " + instruments[j]);

  }

  return the_array;
}

function johnLennonFacts(johnLeFacts){
  var johnLeFacts_length = johnLeFacts.length;
  var n = 0;
  while (n < johnLeFacts_length){
    johnLeFacts[n] = johnLeFacts[n] + "!!!";
    n++;
  }
  return johnLeFacts;
}

function iLoveTheBeatles(n){
var my_array = [];
do
{
my_array.push("I love the Beatles!");
n++;
}while (n < 15);

return my_array;
}
