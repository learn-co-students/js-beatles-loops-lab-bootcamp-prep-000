function theBeatlesPlay(artist, instr){
	let arr = [];
	for(let i = 0; i < artist.length; i++){
		arr.push(`${artist[i]} plays ${instr[i]}`);
	}
	return arr;
}

const facts = 
	[
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function johnLennonFacts(facts){
	var i = 0;
	while(i < facts.length){
		facts[i] += "!!!";
		i++;
	}
	return facts;
}

function iLoveTheBeatles(n){
	let arr = [];
	// for(let i = 0; i < n; i++){
	// 	arr.push('I love the Beatles!');
	// 	i++;
	// }
	// return arr;
	do {
		arr.push("I love the Beatles!");
		n++
	}while(n < 15);
	return arr;
}
