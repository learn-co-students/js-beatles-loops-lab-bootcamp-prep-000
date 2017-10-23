function theBeatlesPlay(musicians,instruments)
{
  var temp = [];
  for(var i = 0; i < musicians.length; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temp;
}

function johnLennonFacts(facts)
{
  var temp = [];
  while(facts.length > 0){
    temp.push(facts.pop() + "!!!");
  }
  while(temp.length > 0){
    facts.push(temp.pop())
  }
  return facts;
}

function iLoveTheBeatles(n)
{
  var temp = []
  do {
    temp.push("I love the Beatles!")
    n++
  } while (n < 15);
  return temp;
}