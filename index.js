function theBeatlesPlay(musicians, instruments)
{
  var arr=[];

  for (let i=0; i<musicians.length; i++ )
  {
    var a=musicians[i], b=instruments[i];
    arr.push(a+" plays "+b);
  }
  return arr;
}

function johnLennonFacts(facts)
{
  for (let i=0; i<facts.length; i++)
  {
    var k=facts[i]+"!!!";
    facts[i]=k;
  }
  return facts;
}

function iLoveTheBeatles(number)
{
  var arr=[];
  do {
    arr.push('I love the Beatles!');
    number++;
  } while (number<15);
  return arr;
}
