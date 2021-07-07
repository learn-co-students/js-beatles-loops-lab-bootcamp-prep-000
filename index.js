// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var members = [];
  
  for(var i = 0; i < musicians.length; i++)
  {
    var memDescription = `${musicians[i]} plays ${instruments[i]}`;
    members.push(memDescription);
  }
  return members;
}

function johnLennonFacts(facts)
{
  var i = 0;
  
  while(i < facts.length)
  {
    facts[i]+="!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num)
{
  var beatlesFans =[];
  
  do 
  {
    beatlesFans.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return beatlesFans;
}