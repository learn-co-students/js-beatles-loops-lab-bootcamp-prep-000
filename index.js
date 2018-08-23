// add solution here
function theBeatlesPlay(musicians, instruments){
        const artists = [];
            musicians.forEach((musician, index) => { 
                artists.push(`${musician} plays ${instruments[index]}`)
       
        })
        return artists;
    }
    theBeatlesPlay(musicians, instruments);
    

function johnLennonFacts(facts){
      let results =[];
      let i = 0;
      while(i < facts.length){
          results.push(facts[i] + "!!!")
          i++
      } 
      return results;   
  }

  johnLennonFacts(facts)
  
  function iLoveTheBeatles(number){
    let myArray = [];
    do {
      number++
      myArray.push("I love the Beatles!");
    } while (number < 15);
    return myArray;
  }
      
  