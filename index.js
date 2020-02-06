function theBeatlesPlay(musicians, instruments) {
    var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    var array = [];
   for (var i = 0; i < musicians.length; i++) {
     array.push(musicians[i] + ' plays ' + instruments[i]);
   }
   return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  let i = 0;
  while (i < array.length) {
    array[i] += '!!!';
    i++;
   }
  return array;
}

let loudFacts = johnLennonFacts(facts)
console.log(loudFacts)



function iLoveTheBeatles(num) {
  var arr = [];
 if  (num > 15) {
   arr.push("I love the Beatles!")
  return arr;
 } else {
      num++;
       var i = 15 - num

      do {
        arr.push("I love the Beatles!");
        i++;
      } while (i < 15)
     return arr
    }
}
