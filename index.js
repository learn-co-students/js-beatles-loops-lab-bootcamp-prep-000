function theBeatlesPlay(musicians, instruments){
  var emptyArray= [];
  for (var i=0; i < musicians.length; i++)
  { var string = musicians[`${i}`] + ` plays ` + instruments[`${i}`];
    emptyArray.push(string);
}
return emptyArray
}

function johnLennonFacts(facts){

let i = facts.length;
  while(i > 0){
console.log(--i);
facts[`${i}`]= facts[`${i}`] + `!!!`;

  }
return facts
}

function iLoveTheBeatles(n){
  var myarray= []
  do{  n++; myarray.push('I love the Beatles!') }
  while (n<15){
}
return myarray
}
