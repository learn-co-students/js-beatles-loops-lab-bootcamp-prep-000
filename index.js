
function theBeatlesPlay( array1 , array2){
  let resultArray = []
  for( let i =0; i<array1.length; i++){
    resultArray[i] = `${array1[i]} plays ${array2[i]}`
  }
  return resultArray
}

function johnLennonFacts(array){
  let i = 0
  while(i<array.length){
    array[i] = array[i]+"!!!"
    i++
  }
  return array
}
 function  iLoveTheBeatles(i){
   let array = []
   do{
     array.push('I love the Beatles!')
     i++
   }while(i<15)
   return array
 }
