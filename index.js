function theBeatlesPlay(bList1, bList2){
  var bList3 = new Array();
for(var i=0; i<bList1.length; i++){
  bList3[i]=bList1[i]+" plays "+bList2[i]};
  return bList3;
}

function johnLennonFacts(array){
  var i = 0
  while(i < array.length){
    array[i] = array[i]+"!!!";
    i++;
  }; return array
}

function iLoveTheBeatles(number){
  var bunchOfLove = new Array();
  do{bunchOfLove.push("I love the Beatles!")}
    while(bunchOfLove.length<(number+1));
    if(number>15){bunchOfLove="I love the Beatles!"}
    return bunchOfLove
}
