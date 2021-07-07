// add solution here
function theBeatlesPlay(arraym,arrayi){
  var array=[]
  for (let i=0;i<arraym.length;i++){
    array.push(arraym[i]+" plays "+arrayi[i])
  }
  return array
}
function iLoveTheBeatles(number){
  var array=[]
  do{
    array.push('I love the Beatles!')
    number++
  } while (number<15)
  return array
}
function johnLennonFacts(array){
 var facts=[]
  var i=0
  while(i<array.length){
    facts.push(array[i]+'!!!')
    i++
  }
  return facts
}