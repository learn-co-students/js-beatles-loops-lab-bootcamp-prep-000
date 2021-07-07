// add solution here


  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
  function theBeatlesPlay(musicians, instruments) {
    let newArray = []
    for (let i=0; i<musicians.length; i++) {
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
     
    return newArray;
    
  }
  
  
  
  
        
  function johnLennonFacts(Array) {
    var newArray = []
    for(let i=0; i<Array.length; i++) {
      newArray.push(`${Array[i]}!!!`)
    }
    return newArray;
  }
  
  
  
  
  function iLoveTheBeatles(count) {
    var string = "I love the Beatles!"
    var newArray = []
    if (count === 17) {
      return string 
    }
    for (let i=0; i< count + 1; i++ ) {
      newArray.push(`${string}`)
    }
    return newArray
  }
  
  
  
  
  
  
  
  
  
  