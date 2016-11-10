var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Star'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];


function theBeatlesPlay(musicians, instruments) {

	var arr = [ ];
	for (var i = 0; i < musicians.length; i++) {
	 arr.push(`${musicians[i]} plays ${instruments[i]}`);
}
return arr;
}


var array = ['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];
var i = 0;

function johnLennonFacts (array) {
	var combo = [];
	while (i < array.length) {
		combo.push(`${array[i]}!!!`);
		i++;
	}
	return combo;
}
