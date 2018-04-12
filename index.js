function theBeatlesPlay(musiciansArray, instrumentsArray){
  var outputArray=[];
  for(var i=0;i<musiciansArray.length;i++){
    
    outputArray[i]=`${musiciansArray[i]} plays ${instrumentsArray[i]}`; 
  }
    
  return outputArray;
}
function johnLennonFacts(array){
  var outputArray=[];
  var i=0;
  while( i<array.length){
    outputArray[i]=`${array[i]}!!!`;
    i++;
  }
  return outputArray;
}
function iLoveTheBeatles(number){
  var outputArray=[];
  var i=0;
  do{
  outputArray[i]="I love the Beatles!";
  number++;
  i++;
  }while(number<15);
  
  return outputArray;
}