function theBeatlesPlay(musicians, instruments){
	let array = []
	for (let i = 0; i<musicians.length; i++){
		console.log(i)
		array.push(`${musicians[i]} plays ${instruments[i]}`)
	}
return array
}
console.log(theBeatlesPlay(["John Lennon", "Billy Briggs"], ["Drums", "Bongoes"]))

function johnLennonFacts(facts){
let array2 = []
let i = -1
	while (i <facts.length -1){
// i should start at minus one and end 1 before the end 
	i++
console.log(i)
array2.push(facts[i] + "!!!")
}
return array2
}
console.log(johnLennonFacts(["He eats mud", "He Likes cake", "and toast", "and beatles"]))