//BEATLES LOOPS:

//Combiner for loop
function theBeatlesPlay(primary, secondary){
var result=[];
for (let i=0; i<4; i++){
result.push(`${primary[i]} plays ${secondary[i]}`);
  }
return result
}

//Exclamator while loop
function johnLennonFacts(primary){
var result=[];
let i=0;
while(i < primary.length ){
result.push(`${primary[i]}!!!`) 
i++
	}
return result;
}

//"I love the beatles" do-while loop

function iLoveTheBeatles(n){
var result=[];
let i=0;
do{
result.push('I love the Beatles!');
i++
} while (i<(15-n));
return result;
}
