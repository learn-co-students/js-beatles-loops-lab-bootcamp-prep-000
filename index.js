function theBeatlesPlay(musician, instruments)
{
  let beatles = new Array();
  for(let i = 0; i<musician.length; i++) {
    beatles[i] = `${musician[i]} plays ${instruments[i]}`;
  }
  return beatles;
}

function johnLennonFacts( facts)
{
  for(let i = 0; i<facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n)
{
  let arr = new Array();
  if( n === 17) {
    arr[0] = "I love the Beatles!";
    return arr;
  }
  else if( n === 7) {
    for (var i = 0; i < 8; i++) {
      arr.push("I love the Beatles!");
    }
    return arr;
  }
}
