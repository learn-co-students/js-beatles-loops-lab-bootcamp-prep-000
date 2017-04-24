function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var array = []
   for(var i = 3; i >= 0 && i <= 4; i--) {
     array.unshift(musicians[i] + " plays " + instruments[i]);
   }
   return array;
 }

 function johnLennonFacts(facts) {
   const shoutedArray = []
   var i = 0
   while (i < facts.length) {
     //shoutedArray.push(facts[i] + "!!!")
     shoutedArray.push(`${facts[i]}!!!`)
     i++
   }
   return shoutedArray
 }

 function iLoveTheBeatles(n) {
   var a = []
   do {
     a.push('I love the Beatles!')
     n++
   } while(n < 15);
   return a;
 }
