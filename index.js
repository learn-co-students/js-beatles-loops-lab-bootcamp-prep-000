
//#1
function theBeatlesPlay (arrayMusicians, arrayInstruments) {
	var array = []
	for (var i = 0; i < arrayMusicians.length; i++) {
		array[i] = arrayMusicians[i] + " plays " + arrayInstruments[i]
	}
	return array
}

//#2
function johnLennonFacts(arrayfacts) {
	var i = 0;
	while (i < arrayfacts.length) {
		arrayfacts[i] = arrayfacts[i] + "!!!";
		i++;}
		return arrayfacts
	}

	//3
	function iLoveTheBeatles(n) {
		//var n = 0
		var newarray = []
		do {
			newarray.push("I love the Beatles!");
			n++
		} while (n < 15)
		return newarray
	}
