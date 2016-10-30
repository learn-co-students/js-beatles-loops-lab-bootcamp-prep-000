function theBeatlesPlay(musicians, instruments)
{
  var skills=[];
  for(var i=0; i<musicians.length; i++)
  {
    var person=musicians[i];
    var instrum=instruments[i];
    skills.push(person +" plays "+ instrum);
  }
  return skills;
}
function johnLennonFacts(facts)
{
  var i=0;
  while(i<facts.length)
  {
    var fact=facts[i];
    fact=fact+"!!!";
    facts[i]=fact;
    ++i;
  }
  return facts;
}
function iLoveTheBeatles(num)
{
  var array=[];
  do {
    array.push("I love the Beatles!");
    ++num;
  } while (num<15);
  return array;
}
