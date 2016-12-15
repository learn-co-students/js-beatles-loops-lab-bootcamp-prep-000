function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    var sen = `${musicians[i]} plays ${instruments[i]}`;
    array.push(sen);
  }
  return array;
}
function johnLennonFacts(arr){
  var facts = [];
  var i = 0
  while(i <= arr.length-1){
    var sen = `${arr[i]}!!!`;
    facts.push(sen);
    i++;
  }
  return facts;
}
function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)

  return array;
}