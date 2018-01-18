function theBeatlesPlay(musicians, instruments){
  var text = []
  for (var i = 0; i < musicians.length; i++){
  text.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return text
}


function johnLennonFacts(facts){
  var text=[]
  let i = 0;
while (i < facts.length){
  text.push(`${facts[i]}!!!`)
i++
}
  return text
}


//function iLoveTheBeatles(num){
  //return an array with "I love the Beatles!" inside num number of times

  //var text = []
  //var i = 0;
//do {
  //   i += 1;
  //   result += i + ' ';
  //} while (i < 8);
//  return text


//

function iLoveTheBeatles(num){
  var array = []

  	do{
      // do somethng to the array //
      // superheroines.push("wonder woman");
      array.push("I love the Beatles!");
        num++
      } while (num < 15)
    //  text.push(`${num[i]}!`)

       return array
  }
