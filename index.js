function theBeatlesPlay (a,b){
	 var newarray = []
     for (var i = 0; i < 4; i++){
         newarray.push(`${a[i]} plays ${b[i]}`)

     }
	 return newarray
 }

function johnLennonFacts(array){
   var newarray = []
   var counter = 0
   while (counter < array.length){
     newarray.push(`${array[counter]}!!!`)
     counter += 1
   }
   return newarray
 }

function iLoveTheBeatles(number){
  var newarray = []
  do {
    newarray.push("I love the Beatles!")
    number += 1
  } while (number < 15);
  return newarray
}
