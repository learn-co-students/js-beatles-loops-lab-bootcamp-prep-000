function theBeatlesPlay(array1, array2) {
	var beatles = [];
	for (var i = 0; i < array1.length; i++) {
		beatles.push(`${array1[i]} plays ${array2[i]}`)
	} return beatles;
}

function johnLennonFacts(array) {
	var exclaim = [];
	var i = 0;
	while (i < array.length) {
		exclaim.push(`${array[i]}!!!`)
		i++
	} return exclaim;
}

function iLoveTheBeatles(num) {
	var beatlesLove = [];
	if (num > 15) {
	  beatlesLove.push("I love the Beatles!");
	  } else {
	    while (num < 15) {
		beatlesLove.push("I love the Beatles!");
		num++;
	}
} return beatlesLove;
}
