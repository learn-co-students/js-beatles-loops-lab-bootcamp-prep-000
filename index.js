function theBeatlesPlay(musicianArray, instrumentArray) {
	var newStringArray = []
	for (var i = 0; i < musicianArray.length; i++) {
		newStringArray.push(musicianArray[i] + " plays " + instrumentArray[i])
    }
	return newStringArray
}

function johnLennonFacts(factArray) {
	var i = 0
	while (i < factArray.length) {
		factArray[i] = factArray[i] + '!!!'
		i += 1
    }
		return factArray
}

function iLoveTheBeatles(num) {
	var loveArray = []
	do {
    	loveArray.push("I love the Beatles!")
		num += 1
	} while (num < 15);
	return loveArray
}
