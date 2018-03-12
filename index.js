var theBeatlesPlay=function(musAr,instAr){
  var result = [];
  for(let m=0;m<musAr.length;m++){
    var musString=musAr[m]+" plays "+instAr[m];
    result.push(musString);
  }
  return result;
};

var johnLennonFacts=function(ar){
  var count=0;
  while(count<ar.length){
    ar[count]=ar[count]+"!!!";
    count++;
  }
  return ar;
};

var iLoveTheBeatles=function(number){
  var result=[];
  var count=number;
  do{ 
    result.push("I love the Beatles!");
    count++;
  } while (count<15);
  return result;
};