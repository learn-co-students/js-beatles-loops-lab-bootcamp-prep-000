


function theBeatlesPlay(musicians, instruments)
{

  var arrays = [];

  
 
 
 for(var i =0;i<musicians.length; i++)
 {
 
  
  arrays.push(musicians[i]+ " plays " + instruments[i]);

  
  
  
  
  
 }
 
 
 return arrays;
 
}


function johnLennonFacts(array)
{
  

 
  var i =0;
  while(i < array.length)
  {
    
    array[i] = array[i]+("!!!")
    i++;
  }
  return array;
  
}


//like append kittens
function iLoveTheBeatles(number)
{
//  var array[];
  var new_kittens = [...number]
  do{
    
    new_kittens.push('I love the Beatles!');
    number++;
    
    
  }while(number < 15);
  
  return new_kittens;
}

