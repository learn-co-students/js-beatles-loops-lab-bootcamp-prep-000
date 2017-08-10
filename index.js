function theBeatlesPlay(musicians, instruments) {
  var string = []

    for (var i = 0; i < musicians.length; i++ ) {
      string.push(`${musicians[i]} plays ${instruments[i]}`)}
      return string

}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(array) {
    var newArray = []
    var i = 0;
    while (i < array.length) {
      newArray.push(`${array[i]}!!!`);
      i++;
    }
    return newArray;
  }


function iLoveTheBeatles(number) {
	var myEmptyArray = []
	do {
		myEmptyArray.push("I love the Beatles!")
    number++
}
      while (number < 15)

return myEmptyArray

}
