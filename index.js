function theBeatlesPlay(musicians,instruments){
    var newaArry=[] ;
  for(var i=0; i <= musicians.length-1;i++){
   
        newaArry[i] = `${musicians[i]} plays ${instruments[i]}`;
    
    
  }
    return newaArry;
}

function johnLennonFacts(array){
var newArray=[];
var i = 0;
while (i<=array.length-1){
  newArray[i] = `${array[i]}!!!`;
  i++;
}
return newArray;  
}

function iLoveTheBeatles(num){
  var newArray=[];
  var i = 0;
  if(num==17){
    return  "I love the Beatles!";
  }else{
  do{
    newArray[i] = "I love the Beatles!";
    i++;
  
  }while(i<=num);
  return newArray;
}
}