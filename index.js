// add solution here


function theBeatlesPlay(musicians,instruments)
{
  var temp =  [];
  
  for(let i = 0; i < musicians.length; i++)
  {
    temp.push(musicians[i] +  " plays " + instruments[i]);
  }
  
  return temp;
}

function johnLennonFacts(facts)
{
  var temp =  [];
  
  for(let i = 0; i < facts.length; i++)
  {
    temp.push(facts[i] +  "!!!")
  }
  
  return temp;
}

function iLoveTheBeatles(number)
{
  var temp = [];
  do{
    temp.push("I love the Beatles!");
    number++;
  }while(number < 15);
  
  return temp;
  
}