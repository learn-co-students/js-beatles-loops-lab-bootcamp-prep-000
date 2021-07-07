// // add solution here
// function theBeatlesPlay(musicians, instruments) {
//   var plays = [];
//   for(var i = 0; musicians.length > i; i++) {
//     plays.push(musicians[i] + " plays " + instruments[i]);
//   }
//   return plays;
// }

// function johnLennonFacts(arg) {
//   var newFacts = [];
//   var len = arg.length;
//   var i = 0;
//   while(i < len) {
//   newFacts.push(arg[i] + "!!!");
//   i++;
// }
//   return newFacts;
// }

// function iLoveTheBeatles(arg) {
//   var newFacts = [];
//   var len = arg.length;
//   var i = 0;
//   while(i < len) {
//   newFacts.push(arg[i] + "!!!");
//   i++;
// }
//   return newFacts;
// }

// function theBeatlesPlay (musicians,instruments){
//   var songs =[];
//   for (var i = 0; i < musicians.length; i++){
//     songs.push(musicians[i] + " plays " + instruments[i])
//     console.log(musicians, "this is music");
//     console.log(instruments, "this is instrument")
//   }
//   return songs;
// }


// function johnLennonFacts(arg){
//   fact = [];
//   while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }
  
// }


function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}






