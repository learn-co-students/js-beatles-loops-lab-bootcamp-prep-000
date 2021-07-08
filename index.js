// add solution here
function theBeatlesPlay (musicians, instruments) {
	let arr =  [];
	
	for (let i = 0; i < 4; i ++) {
		arr.push(`${musicians[i]} plays ${instruments[i]}`);
	}	
	return arr;
}

function johnLennonFacts (facts) {
			let i = 0;
			let arr = [];
			while (i < facts.length) {
				arr.push(`${facts[i]}!!!`);
				i++
	}
return arr;
}

function iLoveTheBeatles (n) {
	let arr = [];
	
	do {
		arr.push("I love the Beatles!");
		n++;
	}
	while (n < 15) ;
  return arr;
}
  
