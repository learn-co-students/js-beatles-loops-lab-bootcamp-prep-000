function theBeatlesPlay(musicians, instruments)
{
  var array=[];
  for(var i=0;i<musicians.length;i++)
  {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}



function iLoveTheBeatles(n)
{
  var array=[]
  do
  {
   array.push("I love the Beatles!");
   n++;
  }
  while(n<15);
  
  return array;
}