const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    const array = [];
    
function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var i=0;
  var newarray=[];
  while(i<array.length){
    newarray.push(array[i]+"!!!");
      i++;
  }
    return newarray;
}

function iLoveTheBeatles(num){
  var array=[];
  do{
     array.push("I love the Beatles!");
    num++;
  
  }while(num<15);
  return array;
}