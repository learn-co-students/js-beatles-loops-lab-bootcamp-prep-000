function theBeatlesPlay(musicians, instruments){
    var newArr = [];
    for (var i = 0; i < musicians.length; i++) {
      for (var i = 0; i < instruments.length; i++) {
        newArr.push(musicians[i] + " plays " + instruments[i])
      }
    }
    return newArr
}
// function theBeatlesPlay(musicians, instruments){
//     for (var i in musicians) {
//       for (var j in instruments) {
//         return musicians[i] + " plays " + instruments[j]
//       }
//     }
// }

//
function johnLennonFacts(array){
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var newArr = [];
  var i = 0
  while (i < array.length) {
      newArr.push(array[i] + "!!!");
      i++;
  }
  return newArr
}

function iLoveTheBeatles(number){
  var newArr = [];
  do {
    newArr.push("I love the Beatles!")
    number++
  } while (number < 15);
  return newArr
}

// function iLoveTheBeatles(num) {
//     var love = [];
//     do {
//         love.push("I love the Beatles!");
//         num++;
//     } while (num < 15);
//
//     return love;
// }
