// add solution here
// I started out by trying to modify the original array non-destructively without creating a new array, that wasn't 
// the right way to go. Once I switched to pushing to a new array, tests worked

function theBeatlesPlay(musicians, instruments) {
	var plays = "plays";
	var array = [];
	for (var i = 0; i < musicians.length; i++) {			
		array.push(`${musicians[i]} plays ${instruments[i]}`) //= [ ...musicians.slice(i, i+1), plays, ...instruments.slice(i, i+1) ];
		
	} return array;

}

function johnLennonFacts(facts) {
	var i = 0;
	var newFacts = [];
	while (i < facts.length) {		
		var returnFacts = facts[i] + '!!!';
		console.log(++i)
		newFacts.push(returnFacts);
	}	return newFacts;	
}

function iLoveTheBeatles(n) {
	var i = 0;
	var beatlesLove = [];
	do {
		beatlesLove.push('I love the Beatles!');
		i++;
	}
	while (beatlesLove.length < 15 - n);
	return beatlesLove;
}