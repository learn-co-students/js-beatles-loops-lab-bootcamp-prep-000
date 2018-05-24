
const musicians = [
  "John Lennon", 
  "Paul McCartney", 
  "George Harrison", 
  "Ringo Starr"];
    const instruments = [
      "Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
 
  for(let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray;
}
console.log(theBeatlesPlay());

/*============================ */
function johnLennonFacts(facts) {
  
  const newArray = [];
  let x = facts.length;
  let n = 0;
  
  while ( n < x) {
  newArray.push(`${facts[n]}!!!`);
   n++;
  
  }
  return newArray;
}


/*============================ */

function iLoveTheBeatles(number) {
		let emptyArray =  [];
		
		do {
		emptyArray.push('I love the Beatles!');	
			number++;
		} while  (number < 15);
		return (emptyArray);
	}
	//console.log(iLoveTheBeatles(7));




