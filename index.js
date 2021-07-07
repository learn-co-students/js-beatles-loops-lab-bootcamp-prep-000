// add solution here

function theBeatlesPlay(arrMu,arrIns){
  let newArr = []
  for (let i = 0; i <arrMu.length; i ++){
    let currentMusician = arrMu[i]
    let currentInstru = arrIns[i]
    newArr.push(`${currentMusician} plays ${currentInstru}`)
  }return newArr
}

function johnLennonFacts(arr){
    let i = 0
    let copy = arr.slice(0)
    let newArr = []
  while (i <= copy.length -1){
    newArr.push(copy[i]+ "!!!")
    i +=1
  }return newArr
}

function iLoveTheBeatles(num){
  let newArr = []
  do{
    newArr.push('I love the Beatles!')
    num +=1
  }while (num < 15)
  return newArr
}
