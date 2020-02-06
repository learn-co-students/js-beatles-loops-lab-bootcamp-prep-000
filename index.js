// add solution here
function theBeatlesPlay(musicians,instruments){
  var v=[]
  for (var i=0;i<4;i++){
    v.push(musicians[i]+" plays "+instruments[i])
  }return v
}

function johnLennonFacts(array){
 var i=0;
 while( i<array.length){
array[i]=array[i]+"!!!";
i++;
} return array
}


function iLoveTheBeatles(number){
  var v_1=[];
  do {
    v_1.push("I love the Beatles!");
    number++;
  }
  while(number<15);
  return v_1;
}
