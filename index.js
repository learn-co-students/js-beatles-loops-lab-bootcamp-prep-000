function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i = 0; i < musicians.length; i++)
  {
    if(i === 0)
    {
      var string = `${musicians[i]} plays ${instruments[i]}`
    }
    else
    {
      string = `${musicians[i]} plays ${instruments[i]}`
    }
      array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length)
  {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []

  do{

    array.push("I love the Beatles!")

    n++

  }while(n < 15);

  return array 
}
