function theBeatlesPlay(musicians,instruments){
  var temp = []
  for (let i=0; i < musicians.length; i++ ){
    temp.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temp
}


function johnLennonFacts(facts){
  let i=0
  while(i < facts.length){
      facts[i]=facts[i] + "!!!"
      i++
  }


  return facts

}

function iLoveTheBeatles(number){
  var temp = []
  do{
    temp.push("I love the Beatles!")
    number++
  } while (number < 15)
  return temp

}
