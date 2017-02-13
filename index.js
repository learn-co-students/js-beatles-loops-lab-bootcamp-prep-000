function theBeatlesPlay(musicians, instruments){
  var array = [];

  for (var i=0; i<musicians.length; i++){
    array[i]=`${musicians[i]} plays ${instruments[i]}`;
    console.log(array[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var string = [];
  var i = 0;
  while(i<facts.length){
    string[i]=facts[i] + "!!!";
    console.log(string[i]);
    i++
  }
  return string;
}

function iLoveTheBeatles(num){
  var array =[];
  var msg = "I love the Beatles!"
  var i=0;
  do {
    array.push("I love the Beatles!");//destructive
    //array = [...array, msg];//non destructive
    i++;
  } while(i<=num && num<15);
  return array;
}
