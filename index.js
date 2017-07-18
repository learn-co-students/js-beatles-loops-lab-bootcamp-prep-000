function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  var text;

  for(var i =0; i< musicians.length; i++)
  {
    text = musicians[i] + ' plays ' + instruments[i];
    newArray.push(text);
  }
  return newArray;
}
//var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

//console.log(theBeatlesPlay(musicians, instruments));

function johnLennonFacts(facts){
  var text,i;
  i =0;
  while(i < facts.length)
  {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    number ++;
    array.push("I love the Beatles!");
  }while (number<15)
  return array;
}
