
function theBeatlesPlay(musicians, instruments){
var playList = []
  for ( var i = 0 ; i < musicians.length ; i++){
    playList.push(musicians[i]+" plays "+ instruments[i])
    }
    return playList

}
//   function whileTrue(array){
//
//   for(var i = 0 ; i < array.length  ;i++){
//   return true
// }
//   }

  // function johnLennonFacts(array){
  // var newArray =[]
  // //  while (whileTrue(array)){
  //
  //     for (var i = 0 ;i<array.length ; i++){
  //     newArray.push(array[i]+"!!!")
  //   //  }
  //
  //    }
  //   return newArray
  // //
  // }
  function johnLennonFacts(array){
   var newArray =[]
 	var i = 0
   while (i<array.length){
       newArray.push(array[i]+"!!!")
   		i++
      }
     return newArray

   }

function iLoveTheBeatles(number){
var emptyArray = []
do {
  emptyArray.push("I love the Beatles!")
  number++
}
while (number<15)
return emptyArray


}
