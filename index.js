// add solution here

function theBeatlesPlay(musicians, instruments){
  var myArray = []
  for( let i=0; i<musicians.length; i++ ){
    let string = `${musicians[i]} plays ${instruments[i]}`
    myArray.push(string)
  }
  return myArray
}

function johnLennonFacts(facts){
  let myArray = []
  let i = 0
  while( i < facts.length ){
    let string = facts[i] + '!!!'
    myArray.push(string)
    i++
  }
  
  return myArray
}

function iLoveTheBeatles(num){
  let myArray = []
  
  do{
    myArray.push(`I love the Beatles!`)
    num++
  }while(num < 15)
  
  return myArray
}