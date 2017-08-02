function theBeatlesPlay(musicians, instruments) {
	var empty = [];
	for (let i = 0; i <= 3; i++) {
		 empty.push(`${musicians[i]} plays ${instruments[i]}`);
	}
	return empty
}


function johnLennonFacts(facts){
	var empty = []
	var i = 0
	while (i<facts.length)
 {
	 empty.push(`${facts[i]}!!!`);
	 i++;
 }
 return empty
 }

 function iLoveTheBeatles(n){
 var empty = []


 do {
   empty.push("I love the Beatles!");
	 n++;
 } while (n < 15);
return empty

}
