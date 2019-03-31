// add solution here
var array = []

function theBeatlesPlay(musicians,instrument){
for(var i=0;i<musicians.length;i++){
  array.push(musicians[i] + " plays " + instrument[i])
  }
return array
}

function johnLennonFacts(factArray){
  var count = 0
  while(count<factArray.length){
    factArray[count]=factArray[count]+"!!!";
    count++;
  }
return factArray
}

function iLoveTheBeatles(number){
  var Earray =[]
  do{Earray.push("I love the Beatles!");
  console.log(number++)
  }while(number<15)
return Earray
}


