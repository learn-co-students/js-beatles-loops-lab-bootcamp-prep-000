// // add solution here
//
//#1 theBeatlesPlay

function theBeatlesPlay (musiciansArray, instrumentsArray) {

let arr = []

let mLen = musiciansArray.length;
let iLen = instrumentsArray.length;

for (let i = 0; i < mLen; i++) {
arr.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
}
return arr
}


// //#2 johnLennonFacts
//
// let facts = [
//   'a',
//   'b',
//   'c',
//   'd'
// ]

function johnLennonFacts (arr) {
  let factsWithExc = []
  let arrLength = arr.length
  let exc = '!!!'
  let count = 0
  while (count<arr.length) {
       factsWithExc.push(arr[count] += exc);
       count+=1
  }
  return arr
}

// WHAT FOLLOWS IS FOR LOOP, NOT WHILE LOOP, JUST FOR FUN!:

// function johnLennonFacts(arr) {
//   let factsWithExc = []
//   let arrLength = arr.length
//   let exc = '!!!'
//
//   for (i=0;i<arr.length;i++) {
//     factsWithExc.push(arr[i] += exc);
//
//   }
//   return factsWithExc;
// }

//#3 iLoveTheBeatles

// function iLoveTheBeatles (number) {
//   let arr = [];
//   do {
//     arr.push('I love the Beatles!');
//   } while (number < 15) {
//     return 'I love the Beatles';
//     number++;
//   }
// }
