function theBeatlesPlay(musicians, instruments)
{
  var arr = [];
  for(let i= 0; i<musicians.length; i ++)
  {
    arr.push(musicians[i] +" plays " + instruments[i]);
  }
  
  return arr
}

function johnLennonFacts(facts)
{
  var arr = [];
   let countdown = 0;
  
  while (countdown <facts.length) {
 
  
  
  arr.push(facts[countdown]+ "!!!")
  
  countdown++
  
  
}
return arr
}

function iLoveTheBeatles(number)
{
  var arr = []
    
do{
  arr.push("I love the Beatles!")
  number ++;
}while(number <15)

return arr
}
