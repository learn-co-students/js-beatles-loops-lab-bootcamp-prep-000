var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Star'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];


function theBeatlesPlay(musicians, instruments) {

	var arr = [ ];
	for (var i = 0; i < musicians.length; i++) {
	 arr.push(`${musicians[i]} plays ${instruments[i]}`);
}
return arr;
}


function johnLennonFacts (array) {
	var i = 0;
	var combo = [];
	while (i < array.length) {
		combo.push(`${array[i]}!!!`);
		i++;
	}
	return combo;
}

function iLoveTheBeatles(number) {
	var empty = [ ];
	do {
		empty.push(`I love the Beatles!`);
		number++;
	} while (number < 15);
return empty;
}
