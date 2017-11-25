function theBeatlesPlay(mus, ins){
	var result = []
	for (var i = 0; i < mus.length; i++){
		result.push(`${mus[i]} plays ${ins[i]}`)
	}
	return result
}

function johnLennonFacts(arr){
	var result = []
	var i = 0
	while (result.length != arr.length){
		result.push(arr[i].concat('!!!'))
		i++
	}
	return result
}

function iLoveTheBeatles(n){
	var result = []
	do{
		result.push("I love the Beatles!")
		n++
	} while(n < 15)
	return result
}
