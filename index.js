function theBeatlesPlay(musicians, instruments)
{
   var newArray = []
   for (let i = 0, l = musicians.length; i < l; i++)
   {
     newArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return newArray
 }

 function johnLennonFacts(facts)
 {
   var newfactsArray = []
   let l = 0;
   while (l < facts.length) {
       newfactsArray.push(`${facts[l]}!!!`)
     l++;
     }
  return newfactsArray
 }

 function iLoveTheBeatles(number)
 {
   var numberArray = []
   do
   {
   numberArray.push('I love the Beatles!')
   number++;
 }
 while (number < 15);
 return numberArray
 }
