function theBeatlesPlay (musicians,instruments){
  var array = [];
  for (var i=0;i<musicians.length;i++){
array[i] = musicians[i] + " " + "plays" + " " + instruments[i];
  }
  return array;
}


function johnLennonFacts(facts){
  var factsarray = [];
  var i = 0;
  while( i <facts.length){
factsarray[i]=facts[i] + "!!!";
i++
  }
  return factsarray;
}

function iLoveTheBeatles (number){
  var emptyarray =[];
  var i = 0;
  do {
    emptyarray[i]="I love the Beatles!";
    number++
    i++
  }
  while (number < 15)
  return emptyarray;
}
