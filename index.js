// add solution here

var theBeatlesPlay = (arr1,arr2) =>{
  let newArr = []
  let j;
  for(let i = 0; i<arr1.length; i++){
    j = i
    newArr.push(`${arr1[i]} plays ${arr2[j]}`)
  }
  return newArr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var johnLennonFacts = arr =>{
  let newArr =[]
  for(let i = 0; i<arr.length; i++){
    newArr.push(`${arr[i]}!!!`)
  }
  return newArr
}

var iLoveTheBeatles = num =>{
  let arr = []

  do{
    arr.push("I love the Beatles!")
    num+=1
  }while(num<15)
  return arr
}








