function theBeatlesPlay(arraym , arrayi){
var temparr = []

for(let i = 0; i< arraym.length ; i++){
    temparr.push(arraym[i] + " plays " + arrayi[i])
}
  return temparr
}

function johnLennonFacts(array){
var temparr = []
let i = 0;
  while(i < array.length){
temparr.push(array[i]+ "!!!")
    i++
  }
  return temparr
}

function iLoveTheBeatles(num){
var temparr = []

do{
  temparr.push("I love the Beatles!")
  num++
}while(num<15);
  return temparr
}
