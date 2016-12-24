function theBeatlesPlay(musicians,instruments){
var array = [];

for(let i=0;i<musicians.length;i++)
{
  array.push(musicians[i]+` plays `+instruments[i]);

}
    return array;
}

function  johnLennonFacts(array){
var length = array.length;
  while((length)>=0){

  array[length-1] = array[length-1]+'!!!';
    
    length--;
  }
return array;
  
}

function iLoveTheBeatles(number){

  var array =[];

  do{

    array.push("I love the Beatles!");
    number++;
  }while(number<15);
  return array;
}