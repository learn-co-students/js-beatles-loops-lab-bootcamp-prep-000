function theBeatlesPlay(musicians, instruments)
{
  var beatlesArray = []
 for(var i = 0; i < musicians.length; i++){ 
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts)
{
  var lennonArray = [];
  var i = 0

  while (i < facts.length) {
    lennonArray.push(`${facts[i]}!!!`);
   i++;
   }

   return lennonArray
}

function iLoveTheBeatles(num)
{
  var loveArray = []
  
  function incrementVariable() {
   num = num + 1;
   return num;
   }
   
  do {
     loveArray.push("I love the Beatles!");
   } while (incrementVariable() < 15);
   
   return loveArray
}