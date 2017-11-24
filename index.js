function theBeatlesPlay(musicians, instruments) {
	var finalArr = [];
	for (var i = 0; i < musicians.length; i++) {
		var str = musicians[i] + ' plays ' + instruments[i];
		finalArr.push(str);
	}

	return finalArr;
}


function johnLennonFacts(arr) {
	var newArr = [];
	var i = 0;
	while (i < arr.length) {
		var str = arr[i] + '!!!';
		newArr.push(str);
		i++;
	}

	return newArr;
}

function iLoveTheBeatles(num) {
	var arr = [];

	do {
		arr.push('I love the Beatles!');
	} while (num < 15) {
		num++;
	}
	return arr;
}
